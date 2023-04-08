<template>
  <h1>{{ title }}</h1>
  <p>Welcome....</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up now</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalSecond">
    <Modal theme="sale" @close="toggleSecondModal">
      <h1>Ninja Giveaway</h1>
      <p>Second Modal</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open Modal (alt)</button>
  <button @click="toggleSecondModal">Open Second Modal</button>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App, :)",
      header: "Sign up for the Giveaway",
      text: "Grab you ninja price",
      showModal: false,
      showModalSecond: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleSecondModal() {
      this.showModalSecond = !this.showModalSecond;
    },
  },
};
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
