import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "../views/HomeView.vue";
import Information from "../views/InformationView.vue";
import Contact from "../views/ContactView.vue";
import Credits from "../views/CreditsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: Layout,
            children: [
                {
                    path: "",
                    name: "home",
                    component: Home,
                },
                {
                    path: "/information",
                    name: "information",
                    component: Information,
                },
                {
                    path: "/contact",
                    name: "contact",
                    component: Contact,
                },
                {
                    path: "/credits",
                    name: "credits",
                    component: Credits,
                },
            ],
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: "instant" });
            }, 500);
        });
    },
});

export default router;

