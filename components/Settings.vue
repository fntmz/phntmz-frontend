<script setup>
import { reactive } from "vue";
import isMenu from "~/assets/js/toggleMenu";
import toggleDarkmode from "~~/assets/js/toggleDarkmode";

const state = reactive({ isSettings: false });
</script>

<script></script>

<template>
    <div
        class="z-[1] opacity-0 fixed w-screen h-screen backdrop-blur-lg transition-opacity duration-300 pointer-events-none"
        :class="{ opened: state.isSettings }"
        id="settings-bg"
    ></div>
    <div
        class="z-[2] fixed left-10 bottom-10 w-14 h-14 grid place-items-center border-solid border-[1px] border-[var(--color)] rounded-full transition-all duration-300 hover:scale-110 hover:border-[var(--accent)]"
        @click="state.isSettings = !state.isSettings"
    >
        <div
            class="opacity-0 absolute w-8 h-8 grid place-items-center border-solid border-[1px] border-[var(--color)] rounded-full text-xl transition-all duration-300 pointer-events-none hover:text-[var(--accent)] hover:border-[var(--accent)]"
            :class="{ opened: state.isSettings }"
            @click="isMenu = !isMenu"
            id="menu-button"
        >
            =
        </div>
        <div
            class="opacity-0 absolute w-8 h-8 grid place-items-center border-solid border-[1px] border-[var(--color)] rounded-full transition-all duration-300 pointer-events-none hover:border-[var(--accent)]"
            :class="{ opened: state.isSettings }"
            @click="toggleDarkmode"
            id="darkmode-button"
        >
            &#x1F319;
        </div>
    </div>
</template>

<style scoped>
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
