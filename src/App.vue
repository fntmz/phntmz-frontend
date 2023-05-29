<script setup>
import { RouterLink, RouterView } from "vue-router";
import Cursor from "./components/Cursor.vue";

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

function ToggleDarkmode() {
    if (localStorage.darkmode == "light") {
        localStorage.setItem("darkmode", "dark");
        document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem("darkmode", "light");
        document.documentElement.classList.remove("dark");
    }
}
</script>

<template>
    <Cursor />

    <!-- background -->
    <div
        id="background"
        class="-z-[1] fixed h-screen w-screen flex items-center justify-center m-auto max-h-full max-w-full"
    >
        <img
            src="./assets/media/301E7C17-31C9-4900-A34A-119E1238CF07.jpeg"
            alt=""
            class="block max-w-full max-h-full m-auto"
        />
    </div>
    <main class="h-screen w-screen p-8">
        <div class="relative w-full h-full flex flex-col justify-between">
            <!-- title -->
            <div id="title" class="flex items-end">
                <h1>phntmz_</h1>
                <p class="ml-4 text-custom-gray font-medium">
                    // software developer, photographer
                </p>
            </div>

            <!-- menu -->
            <header class="absolute bottom-0 flex">
                <nav class="flex flex-col">
                    <RouterLink to="/">
                        <h3 class="my-2 font-medium">home</h3>
                    </RouterLink>
                    <RouterLink to="/information">
                        <h3 class="my-2 font-medium">information</h3>
                    </RouterLink>
                    <RouterLink to="/contact">
                        <h3 class="my-2 font-medium">contact</h3>
                    </RouterLink>
                    <RouterLink to="/gallery">
                        <h3 class="my-2 font-medium">gallery</h3>
                    </RouterLink>
                </nav>
            </header>

            <!-- darkmode -->
            <button
                class="absolute bottom-0 right-0"
                v-on:click="ToggleDarkmode"
            >
                <i class="fa-solid fa-moon"></i>
            </button>
        </div>
    </main>

    <!-- router -->
    <div class="container">
        <div id="router-bg" class="h-full w-full bg-accent"></div>
        <RouterView />
    </div>
</template>

<style scoped></style>

