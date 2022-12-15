<script setup>
import Cursor from "./components/Cursor.vue";
import Navbar from "./components/Navbar.vue";
// (\=============== DARKMODE ===============/)
if (localStorage.getItem("darkmode")) {
    document.body.setAttribute("data-theme", localStorage.getItem("darkmode"));
} else {
    document.body.setAttribute("data-theme", "dark_theme");
}
</script>

<template>
    <Navbar />
    <Cursor />
</template>

