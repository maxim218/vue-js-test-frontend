<script setup>
  const props = defineProps(['user']);
  const emit = defineEmits(['card-clk-e']);
  
  const firstname = props.user.firstname;
  const lastname =  props.user.lastname;
  const age = props.user.age;
  
  function myCardClick() {
    const param = `Name: ${firstname} Surname: ${lastname} Age: ${age}`;
    emit('card-clk-e', param);
  }
</script>


<template>
  <div style="cursor: pointer; background: aqua; padding: 10px; color: black;" @click="myCardClick()">
    Firstname: {{ firstname }}
    <br>
    Lastname: {{ lastname }}
    <br>
    Age: {{ age }}
  </div>
  <br>
</template>
