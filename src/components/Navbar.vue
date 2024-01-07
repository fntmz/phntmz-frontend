<script setup>
import { RouterLink } from "vue-router";
import state from "../state";
import ToggleDarkmode from "../assets/js/toggleDarkmode";
</script>

<template>
    <div
        class="z-[1] fixed top-8 bottom-8 left-8 right-8 flex flex-row-reverse pointer-events-none dark:mix-blend-difference"
        id="nav-wrapper"
    >
        <div class="z-[1] absolute right-0 h-20 w-20">
            <img src="../assets/img/favicon.jpg" alt="" />
        </div>
        <div
            class="absolute w-20 h-20 border-solid border-1 border-custom-gray pr-20 flex justify-between items-center overflow-clip transition-width duration-[2000ms] delay-[2200ms] pointer-events-none"
            :class="{ active: state.active }"
            id="top-nav"
        >
            <button
                class="aspect-square h-full grid place-items-center text-lg pointer-events-auto"
                v-on:click="ToggleDarkmode"
            >
                <i class="fa-solid fa-moon"></i>
            </button>
            <nav class="flex items-center pointer-events-auto">
                <RouterLink to="/">
                    00. <br />
                    <span class="font-bold">home</span>
                </RouterLink>
                <RouterLink to="/information">
                    01. <br />
                    <span class="font-bold">information</span>
                </RouterLink>
                <RouterLink to="/contact">
                    02. <br />
                    <span class="font-bold">contact</span>
                </RouterLink>
                <RouterLink to="/credits">
                    03. <br />
                    <span class="font-bold">credits</span>
                </RouterLink>
            </nav>
            <div class="mr-4 text-right font-medium pointer-events-auto">
                created by phntmz_ <br />
                <RouterLink to="/credits" class="text-sm font-normal">
                    and others
                </RouterLink>
            </div>
        </div>
        <div
            class="absolute h-20 w-20 border-solid border-1 border-custom-gray flex flex-col items-center justify-end overflow-clip transition-height duration-[2000ms] delay-[2200ms] pointer-events-none"
            :class="{ active: state.active }"
            id="right-nav"
        >
            <a
                href="https://www.instagram.com/phntmz_/"
                class="aspect-square w-full grid place-items-center text-lg pointer-events-auto"
            >
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a
                href="https://www.facebook.com/phntmzz/"
                class="aspect-square w-full grid place-items-center text-lg pointer-events-auto"
            >
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a
                href="https://github.com/fntmz"
                class="aspect-square w-full grid place-items-center text-lg pointer-events-auto"
            >
                <i class="fa-brands fa-github"></i>
            </a>
            <a
                href="https://www.reddit.com/user/phntmz_"
                class="aspect-square w-full grid place-items-center text-lg pointer-events-auto"
            >
                <i class="fa-brands fa-reddit"></i>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
#nav-wrapper > * {
    pointer-events: all;
}
#top-nav,
#right-nav {
    & > * {
        opacity: 0;
        transition: opacity 300ms 4300ms, color 300ms;
    }
    &.active > * {
        opacity: 1;
    }
}

#top-nav {
    &.active {
        width: 100% !important;
    }
}
#right-nav {
    &.active {
        height: 100% !important;
    }
}
nav > * {
    padding: 0 2em;
    line-height: 0.98;
}
</style>
