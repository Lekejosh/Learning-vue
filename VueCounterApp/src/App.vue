//Composition API

<!-- <script setup>
import { ref } from 'vue'

// const count = ref(0)

const count = ref(0)

const addToCount = () => {
  count.value = count.value + 1
}

const subtractFromCount = () => {
  count.value = count.value - 1
}
</script> -->

//Options API
<script>
export default ({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount() {
      this.count = this.count + 1
    },
    subtractFromCount() {
      this.count = this.count - 1
    }
  }
})
</script>


<template>
  <main>
    <div class="">
      <h4>
        The Current count is...
      </h4>
      <h1>{{ count }}</h1>
      <button @click="subtractFromCount">-</button>
      <button @click="addToCount">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  color: black;
  background-color: aliceblue;
  height: 100vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  align-items: center;
}
</style>