<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import Formulario from '@/components/Formulario.vue'
import Tarefas from './Tarefas.vue';
import  type ITarefa from '@/interfaces/ITarefa';
import { useStore } from '@/store';

const store = useStore()
store.dispatch('OBTER_TAREFAS')

const tarefas = computed(() => store.state.tarefas)


function adicionarTarefa(tarefa: ITarefa) {
    store.dispatch('ADICIONAR_TAREFA',tarefa)

}

onMounted(() => {
    store.dispatch('OBTER_PROJETOS')
});

</script>

<template>
    <div class="conteudo">
        <Formulario @tarefaFinalizada="adicionarTarefa" />

        <Tarefas :tarefas="tarefas" />
    </div>
</template>


<style>
.conteudo {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
    width: 68%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 1rem;
}

@media only screen and (max-width:1000px) {
    main {
        flex-direction: column;
        height: 100vh;
    }

    .conteudo {
        width: 100%;
    }
}
</style>