<template>
  <div id="app">
    <Header />
    <LatestPosts />
    <PostsList :posts="posts" :count="postCount" @showMore="showMore" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import LatestPosts from './components/LatestPosts.vue';
import PostsList from './components/PostsList.vue';

export default {
  name: 'App',
  data() {
    return {
      API_URL: "http://localhost:3000/api/",
      posts: [],
      postCount: 6
    }
  },
  components: { Header, LatestPosts, PostsList },
  methods: {
    getPosts() {
      fetch(this.API_URL + "posts/all")
        .then(response => response.json())
        .then(json => {
          this.posts = json.posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        })
        .catch(error => console.error('Error fetching posts:', error));
    },
    showMore() {
      this.postCount += 2;
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<style lang="scss">
body {
  background-color: #F3F3F3;
  font-family: "Rockwell", serif;
}

h3 {
  color: #111111;
  font-size: 28px;
  font-weight: 700;
}
</style>
