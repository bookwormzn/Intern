<template>
    <v-container fluid class="pa-3">
        <v-layout wrap>
            <v-flex xs12 md8 offset-md2>
                <h1 class="heading">Posts</h1>
            </v-flex>
            <v-flex xs12 md8 offset-md2>
                <v-list two-line>
                    <v-list-tile v-for="(post,index) in posts.slice((page-1)*DisplayAmount, DisplayAmount*page)" :key="post._id"
                        class="grey">
                        <p class="yellow--text font-weight-bold mb-0">{{ post.title }}</p>
                        <v-spacer></v-spacer>
                        <v-btn @click="updatePostDialog(post)" color="success">Update</v-btn>
                        <v-btn @click="$emit('removePost', index)" class="error">Remove</v-btn>

                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs12 md8 offset md-2>
                <v-pagination v-model="page" :length="Math.cell(posts.length/ DisplayAmount)" />
            </v-flex>
        </v-layout>
        <v-dialog v-model="updateDialog" persistent max-width="750">
            <v-card>
                ><v-car-title class="grey darken-4 white-text headline">
                    New Post
                </v-car-title>
                <v-card-text>
                    <v-container fluid grid-list-xl>
                        <v-layout wrap>
                            <v-flex xs12 md6>
                                <v-text-field label="Title" v-if="currentPost" v-model="currentPost.title" />
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field label="Author" v-if="currentPost" v-model="currentPost.Author" />
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea label="Content" v-if="currentPost" v-model="currentPost.Content" />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions class="grey darken-4">
                    <v-btn @click="updateDialog =!updateDialog" flat color="grey"> Close</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="addPost" flat color="yellow"> Add Post</v-btn>

                </v-card-actions>

            </v-card>

        </v-dialog>
    </v-container>
</template>

<script> 
export default{
name:"AdminDashboard",
props:['posts'],
data(){
    return{
        updateDialog:false,
        currentPost:undefined,        
        page:1,
        DisplayAmount:5
    }
},
methods:{
    updatePostDialog(post){
        this.currentPost=post,
        this.updateDialog=true;
    },
    updatePost(){
    this.$emit('updatePost', this.currentPost);
    this.updatePostDialog=false;
}
}
}
</script>

