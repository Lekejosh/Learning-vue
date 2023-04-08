<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostList v-if="posts.length" :posts="posts" />
    <p v-else>LOADING...</p>
  </div>
</template>

<script>
import PostList from "../components/PostLists";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load()
    return { posts, error};
  },
};
</script>
