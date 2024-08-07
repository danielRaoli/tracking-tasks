<script setup>
import { computed, ref } from 'vue';

const modoEscuroAtivo = ref(false)

const emit = defineEmits(['modoAlterado'])

const buttonText = computed(() => {
    return modoEscuroAtivo.value ? 'modo claro' : 'modo escuro'
})

function alterarModo() {
    modoEscuroAtivo.value = !modoEscuroAtivo.value
    emit('modoAlterado', modoEscuroAtivo.value)
}

</script>

<template>
    <header>
        <div class="icon">
            <img src="../assets/logo.png" alt="logo da alura">
            <span>Tracking Tasks</span>
        </div>
        <button class="button" @click="alterarModo">
            {{ buttonText }}
        </button>

        <nav>
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos">
                        <i class="fas fa-project-diagram"></i>
                        projetos
                    </router-link>
                </li>
            </ul>


        </nav>
    </header>

</template>

<style>
header {
    background-color: #1c3d45;
    width: 30%;
    height: 100vh;
    padding: 8px;
    border-radius: 0 8px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;


}

.icon {
    background-color: transparent;
    display: flex;
    width: auto;
    height: auto;

}

.icon>span {
    font-size: 24px;
    font-weight: bold;
    color: #fefefe;
}

img {
    height: 200px;
    width: auto;
}



@media only screen and(max-width:768px) {
    header {
        height: auto;
        padding: 2.5px;
    }

    header img {
        height: 100px;
    }
}

@media only screen and (max-width:1000px) {
    header {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
}
</style>