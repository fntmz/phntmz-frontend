<script>
export default {
    name: "HomeView",
    data() {
        return {
            images: [
                "src/assets/img/gallery/IMG_0625.JPG",
                "src/assets/img/gallery/IMG_0632.JPG",
                "src/assets/img/gallery/IMG_0637.JPG",
                "src/assets/img/gallery/IMG_0652.JPG",
                "src/assets/img/gallery/IMG_0674.JPG",
                "src/assets/img/gallery/IMG_0710.JPG",
                "src/assets/img/gallery/IMG_0717.JPG",
                "src/assets/img/gallery/IMG_0734.JPG",
            ],
        };
    },
};
</script>

<template>
    <div>
        <h1 class="pb-24">home</h1>
        <div class="container">
            <div
                class="relative images h-[50vh] max-w-1/4 pb-24"
                v-for="item in images"
            >
                <img :src="item" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 8 {
    .images:nth-child(#{$i}) {
        left: random(75) * 1%;
    }
}
</style>
