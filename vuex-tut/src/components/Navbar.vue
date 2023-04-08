<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authIsReady">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <div>
          <span>Logged in as {{ user.email }}</span>
          <button @click="handleClick">Logout</button>
        </div>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <div>
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
/* eslint-disable */

export default {
  name: "NavBar",
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>
