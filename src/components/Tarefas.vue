<script setup>
import { defineProps, onMounted } from 'vue';
import Box from './Box.vue';
import Tarefa from './Tarefa.vue';

const props = defineProps({
    tarefas: Array
})
</script>

<template>
    <div class="lista">
    
        <Box v-if="tarefas.length > 0" v-for="(tarefa,index) in tarefas" :key="index">
    
            <Tarefa :descricao="tarefa.descricao" :tempoEmSegundos="tarefa.tempo" />
    
        </Box>
    
        <Box v-else>
    
            <span>Nenhuma Tarefa Registrada</span>
    
        </Box>
    
    </div>
</template>

<style>
div {
    margin-bottom: 10px;
}

.lista{
    padding: 1rem
}
</style>