<script>
import Cursor from "./components/Layout/Cursor.vue";
import store from "../store";
import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        RouterView,
        Cursor,
    },
    setup() {
        setTimeout(() => {
            store.active = true;
        }, 1000);
        if (
            localStorage.darkmode === "dark" ||
            (!("darkmode" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
};
</script>

<template>
    <Cursor />

    <div id="app">
        <RouterView />
    </div>
</template>

