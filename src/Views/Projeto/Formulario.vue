<script lang="ts" setup>
import type IProjeto from '@/interfaces/IProjeto';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, EDITAR_PROJETO } from '@/store/tipo-mutacoes';
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
import { Tipo } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/Notificador';
import { ATUALIZAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';

const props = defineProps<{
    id: string
}>()

const name = ref<string>('')
const { notificar } = useNotificador()
const store = useStore();
const router = useRouter();


onMounted(() => {
    if(props.id){
       const projeto =  store.state.projetos.find(proj => proj.id == props.id) as IProjeto;
       name.value = projeto.name
    }
});

function salvar(){
    if(props.id){
        store.dispatch(ATUALIZAR_PROJETO, {id: props.id, name: name.value} as IProjeto)
        notificar(Tipo.ATENCAO, 'Atualizado!', 'O projeto foi atualizado com sucesso!')
    }
    else{
        store.dispatch(CADASTRAR_PROJETO,name.value)
        notificar(Tipo.SUCESSO, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
    }
    
    router.push('/projetos')
    
}
</script>

<template>
     <form @submit.prevent="salvar">
            <div class="field">
                <label for="project-name">Nome</label>
                <input class="form-input" type="text" v-model="name" id="project-name">
            </div>
            <div class="field">
                <button type="submit" class="button">Save</button>
            </div>
        </form>
</template>