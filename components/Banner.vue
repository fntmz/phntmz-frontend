<script setup>
let words = ["interstellar", "divinity", "surreal"];
let current_word = 0;

function nextWord() {
    if (current_word === words.length) {
        current_word = 0;
    } else {
        current_word++;
    }
}
</script>

<template>
    <div
        class="w-screen h-screen bg-[var(--bg-color)] flex justify-center items-center flex-col"
    >
        <div class="border-solid border-black border-[1px] overflow-hidden">
            <h1
                class="text-[64px] font-semibold tracking-[.5em] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-white via-[var(--accent)]"
                @click="nextWord"
            >
                <div
                    class="interstellar-letters"
                    v-for="letter in words[current_word]"
                >
                    {{ letter }}
                </div>
            </h1>
        </div>
        <h3 class="font-normal tracking-wider">nguyen hieu minh // phntmz_</h3>
    </div>
</template>

<style scoped>
.interstellar-letters {
    display: inline;
}
</style>
