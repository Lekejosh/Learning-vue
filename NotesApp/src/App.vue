<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const content = ref('')
const cardArray = ref([]);
const error = ref("")

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";

}

const addToArray = () => {

  if (content.value.length < 10) {
    return error.value = "Less than 10 characters"
  }

  const item = { id: Math.floor(Math.random() * 100000), content: content.value, date: new Date(), backgroundColor: getRandomColor() }

  cardArray.value.push(item)
  content.value = ''
  showModal.value = false
  error.value = ""
}

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="content" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addToArray">Add Note</button>
        <button @click="showModal = false" class="close">Close</button>
        <p v-if="error" style="color:red">{{ error }}</p>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="cards in cardArray" :key="cards.id" class="card" :style="{ backgroundColor: cards.backgroundColor }">
          <p class="main-text">{{ cards.content }}</p>
          <p class="date">{{ cards.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px
}

.modal .close {
  background-color: red;
  margin-top: 7px;
}
</style>