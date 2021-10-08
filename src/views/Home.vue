<template>
    <div class="home">
        <Post :post="welcomeScreen"/>
        <Post :post="post" v-for="(post, index) in entryPosts" :key="index"/>
    </div>
</template>

<script>
import Post from "../components/Post"
    export default {
        name: "Home",
        components: { Post },
        data() {
            return {
                welcomeScreen: {
                title: "Welcome!",
                post:
                    "Thank you for taking the time to view my website. Here on this site I will; share with you my story, give you insight as to my growth as a developer, showcase my work to you, and present you with the oportunity to give me feedback. Be it on my work, or why you chose not to consider me for the position which I am applying to, I encourge you to elaborate in detail the latter, as I crave consructive critisum which may help me grow.",
                welcomeScreen: true,
                photo: "coding"
                },
                entryPosts: [
                    {
                        title: "This is a Filler Title",
                        postHTML: "This is a filler post title",
                        postCoverPhoto:"beautiful-stories",
                    },
                    {
                        title: "This is a Filler Title2",
                        postHTML: "This is a filler post title",
                        postCoverPhoto:"designed-for-everyone",
                    },
                ],
            };
        }
    };
</script>