<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{name:'Home'}">
                    LugoWebDevelopment
                </router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">
                        .Home()
                    </router-link>
                    <router-link class="link" to="#">
                        .About_Me()
                    </router-link>
                    <router-link class="link" to="#">
                        .Work()
                    </router-link>
                    <router-link class="link" to="#">
                        .Contact_Me()
                    </router-link>
                    <router-link class="link" to="#">
                        <div>
                            {{libText}}
                        </div>
                    </router-link>
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menuIcon" v-show="mobile"/>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" to="#">
                    .Home()
                </router-link>
                <router-link class="link" to="#">
                    .About_Me()
                </router-link>
                <router-link class="link" to="#">
                    .Work()
                </router-link>
                <router-link class="link" to="#">
                    .Contact_Me()
                </router-link>
                <router-link class="link" to="#">
                    <div>
                        {{libText}}
                    </div>
                </router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from "../assets/Icons/custom/cactus.svg"
export default {
    name: "navigation",
    components: {
        menuIcon,
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <=1033) {
                this.mobile = true;
                return;
            }
            this.mobileNav = false;
            this.mobile = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },
    computed: { 
        libText:function() {
            var feedbackString = '.Feedback\t{\n\tCreate_a_Post()\n}';
            return feedbackString;
        }
    }
};

</script>

<style lang="scss" scoped>
    header {
        background-color: #0F4C5C;
        padding: 0 25px;
        height: 90px;
        box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        z-index: 99;
        .link {
            font-weight: 500;
            padding: 0;
            transition: 300ms color ease;
            display: inline-flex;
            &:hover {
                color: #FB8B24;
            }

        }
        nav {
            display: flex;
            justify-content: space-between;
            padding: 15px 0px;
            .branding {
                display: flex;
                align-items: center;
                .header {
                    // top: 20px;
                    font-weight: 600;
                    font-size: 24px;
                    color: #E36414;
                    text-decoration: none;
                }
            }
            .nav-links {
                position: relative;
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: flex-end;
                white-space: pre-wrap;
                ul {
                    margin-right: 32px;
                    .link {
                        margin-right: 32px
                    }
                    .link:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        .menuIcon {
            cursor: pointer;
            position: absolute;
            top: 8px;
            right: 25px;
            height: 72px;
            filter: invert(27%) sepia(82%) saturate(604%) hue-rotate(65deg) brightness(94%) contrast(92%);
            width: auto;
            @media (max-width: 400px) {
                margin-right: -10px;
                height: 50px;
            }
        }
        .mobile-nav {
            padding: 20px;
            width: 70%;
            max-width: 250px;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100%;
            background-color: #4E0D35;
            top: 0;
            left: 0;
            white-space: pre-wrap;
            // ul {
            //     display: flex;
            //     flex-direction: column;
            // }
            .link {
                padding: 15px 0;
                color: #ffffff;
                transition: 300ms color ease;
                &:hover {
                    color: #FB8B24;
                }
            }
        }
        .mobile-nav-enter-active, .mobile-nav-leave-active {
            transition: all 1000ms ease;
        }
        .mobile-nav-enter { 
            transform: translateX(-250px);
        }
        .mobile-nav-enter-to {
            transform: translateX(0);
        }
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }
    }



</style>