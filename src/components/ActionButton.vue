<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    desabilitado : Boolean,
    texto : String,
    icone: String
})

const emit = defineEmits(['clicado'])

const handleClick = () => {emit('clicado')}

</script>

<template>
    <button @click="handleClick" class="button" :disabled="desabilitado">
    
        <span class="icon">
    
            <i :class="icone"></i>

        </span>

        <span>{{texto}}</span>

    </button>
</template>

<style>
.button{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
    width: auto;
}
</style>