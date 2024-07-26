
<script setup>
import { defineProps } from 'vue';
import Cronometro from './Cronometro.vue';

const props = defineProps({
    descricao: String,
    tempoEmSegundos: Number
})
</script>

<template>
    
        <div class="columns ">
    
    
    
            <div class="column column-is-three">
    
    
    
                <span>{{ descricao || 'tarefa sem descricao'}}</span>
    
    
    
            </div>
    
    
    
            <div class="column column-is-one">
    
    
    
                <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    
            </div>
    
        </div>

</template>
