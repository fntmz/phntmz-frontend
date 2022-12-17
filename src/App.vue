<script setup>
import state from "./state";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import Cursor from "./components/Cursor.vue";
import Loader from "./components/Loader.vue";
import Navbar from "./components/Navbar.vue";

onMounted(() => {
    setTimeout(() => {
        state.active = true;
    }, 1000);
});

// (\=============== DARKMODE ===============/)
if (
    localStorage.darkmode === "dark" ||
    (!("darkmode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
</script>

<template>
    <Cursor />
    <Loader />
    <Navbar />

    <main
        class="container pt-[50vh] opacity-0 transition-opacity duration-300 delay-[4500ms]"
        :class="{ active: state.active }"
    >
        <RouterView v-slot="{ Component }" class="absolute">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </main>
</template>

<style scoped>
main.active {
    opacity: 1 !important;
}
</style>

