<script setup>
import { ref } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefas from './components/Tarefas.vue';

const tarefas = ref([])

function adicionarTarefa(tempo, descricao) {
    tarefas.value.push({
        descricao: descricao,
        tempo: tempo
    })
    console.log(tarefas)
}

const modoEscuroAtivo = ref(false)

function alterarModo(modoAtivo) {
    modoEscuroAtivo.value = modoAtivo
}
</script>

<template>
    <main :class="{'modo-escuro' : modoEscuroAtivo}">
        <BarraLateral @modoAlterado="alterarModo" />
        <div class="conteudo">
            <Formulario @tarefaFinalizada="adicionarTarefa" />
    
            <Tarefas :tarefas="tarefas" />
        </div>
    </main>
</template>

<style scoped>
main {
    --bg-primario: #fff;
    --texto-primario: #000;
    --secundary: #101430;

    display: flex;
    width: 100%;
    background-color: var(--bg-primario);
    color: var(--texto-primario);
    margin: 0;
}

main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
    --secundary: #ddd;
}

.conteudo {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
    width: 68%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 1rem;
}

</style>
