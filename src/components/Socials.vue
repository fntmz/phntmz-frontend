<template>
    <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-[8%] scale-[0.4] origin-bottom flex justify-around items-center overflow-clip border-solid border-1 border-color backdrop-blur-xl rounded-full hover:scale-100 transition-transform duration-500"
    >
        <a>Facebook</a>
        <a>Instagram</a>
        <a>Spotify</a>
        <a>Mail</a>
    </div>
</template>

<style scoped lang="scss">
div {
    > a {
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
