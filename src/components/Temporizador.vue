<script setup>
import { ref } from 'vue'
import Cronometro from './Cronometro.vue';
import ActionButton from './ActionButton.vue';

const cronomeRodando = ref(false)

let tempoEmSegundos = ref(0)
const interval = ref(0)

const emit = defineEmits(['aoFinalizar'])

function iniciar() {
    cronomeRodando.value = !cronomeRodando.value
    interval.value = setInterval(() => {
        tempoEmSegundos.value++
    }, 1000)
}

function parar() {
    cronomeRodando.value = !cronomeRodando.value
    clearInterval(interval.value)
    emit('aoFinalizar', tempoEmSegundos.value)
    tempoEmSegundos.value = 0
}
</script>

<template>
    <div class="column wrapper-time">
    
    
    
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    
        <div class="actions">
    
            <ActionButton :icone="'fa fa-play'" @clicado="iniciar" :texto="'play'" :desabilitado="cronomeRodando" />
    
    
    
            <ActionButton :icone="'fa fa-stop'" @clicado="parar" :texto="'stop'" :desabilitado="!cronomeRodando" />
    
        </div>
    
    
    </div>
</template>


<style>
.wrapper-time {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.actions{
    display: flex;
    gap: 10px;
}

div {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}

@media only screen and (max-width:760px) {
    .wrapper-time{
        width: 100%;
    }
}
</style>