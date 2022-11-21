<script setup>
import BannerVue from "./components/Banner.vue";

// (\=============== DARKMODE ===============/)
if (localStorage.getItem("darkmode")) {
    document.body.setAttribute("data-theme", localStorage.getItem("darkmode"));
} else {
    document.body.setAttribute("data-theme", "dark_theme");
}
</script>

<template>
    <BannerVue />
</template>

