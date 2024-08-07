<template>
  <v-app>
    <NavBar @newPost="newPost" />
    <v-content>
      <AdminDashboard :posts="posts" @updatePost="updatePost" @removePost="removePost" />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import AdminDashboard from '@/components/AdminDashboard';

export default {
  name: 'App',
  components: {
    NavBar,
    AdminDashboard,
  },
  data() {
    return {
      posts: [
        { _id: 1, title: "Post 1", content: "Content", author: "Zeynep Bölükbaşı" },
        { _id: 2, title: "Post 2", content: "Content", author: "Zeynep Bölükbaşı" },
        { _id: 3, title: "Post 3", content: "Content", author: "Zeynep Bölükbaşı" }
      ]
    }
  },
  methods: {
    getPosts: async function () {
      this.posts = await fetch("http://localhost:3000/api/posts/all")
        .then(data => {
          return data.json()
        })
        .then(json => {
          return json.result;
        });
      this.posts.sort(function (a, b) {
        if (a.timestamp < b.timestamp) {
          return 1;
        } if (a.timestamp > b.timestamp) {
          return -1;
        }
        return 0;
      });
    },
    newPost: function (post) {
      this.posts.push(post);
      this.posts.sort(function (a, b) {
        if (a.timestamp < b.timestamp) {
          return 1;
        } if (a.timestamp > b.timestamp) {
          return -1;
        }
        return 0;
      });
    },
    updatePost: function (post) {
      let payload = {
        _id: post._id,
        title: post.title,
        author: post.author,
        content: post.content,
        timestamp: post.timestamp
      }
      fetch("http://localhost:3000/api/post/update", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(data => {
          return data.json()
        })
        .then(json => {
          console.log(json);
        })
    },
    removePost: function (index) {
      fetch("http://localhost:3000/api/post/remove", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ _id: this.posts[index]._id })
      })
        .then(data => {
          return data.json()
        })
        .then(json => {
          console.log(json);
        });

      this.posts.splice(index, 1);
    }
  },
  beforeMount() {
    this.getPosts();
  }
}
</script>
