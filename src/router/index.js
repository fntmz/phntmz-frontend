import { createRouter, createWebHistory } from "vue-router";
import Information from "../views/Information.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
        },
        {
            path: "/information",
            name: "information",
            component: Information,
        },
    ],
});

export default router;

