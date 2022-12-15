<script setup>
const onMouseMove = (e) => {
    var rect = document.querySelector("#cursor-area").getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    document.querySelector("#cursor").style.color = "red";
    document.querySelector("#cursor").style.top = y + "px";
};

document.addEventListener("mousemove", onMouseMove);

// $(".btn, #menu-button, a, #gallery-cover > div > div, .navbar-item").hover(
//     function () {
//         $("#gallery-cursor").addClass("cursor-hover");
//     },
//     function () {
//         $("#gallery-cursor").removeClass("cursor-hover");
//     },
// );
</script>

<template>
    <div class="x-[2] fixed w-screen h-screen" id="cursor-area">
        <div
            class="aboslute w-8 aspect-square bg-accent rounded-full"
            id="cursor"
        ></div>
    </div>
</template>
