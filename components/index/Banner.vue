<script setup>
import { reactive } from "vue";

const state = reactive({ current_word: 0 });

let words = ["interstellar", "divinity", "surrealism"];

function nextWord() {
    if (state.current_word === words.length - 1) {
        state.current_word = 0;
    } else {
        state.current_word++;
    }
}
</script>

<template>
    <div
        class="relative w-screen h-screen bg-[var(--bg-color)] flex justify-center items-center flex-col overflow-hidden"
    >
        <h1
            class="text-[64px] font-semibold tracking-[.5em] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[var(--color)] via-[var(--accent)] cursor-pointer"
            @click="nextWord"
        >
            <span
                class="interstellar-letters"
                v-for="letter in words[state.current_word]"
            >
                {{ letter }}
            </span>
        </h1>
        <h3 class="font-normal tracking-wider">nguyen hieu minh // phntmz_</h3>

        <div
            class="absolute -left-1/4 top-[60%] w-full h-full bg-gradient-radial from-[var(--accent)] via-transparent opacity-30"
        ></div>
        <div
            class="absolute -right-[40%] bottom-[65%] w-full h-full bg-gradient-radial from-[var(--accent)] via-transparent opacity-30"
        ></div>
    </div>
</template>

<style scoped>
.interstellar-letters {
    display: inline;
}
</style>
