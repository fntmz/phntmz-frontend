<script setup>
import stateRaw from "../../state";

let socials = ["facebook", "instagram", "twitter", "discord"];

let state = stateRaw.socials;
function closeSocials() {
    state.socialsNameOpened = false;
}
</script>

<template>
    <div class="grid grid-cols-2 gap-24">
        <div class="col-span-1 text-sm">
            <button class="pr-8" v-on:click="closeSocials">&lt;= back</button>
            {{ state.socialsNameProp }}
        </div>
        <ul class="col-span-1 col-start-2 text-lg font-medium tracking-tight">
            <li v-for="social in socials">
                <a>{{ social }}</a>
            </li>
        </ul>
    </div>
</template>
