<template>
  <div class="posts">
    <div class="post" v-for="post in posts.slice(0, count)" :key="post._id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <img :src="post.image" alt="Post image" v-if="post.image">
      <p><em>By {{ post.author }} on {{ new Date(post.timestamp).toLocaleString() }}</em></p>
    </div>
    <button class="load" @click="$emit('showMore')" v-if="count < posts.length">See More</button>
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  props: ['posts', 'count']
}
</script>

<style lang="scss" scoped>
.posts {
  width: 100%;
  max-width: 1280px;
  margin: 50px auto;
}

.post {
  display: block;
  padding: 15px;
  background: white;
  box-shadow: 3px 3px 8px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.post img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}

.load {
  display: block;
  width: 100%;
  max-width: 250px;
  height: 50px;
  margin: 0 auto;
  outline: none;
  border: none;
  border-radius: 15px;
  appearance: none;
  background-color: #BDF8A0;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
  color: black;
  font-family: 'Rockwell', serif;
  font-size: 28px;
  padding: 7px;
  box-sizing: border-box;
}
</style>
