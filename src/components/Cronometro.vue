<script  setup>

import { computed, defineProps } from 'vue';
const props = defineProps({
    tempoEmSegundos : Number
})

const hour = computed(() => {
  const date = new Date(props.tempoEmSegundos * 1000);
  return date.toISOString().substring(11, 19); 
});


</script>

<template>
    <strong><span>{{ hour }}</span></strong>
</template>


<style>
span{
  color: var(--texto-primario);
}
</style>