<script setup>
import state from "./state";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import Cursor from "./components/Cursor.vue";
import Loader from "./components/Loader.vue";
import Navbar from "./components/Navbar.vue";

onMounted(() => {
    setTimeout(() => {
        document.body.style.pointerEvents = "initial";
        state.active = true;
    }, 1000);
});

// (\=============== DARKMODE ===============/)
if (localStorage.getItem("darkmode")) {
    document.body.setAttribute("data-theme", localStorage.getItem("darkmode"));
} else {
    document.body.setAttribute("data-theme", "dark_theme");
}
</script>

<template>
    <Cursor />
    <Loader />
    <Navbar />

    <main class="container pt-[50vh]">
        <RouterView />
    </main>
</template>

