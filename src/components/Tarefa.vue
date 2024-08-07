<script lang="ts" setup>
import { defineProps } from 'vue';
import Cronometro from './Cronometro.vue';
import type ITarefa from '@/interfaces/ITarefa';
import { useStore } from '@/store';

const props = defineProps<{
    tarefa: ITarefa
}>();
const store = useStore();


function excluir(tarefaid: string) {
    store.dispatch('REMOVER_TAREFA', tarefaid);
}

</script>

<template>

    <div class="columns ">



        <div class="column column-is-three">



            <span>{{ tarefa.name || 'tarefa sem descricao' }}</span>



        </div>

        <div class="column column-is-one">
            <span>{{ tarefa.projetoId }}</span>

        </div>



        <div class="column column-is-one">



            <Cronometro :tempoEmSegundos="tarefa.time" />

        </div>
        <div class="column column-is-one">
            <button @click="excluir(tarefa.id)">

                <span class="icon is-small">
                    <i class="fas fa-trash"></i>
                </span>

            </button>
        </div>

    </div>

</template>
