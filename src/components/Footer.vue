<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{ name: 'home'}">LugoWebDevelopment</router-link>
                    <ul>
                        <li>
                            <a href="#"><discord class="svg-icon"/></a>
                        </li>
                        <li>
                            <a href="#"><github class="svg-icon"/></a>
                        </li>
                        <li>
                            <a href="#"><linkedin class="svg-icon"/></a>
                        </li>
                        <li>
                            <a href="#"><gmail class="svg-icon"/></a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{ name:'home'}">.Home()</router-link>
                        <router-link class="link" :to="{ name:'feedback'}">.Feedback{}</router-link>
                        <router-link class="link" :to="{ name:'home'}">.Create_A_Post()</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import discord from "../assets/Icons/custom/discord.svg"
import github from "../assets/Icons/custom/github-alt.svg"
import linkedin from "../assets/Icons/custom/linkedin-in.svg"
import gmail from "../assets/Icons/custom/google.svg"
export default {
    name: "footer-vue",
    components: {
        discord,
        github,
        linkedin,
        gmail,
    },
};
</script>

<style lang="scss" scoped>
    footer {
        position: sticky;
        bottom: 0px;
        margin-top: auto;
        padding: 25px 25px;
        background-color: #303030;
        @media (max-width: 1033px) {
            padding-bottom: 64px;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 32px;
            @media (max-width: 1033px) {
                flex-direction: row;
                gap: 0px;
                line-height: .25em;
            }
            > div {
                display: flex;
                flex: 1;
            }
            .left {
                gap: 8px;
                color: #0F4C5C;
                margin-bottom: -32px;
                ul {
                    gap: 16px;
                    list-style: none;
                    display: flex;
                    // flex-direction: column;
                    li {
                        filter: invert(56%) sepia(94%) saturate(458%) hue-rotate(339deg) brightness(97%) contrast(104%);
                    }
                }
                display: flex;
                flex-direction: column;
                align-items: center;
                @media (min-width: 1033px) {
                    flex-direction: row;
                    align-items: initial;
                    gap: 0px;
                }
                .header {
                    font-size: 24px;
                    color: #0F4C5C;
                    text-decoration: none;
                    font-weight: 600;
                }
                .col-1, .col-2 {
                    gap: 16px;
                    display: flex;
                    flex: 1;
                    @media (min-width: 1033px) {
                        gap: 0px;
                    }
                }
                .col-1 {
                    flex-direction: column;
                    header {
                        text-align: center;
                        @media (max-width: 1033px) {
                            text-align: initial;
                        }
                    }
                    ul {
                        margin-top: auto;
                        li {
                            display: flex;
                            align-items: center;
                            .svg-icon {
                                width: 42px;
                                height: auto;
                            }
                        }
                    }
                }
                .col-2 {
                    ul {
                        height: 100%;
                        // justify-content: flex-end;
                        align-items: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        position: relative;
                        left: 124px;
                        // right: 0;
                        // margin-left: 248px;
                        // margin-right: 62px;
                        @media(max-width: 1033px) {
                            // flex-direction: column;
                            left: 0px;
                        }
                        @media (min-width: 1920px) {
                            left: 560px;
                        }
                        .link {
                            font-size: 16px;
                            font-weight: 500;
                            color: #175249;

                        }
                    }
                }
            }
            .right {
                gap: 32px;
                color: #0F4C5C;
                align-items: center;
                flex-direction: column;
                @media (max-width: 1033px) {
                    align-items: flex-end;
                    line-height: 1em;
                    gap: 0px;
                    flex-direction: row;
                    position: relative;
                    bottom: -40px;
                    
                }
            }
            p {
                margin-top: auto;
            }
        }
    }
</style>