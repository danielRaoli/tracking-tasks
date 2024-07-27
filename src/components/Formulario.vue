<script setup>
import Temporizador from './Temporizador.vue';
import { ref } from 'vue'

const todoName = ref('')

const emit = defineEmits(['tarefaFinalizada'])

function finalizarTarefa(tempo) {

    emit('tarefaFinalizada', tempo, todoName.value)
}
</script>

<template>
    <div class="box formulario">

        <div class="wrapper">

            <div class="form-input" role="form" arie-label="formulario para criacao de tarefa">

                <input v-model="todoName" type="text" placeholder="Qual tarefa deseja iniciar">

            </div>
            <Temporizador @aoFinalizar="finalizarTarefa" />

        </div>

    </div>
</template>

<style>
.formulario {
    background-color: var(--bg-primario);
    padding: 2rem;
    height: max-content;
}


.form-input {
    flex: 1;
    height: 40px;
    position: relative;
    border: 2px solid black;
    border-radius: 8px;
}

.form-input:focus-within {
    outline: 2px solid #1c3d45;
}

input {

    all: unset;
    border: none;
    background-color: var(--bg-primario);
    color: var(--texto-primario);
    font-size: 24px;
    position: absolute;
    width: 100%;
    border-radius: 8px;
}

input::placeholder {
    color: var(--texto-primario);

}


.wrapper {
    display: flex;
    align-items: center;
}

@media only screen and (max-width:1000px) {
    .formulario {
        padding: 1rem;
    }
}


@media only screen and (max-width:760px) {
    .wrapper {
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .form-input {
        width: 100%;
        border-radius: 8px;
        height: 30px;
        border: 2px solid var(--secundary);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    input{
        font-size: 16px;
    }

    .formulario{
        min-height: 250px;
    }
}
</style>