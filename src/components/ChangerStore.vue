<script setup>
  import {usePlayerStore} from "@/stores/usePlayerStore.js";

  const playerStore = usePlayerStore();
  
  function changeCounter() {
    playerStore.incCount();
  }
</script>

<template>
  <button @click="changeCounter()" >Увеличить глобальный счётчик : {{ playerStore.getCoins }}</button>
</template>