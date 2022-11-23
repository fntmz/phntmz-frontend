<script setup>
import settingsVue from "./components/settings.vue";
import menuVue from "./components/menu.vue";

// (\=============== DARKMODE ===============/)
if (localStorage.getItem("darkmode")) {
    document.body.setAttribute("data-theme", localStorage.getItem("darkmode"));
} else {
    document.body.setAttribute("data-theme", "dark_theme");
}
</script>

<template>
    <settingsVue />
    <menuVue />

    <NuxtPage />
</template>

