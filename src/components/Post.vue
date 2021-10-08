<template>
    <div class="post-wrapper">
        <div class="post-content">
            <h2 v-if="post.welcomeScreen">
                {{post.title}}
            </h2>
            <h2 v-else>
                {{post.title}}
            </h2>
            <p v-if="post.welcomeScreen">
                {{post.post}}
            </p>
            <p class="content-preview" v-else>
                {{post.postHTML}}
            </p>
            <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                
            </router-link>
            <router-link class="link" v-else to="#"> 
                View Page<Arrow class="arrow"/>
            </router-link>
        </div>
        <div class="post-photo">
            <img  v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
            <img  v-else :src="require(`../assets/blogPhotos/${post.postCoverPhoto}.jpg`)" alt="">
        </div>
    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
    name: "post",
    props: ["post"],
    components: {
        Arrow,
    }
}
</script>

<style lang="scss" scoped>

    .post-wrapper {
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        @media (min-width: 700px) {
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }
        // .post-content:first-child {
        //     background-color: #303030;
        // }
        .post-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 4;
            order: 2;
            @media (min-width: 700px) {
                order: 1;
            }
            @media (min-width: 800px) {
                flex: 3;
            }
            div {
                max-width: 375px;
                padding: 72px 24px;
                @media (min-width: 700px) {
                    padding: 0px 24px;
                }
                h2 {
                    font-size: 32px;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    @media (min-width: 700px) {
                        font-size: 40px;
                    }
                }
                p {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 1.7;
                }
                .content-preview {
                    font-size: 13px;
                    max-height: 24px;
                    width: 250px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .link {
                    display: inline-flex;
                    align-items: center;
                    margin-top: 32px;
                    padding-bottom: 4px;
                    border-bottom: 1px solid #303030;
                    transition: 500ms ease-in all;
                    &:hover {
                        border: 1px solid #303030;
                    }
                }
                // .link-light {
                //     &:hover {
                //         border: 1px solid #ffffff;
                //     }
                // }
            }
        }
        .post-photo {
            order: 1;
            flex: 3;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            @media (min-width: 700px) {
                order: 2;
            }
            @media (min-width: 800px) {
                flex: 4;
            }
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &:nth-child(even) {
            .post-content {
                order: 2;
            }
            .post-photo {
                order: 1;
            }
        }
    }
    .post-wrapper:first-child {
        .post-content {
            background-color: #303030;
            color: #E36414;
        }
    }


</style>