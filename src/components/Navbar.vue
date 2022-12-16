<script setup>
import ToggleDarkmode from "../assets/js/toggleDarkmode";
</script>

<template>
    <nav class="z-[1] fixed top-8 bottom-8 left-8 right-8">
        <div class="absolute right-0 h-20 w-20">
            <img src="../assets/img/favicon.jpg" alt="" />
        </div>
        <div
            class="absolute w-full h-20 border-solid border-1 border-custom-gray pr-24 flex justify-between items-center"
        >
            <a
                href="javascipt:void(0)"
                class="aspect-square h-full grid place-items-center text-lg"
                v-on:click="ToggleDarkmode"
            >
                <i class="fa-solid fa-moon"></i>
            </a>
            <div class="text-right">
                created by phntmz_ <br />
                <span class="text-custom-gray text-sm">and others</span>
            </div>
        </div>
        <div
            class="absolute right-0 h-full w-20 border-solid border-1 border-custom-gray flex flex-col items-center justify-end"
        >
            <a
                href="https://www.instagram.com/phntmz_/"
                class="aspect-square w-full grid place-items-center text-lg"
            >
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a
                href="https://www.facebook.com/phntmzz/"
                class="aspect-square w-full grid place-items-center text-lg"
            >
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a
                href="https://github.com/fntmz"
                class="aspect-square w-full grid place-items-center text-lg"
            >
                <i class="fa-brands fa-github"></i>
            </a>
            <a
                href="https://www.reddit.com/user/phntmz_"
                class="aspect-square w-full grid place-items-center text-lg"
            >
                <i class="fa-brands fa-reddit"></i>
            </a>
        </div>
    </nav>
</template>
