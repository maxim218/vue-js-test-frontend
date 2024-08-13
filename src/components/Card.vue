<script setup>
  import { ref } from "vue";

  const props = defineProps(['content', 'counterNumber']);
  const emit = defineEmits(['my-clk-btn-e']);
  
  console.log(`${props.content}  ${typeof(props.content)}`);
  console.log(`${props.counterNumber}  ${typeof(props.counterNumber)}`);
  
  const nStart = parseInt(props.counterNumber) || 0;
  const n = ref(nStart);
  
  function addCount() {
    n.value = 1 + n.value;
    emit('my-clk-btn-e');
  }
</script>


<template>
  <div style="background: yellow; color: black; margin-bottom: 12px; padding: 10px;">
    <h2>{{ content }} - {{ n }}</h2>
    <div style="font-size: 30px;">
      <slot />
    </div>
    <br>
    <button @click="addCount()" style="font-size: 24px; cursor: pointer;">Add</button>
  </div>
</template>


