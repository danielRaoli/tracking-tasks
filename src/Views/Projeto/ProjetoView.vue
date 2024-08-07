<script lang="ts" setup>



</script>


<template>
    <section class="conteudo">
        <h1>Projetos</h1>
        <router-view></router-view>

    </section>
</template>


<style>
h1 {
    text-align: center;
}

form,
table {
    background-color: var(--bg-primario);
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

@media only screen and (max-width:1000px) {
    main {
        flex-direction: column;
        height: 100vh;
    }

    .conteudo {
        width: 100%;
    }
}
</style>