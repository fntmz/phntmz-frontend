<script setup>
import { reactive } from "vue";
import publicState from "../app";
import toggleDarkmode from "../assets/js/toggleDarkmode";
import Socials from "./Socials.vue";
const state = reactive({ isSettings: false });
</script>

<script></script>

<template>
    <div
        class="z-[1] opacity-0 fixed w-screen h-screen backdrop-blur-xl transition-opacity duration-300 pointer-events-none"
        :class="{ opened: state.isSettings }"
        id="settings-bg"
    >
        <Socials />
    </div>
    <div
        class="z-[2] fixed left-10 bottom-10 w-14 h-14 grid place-items-center border-solid border-1 border-color rounded-full transition-all duration-300 hover:scale-110 hover:border-accent"
        @click="state.isSettings = !state.isSettings"
    >
        <div
            class="opacity-0 absolute w-8 h-8 grid place-items-center border-solid border-1 border-color rounded-full text-lg transition-all duration-300 pointer-events-none hover:text-accent hover:border-accent"
            :class="{ opened: state.isSettings }"
            @click="publicState.isMenu = !publicState.isMenu"
            id="menu-button"
        >
            =
        </div>
        <div
            class="opacity-0 absolute w-8 h-8 grid place-items-center border-solid border-1 border-color rounded-full transition-all duration-300 pointer-events-none hover:border-accent"
            :class="{ opened: state.isSettings }"
            @click="toggleDarkmode"
            id="darkmode-button"
        >
            &#x1F319;
        </div>
    </div>
</template>

<style>
#menu-button.opened {
    transform: translate(25px, -65px);
}
#darkmode-button.opened {
    transform: translate(65px, -25px);
}
#settings-bg.opened,
#darkmode-button.opened,
#menu-button.opened {
    opacity: 1 !important;
    pointer-events: initial !important;
}
</style>
