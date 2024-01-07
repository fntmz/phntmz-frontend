<script>
import store from "../../../store";

export default {
    name: "SocialsDisplay",
    props: ["socialsNameProp"],

    data() {
        return {
            store,
            socials: ["facebook", "instagram", "twitter", "discord"],
        };
    },
    methods: {
        closeSocials() {
            store.socialsNameOpened = false;
        },
    },
};
</script>

<template>
    <div class="grid grid-cols-2 gap-24">
        <div class="col-span-1 text-sm">
            <button class="pr-8" v-on:click="closeSocials">&lt;= back</button>
            {{ store.socialsNameProp }}
        </div>
        <ul class="col-span-1 col-start-2 text-lg font-medium tracking-tight">
            <li v-for="social in socials">
                <a>{{ social }}</a>
            </li>
        </ul>
    </div>
</template>
