<template>
    <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/4 h-[8%] scale-[0.4] origin-bottom flex justify-around items-center overflow-clip border-solid border-2 border-color backdrop-blur-xl rounded-full hover:scale-100 transition-transform duration-500"
    >
        <a><i class="fa-brands fa-facebook"></i></a>
        <a><i class="fa-brands fa-instagram"></i></a>
        <a><i class="fa-brands fa-spotify"></i></a>
        <a><i class="fa-solid fa-envelope"></i></a>
    </div>
</template>

<style scoped lang="scss">
div {
    > a {
        font-size: 1.5em;
        opacity: 0;
        transition: 300ms !important;
        pointer-events: none;
    }

    &:hover {
        > a {
            opacity: 1;
            pointer-events: initial;
        }
    }
}
</style>
