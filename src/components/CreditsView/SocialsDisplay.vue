<script setup>
import stateRaw from "../../state";

let socials = ["facebook", "instagram", "twitter", "discord"];

let state = stateRaw.socials;
function closeSocials() {
    state.socialsNameOpened = false;
}
</script>

<template>
    <div
        class="fixed w-1/2 h-screen top-1/2 right-0 grid grid-cols-2 gap-24 pointer-events-none"
    >
        <div class="col-span-1 text-sm pointer-events-auto">
            <button class="pr-8" v-on:click="closeSocials">&lt;= back</button>
            {{ state.socialsNameProp }}
        </div>
        <ul
            class="col-span-1 col-start-2 text-lg font-medium tracking-tight pointer-events-auto"
        >
            <li v-for="social in socials">
                <a>{{ social }}</a>
            </li>
        </ul>
    </div>
</template>
