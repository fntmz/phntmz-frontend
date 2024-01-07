<script>
import Cursor from "../components/Layout/Cursor.vue";
import Loader from "../components/Layout/Loader.vue";
import Navbar from "../components/Layout/Navbar.vue";
import "../assets/css/transition.css";
import store from "../../store";

export default {
    name: "Layout",
    components: {
        Cursor,
        Loader,
        Navbar,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <Cursor />
    <Loader />
    <Navbar />

    <main
        class="container pt-[50vh] opacity-0 transition-opacity duration-300 delay-[4500ms]"
        :class="{ active: store.active }"
    >
        <RouterView v-slot="{ Component }">
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
