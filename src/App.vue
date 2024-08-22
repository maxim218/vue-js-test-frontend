<script setup>
  import { ref, computed, onMounted, onUpdated, watch, provide } from 'vue';
  import Card from "@/components/Card.vue";
  import User from "@/components/User.vue";
  import Rectangle from "@/components/Rectangle.vue";
  import DogPicture from "@/components/DogPicture.vue";
  import MySpecialErrorComp from "@/components/MySpecialErrorComp.vue";
  import {usePlayerStore} from "@/stores/usePlayerStore.js";
  import ChangerStore from "@/components/ChangerStore.vue";
  
  // init
  const playerStore = usePlayerStore();
  
  console.log('==============================================');
  console.log(playerStore.xNum); // 100
  playerStore.xNum = 218;
  console.log(playerStore.xNum); // 218
  playerStore.xNum += 82;
  console.log(playerStore.xNum); // 300
  console.log('==============================================');
  console.log(playerStore.sString);  // Programming
  playerStore.sString = 'Hello ';
  console.log(playerStore.sString);  // Hello
  playerStore.sString += 'world';
  console.log(playerStore.sString);  // Hello world
  console.log('==============================================');
  
  // set
  playerStore.setFirstname('George');
  playerStore.setLastname('Georgievashvivli');
  // get
  const pF = playerStore.getFirstname;
  const pL = playerStore.getLastname;
  // log
  console.log(pF);
  console.log(pL);
  
  const myMessageData = ref("Hello");
  provide('myMessageDataKey', myMessageData);
  
  const x = ref(`{"a": 100, "b": 400}`);
  
  const n = ref(0);
  
  const task = ref("");
  
  const students = ref([
    {name: "Maxim", age: 18, k: 'k111'},
    {name: "Nina", age: 45, k: 'k222' },
    {name: "George", age: 77, k: 'k333' }
  ]);
  
  function zeroAge(index) {
    students.value[index].age = 0;
  }
  
  function sortByAge() {
    students.value.sort((b, a) => {
      return a.age - b.age;
    });
  }
  
  function okCondition() {
    return (n.value % 2 === 0);
  }
  
  function getColorClassObject() {
    if (n.value % 2 !== 0)
      return { 'red-class': true };
    else 
      return { 'blue-class': true };
  }
  
  const nType = computed(() => {
    if (n.value % 2 === 0)
      return "Четное";
    else 
      return "НЕ Четное";
  });
  
  function addToN() {
    n.value = 1 + n.value;
  }
  
  function getDataN() {
    return `N: ${n.value}`;
  }
  
  function changeX() {
    const jsonString = x.value;
    const obj = JSON.parse(jsonString);
    obj.a += 1;
    obj.b += 1;
    x.value = JSON.stringify(obj);
  }
  
  function toMessage() {
    const jsonString = x.value;
    const obj = JSON.parse(jsonString);
    return `${obj.a} : ${obj.b}`;
  }

  onMounted(() => { 
    console.log('On Mounted OK');
  });

  onUpdated(() => {
    // console.log('Updated')
  });

  watch(n, async (newN) => {
    console.log(`N: ${newN}`);
    const url = `https://jsonplaceholder.typicode.com/todos/${newN}`;
    const response = await fetch(url);
    const answer = await response.json();
    task.value = answer.title;
    console.log(answer);
  });
  
  function logCard(name) {
    console.log(`Emit in Card: ${name}`);
  }
  
  const arrayCards = ref([
    { content: "First", counterNumber: 10, key: "k-1-1" },
    { content: "Second", counterNumber: 20, key: "k-2-2" },
    { content: "Third", counterNumber: 30, key: "k-3-3" },
    { content: "Fourth", counterNumber: 40, key: "k-4-4" }
  ]);
  
  function showUserInfo(cardData) {
    alert(cardData);
  }
</script>

<template>
  <div class="a-class">
    <div style="background: darkblue; color: white; font-size: 24px; padding: 20px;">
      <p> {{ playerStore.getFirstname }}</p>
      <p> {{ playerStore.getLastname }}</p>
      <p> {{ playerStore.getCoins }}</p>
      <br>
      <ChangerStore></ChangerStore>
    </div>
    <br>
    <br>
    <h1 class="class-animation-a" style="display: inline-block;">Проект Максима</h1>
    <h2>Проект создан на Vue.js</h2>
    <br>
    <DogPicture></DogPicture>
    <br>
    <br>
    <MySpecialErrorComp></MySpecialErrorComp>
    <br>
    <br>
    <User @card-clk-e="cardData => showUserInfo(cardData)"  :user="{
      firstname: 'Maxim',
      lastname: 'Petrov',
      age: 21
    }"></User>

    <User @card-clk-e="cardData => showUserInfo(cardData)"  :user="{
      firstname: 'Ivan',
      lastname: 'Ivanov',
      age: 37
    }"></User>
    
    <br>
    <br>
    <div v-for="card in arrayCards" :key="card.key">
      <Card :content="card.content" :counterNumber="card.counterNumber" @my-clk-btn-e="logCard(card.key)">
        <i>
          <u>{{ card.content }} card</u>
        </i>
      </Card>
    </div>
    <br>
    <div class="b-class" @click="changeX()">Увеличить</div>
    <br>
    <h2 style="color: black">{{ toMessage() }}</h2>
    <br>
    <h2 :class="getColorClassObject()">{{ getDataN() }} {{ nType }}</h2>
    <button @click="addToN()">Inc N</button>
    <br>
    <div>
      <h1 v-if="okCondition()">Hello world</h1>
      <h1 v-else>Ложное условие</h1>
    </div>
    <br>
    <br>
    <div v-for="(element, index) in students" :key="element.k">
      <div style="background: darkslategray; padding: 10px; margin-bottom: 12px; cursor: pointer;" @click="zeroAge(index)">
        {{ 1 + index }}) {{ element.name }} : {{ element.age }}
      </div>
    </div>
    <br>
    <h1>{{ task }}</h1>
    <br>
    <button @click="sortByAge()">Sort by age</button>
    <br>
    <p>Поле ввода</p>
    <p> {{ myMessageData }} </p>
    <input spellcheck="false" autocomplete="off" v-model="myMessageData" placeholder="Input text here" />
    <br>
    <Rectangle></Rectangle>
  </div>
</template>


<style scoped>
  .a-class {
    background: gray;
    color: white;
    padding: 20px;
  }
  
  .b-class {
    cursor: pointer;
    font-size: 20px;
    padding: 16px;
    background: black;
    display: inline-block;
  }
  
  .red-class {
    color: red;
  }
  
  .blue-class {
    color: blue;
  }
</style>
