<script setup>
import Settings from "./components/Settings.vue";

// (\=============== DARKMODE ===============/)
if (localStorage.getItem("darkmode")) {
    document.body.setAttribute("data-theme", localStorage.getItem("darkmode"));
} else {
    document.body.setAttribute("data-theme", "dark_theme");
}
</script>

<template>
    <Settings />
    <RouterView />
</template>

