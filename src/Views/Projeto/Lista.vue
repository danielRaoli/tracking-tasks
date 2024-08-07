<script lang="ts" setup>
import { useStore } from '@/store';
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';
import { computed } from 'vue'
import useNotificador from '@/hooks/Notificador';
import { Tipo } from '@/interfaces/INotificacao';
import { REMOVER_PROJETO } from '@/store/tipo-acoes';


const store = useStore();
store.dispatch('OBTER_PROJETOS');

const notificar = useNotificador();

const projetos = computed(() => store.state.projetos)

function excluir(projetoid: string) {
    store.dispatch(REMOVER_PROJETO, projetoid)
    notificar.notificar(Tipo.FALHA,'Projeto excluido','Projeto excluido com sucesso')
}

</script>

<template>
    <router-link to="/projetos/novo" class="button">
        <span class="icon is-small">
            <i class="fas fa-plus"></i>
        </span>
        <span>Novo projeto</span>
    </router-link>
    <table class="table table-is-fullwidth">
        <thead>
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Acoes</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <th>{{ projeto.id }}</th>
                <th>{{ projeto.name }}</th>
                <th>
                    <div class="actions">
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </div>
                </th>
            </tr>
        </tbody>
    </table>
</template>