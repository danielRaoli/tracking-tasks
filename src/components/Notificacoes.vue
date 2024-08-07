<script lang="ts" setup>
import { Tipo } from '@/interfaces/INotificacao'
import {computed} from 'vue'
import { useStore } from '@/store';
const contexto  = {
    [Tipo.SUCESSO]: 'is-success',
    [Tipo.FALHA]: 'is-danger',
    [Tipo.ATENCAO]: 'is-warning'
}
const store = useStore()

const notificacoes = computed(() => store.state.notificacoes)


</script>

<template>
    <div class="notifications">
        <article class="message"  v-for="notificacao in notificacoes" :key="notificacao.id" :class="contexto[notificacao.tipo]">
            <div class="message-header">
                {{ notificacao.titulo }}
            </div>
            <div class="message-body">
                {{ notificacao.message }}
            </div>
        </article>
    </div>

</template>


<style>
.notifications{
    position: absolute;
    z-index: 1;
    width: 300px;
    right: 0;
    padding: 8px;
}

</style>