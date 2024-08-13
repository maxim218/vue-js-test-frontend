<script setup>
  import {ref} from "vue";

  const count = ref(0);

  function btnClickWithErr() {
    const nullObj = null;
    console.log(nullObj.x);
    
    count.value++; 
  }
</script>

<template>
  <div>
    <button @click="btnClickWithErr()">Сгенерить ошибку специально</button>
  </div>
</template>