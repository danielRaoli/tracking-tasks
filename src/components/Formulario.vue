<script  setup>
import Temporizador from './Temporizador.vue';
import {ref} from 'vue'

const todoName = ref('')

const emit = defineEmits(['tarefaFinalizada'])

function finalizarTarefa(tempo){

    emit('tarefaFinalizada',tempo,todoName.value)
}
</script>

<template>
    <div class="box formulario">
    
        <div class="columns is-flex">
    
            <div class="column column-is-6 form-input" role="form" arie-label="formulario para criacao de tarefa">
    
                <input v-model="todoName" type="text" placeholder="Qual tarefa deseja iniciar">
    
            </div>
            <Temporizador @aoFinalizar="finalizarTarefa" />
            
        </div>
    
    </div>
</template>

<style>
.formulario{
    background-color: var(--bg-primario);
    padding: 2rem;

}


.form-input{
    border-radius: 8px;
    height: auto;
    width: 100%;
    border: 2px solid var(--secundary);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.form-input:focus-within{
    outline: 2px solid rgb(92, 29, 156);
}

input{

    all: unset;
    border: none;
    background-color: var(--bg-primario);
    color: var(--texto-primario);
    font-size: 24px;
    position: absolute;
    width: 100%;
}

input::placeholder{
    color: var(--texto-primario);

}

</style>