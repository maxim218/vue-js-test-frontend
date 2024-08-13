<script setup>
  import { inject } from 'vue';

  const myMessageData = inject('myMessageDataKey');
</script>

<template>
  <br>
  <div style="background: black; padding: 12px;">
    {{ myMessageData }}
  </div>
  <br>
</template>