<script lang="ts" setup>
import { defineProps, onMounted } from 'vue';
import Box from '@/components/Box.vue';
import Tarefa from '@/components/Tarefa.vue';
import type ITarefa from '@/interfaces/ITarefa';

const props = defineProps<{
    tarefas: ITarefa[]
}>()

</script>

<template>
    <div class="lista">
    
        <Box v-if="props.tarefas.length > 0" v-for="(tarefa,index) in props.tarefas" :key="index">
    
            <Tarefa :tarefa="tarefa"/>
    
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