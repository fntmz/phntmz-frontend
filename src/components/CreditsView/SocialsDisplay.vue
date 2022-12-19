<script setup>
import stateRaw from "../../state";

let socials = ["facebook", "instagram", "twitter", "discord"];

let state = stateRaw.socials;
function closeSocials() {
    state.socialsNameOpened = false;
}
</script>

<template>
    <div class="sticky top-0 h-screen grid grid-cols-2 mb-8">
        <div class="col-span-1 text-sm">
            <button class="pr-8" v-on:click="closeSocials">&lt;= back</button>
            {{ state.socialsNameProp }}
        </div>
        <ul class="pl-24 col-span-1 text-lg font-medium tracking-tight">
            <li v-for="social in socials">
                <a>{{ social }}</a>
            </li>
        </ul>
    </div>
</template>
