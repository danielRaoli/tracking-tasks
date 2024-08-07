import type IProjeto from "@/interfaces/IProjeto";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { EXCLUIR_PROJETO, type ADICIONA_PROJETO, type EDITAR_PROJETO } from "./tipo-mutacoes";
import { Tipo, type INotificacao } from "@/interfaces/INotificacao";
import http from '@/http'
import type { ATUALIZAR_PROJETO, CADASTRAR_PROJETO, OBTER_PROJETOS, REMOVER_PROJETO } from "./tipo-acoes";
import type ITarefa from "@/interfaces/ITarefa";

/// defino o estado inicial dos itens que vamos disponibilizar no contexto global 
interface Estado {
    projetos : IProjeto [],
    tarefas: ITarefa [],
    notificacoes: INotificacao[]
}

/// para acessar a nossa store e necesario passar uma key que definimos assim
export const key: InjectionKey<Store<Estado>> = Symbol()

/// aqui criamos nossa store e definimos o estado inicial 
export const store = createStore<Estado>({
    state: {
        projetos: [],
        tarefas: [],
        notificacoes: []
    },
    mutations: {
        ADICIONA_PROJETO(state : Estado, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                name: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        EXCLUIR_PROJETO(state : Estado, projetoId : string){
            state.projetos = state.projetos.filter(p => p.id !== projetoId)
        },
        EDITAR_PROJETO(state : Estado, projeto : IProjeto){
            const projetoEditavelIndex = state.projetos.findIndex(p => p.id == projeto.id)
            state.projetos[projetoEditavelIndex] = projeto
        },
        OBTER_TODOS_PROJETOS(state : Estado, projetos : IProjeto[]){
            state.projetos = projetos
        },
        OBTER_TODAS_TAREFAS(state : Estado, tarefas : ITarefa[]){
            state.tarefas = tarefas;
        },
        NOTIFICAR(state : Estado, notificacao : INotificacao){
            notificacao.id = new Date().getTime()
            state.notificacoes.push(notificacao)
            
            setTimeout(() => { state.notificacoes = state.notificacoes.filter(n => n.id !== notificacao.id)},3000)
        }
    },
    actions:{
        OBTER_PROJETOS({ commit }){
            http.get('projetos').then(resposta => commit('OBTER_TODOS_PROJETOS', resposta.data))
        },
        CADASTRAR_PROJETO(contexto, nomeDoProjeto : string){
            http.post('projetos',{name: nomeDoProjeto} )
        },
        REMOVER_PROJETO({commit}, projetoid : string){
            http.delete(`projetos/${projetoid}`).then(() => commit(EXCLUIR_PROJETO,projetoid))
        },
        ATUALIZAR_PROJETO(contexto, projeto : IProjeto ){
            http.put(`projetos/${projeto.id}`, projeto)
        },
        OBTER_TAREFAS({commit}){
            http.get('tarefas').then(response => commit('OBTER_TODAS_TAREFAS',response.data))
        },
        ADICIONAR_TAREFA({dispatch}, tarefa : ITarefa){
            http.post('tarefas', tarefa).then(() => dispatch('OBTER_TAREFAS'))
        },
        REMOVER_TAREFA({dispatch}, tarefaId : string){
            http.delete(`tarefas/${tarefaId}`).then(() => dispatch('OBTER_TAREFAS'))
        }

    }
})

export function useStore() : Store<Estado>{
    return vuexUseStore(key)
}