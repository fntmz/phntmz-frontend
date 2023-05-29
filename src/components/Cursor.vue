<script setup>
const onMouseMove = (e) => {
    var rect = document.querySelector("#cursor-area").getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    document.querySelector("#cursor").style.left = x + "px";
    document.querySelector("#cursor").style.top = y + "px";
};

document.addEventListener("mousemove", onMouseMove);
</script>

<template>
    <div
        class="z-[1] fixed w-screen h-screen pointer-events-none"
        id="cursor-area"
    >
        <div
            class="hidden absolute w-8 h-8 border-solid border-custom-gray border-1 rounded-full -translate-x-1/2 -translate-y-1/2 overflow-visible"
            id="cursor"
        ></div>
        <div class="w-full h-full opacity-30 bg-repeat" id="bg"></div>
    </div>
</template>

<style scoped>
#bg {
    background-image: url(../assets/media/noise.jpg);
}

@media only screen and (pointer: fine) and (any-pointer: fine) {
    #cursor {
        display: initial !important;
    }
}
</style>
