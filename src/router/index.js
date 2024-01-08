import { createRouter, createWebHistory } from "vue-router";
import { useJwt } from "@vueuse/integrations/useJwt";
import Layout from "../views/Layout.vue";
import Home from "../views/HomeView.vue";
import Information from "../views/InformationView.vue";
import Contact from "../views/ContactView.vue";
import Credits from "../views/CreditsView.vue";
import Create from "../views/CreateView.vue";
import NotFOund from "../views/NotFoundView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: Layout,
            children: [
                {
                    path: "/",
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
                {
                    path: "/create",
                    name: "create",
                    component: Create,
                    meta: { requiresAuth: true },
                },
                {
                    path: "/login",
                    name: "login",
                    component: Login,
                },
                {
                    path: "/register",
                    name: "register",
                    component: Register,
                },
                {
                    path: "/:pathMatch(.*)*",
                    name: "404",
                    component: NotFOund,
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

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem("user_token");
        const { header, payload } = useJwt(token);

        if (token !== null && payload.value.expire > Date.now() / 1000) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;

