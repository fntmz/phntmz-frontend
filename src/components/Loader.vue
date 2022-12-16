<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({ active: false });

onMounted(() => {
    setTimeout(() => {
        state.active = true;
    }, 1000);
});
</script>

<template>
    <div
        class="z-[9999] fixed w-screen h-screen grid place-items-center backdrop-blur-lg backdrop-brightness-110 overflow-hidden transition-opacity duration-500 delay-[2300ms]"
        :class="{ active: state.active }"
        id="loader-wrapper"
    >
        <div
            class="font-light tracking-[.2em] overflow-hidden"
            :class="{ active: state.active }"
            id="quote-wrapper"
        >
            <span>"</span><span>e</span><span>v</span><span>e</span
            ><span>r</span><span>y</span><span>t</span><span>h</span
            ><span>i</span><span>n</span><span>g</span><span>&nbsp;</span
            ><span>e</span><span>x</span><span>i</span><span>s</span
            ><span>t</span><span>s</span><span>&nbsp;</span><span>t</span
            ><span>o</span><span>&nbsp;</span><span>e</span><span>n</span
            ><span>d</span><span>&nbsp;</span><span>i</span><span>n</span
            ><span>&nbsp;</span><span>a</span><span>&nbsp;</span><span>p</span
            ><span>h</span><span>o</span><span>t</span><span>o</span
            ><span>g</span><span>r</span><span>a</span><span>p</span
            ><span>h</span><span>&nbsp;</span><span>🍃</span><span>"</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
#loader-wrapper.active {
    opacity: 0;
    pointer-events: none;
}

#quote-wrapper {
    & > * {
        display: inline-block;
        transition: transform 1000ms cubic-bezier(0.75, 0, 1, 0.5);
    }
    &.active > * {
        transform: translateY(100%);
    }

    @for $i from 1 through 44 {
        & *:nth-child(#{$i}) {
            transition-delay: ($i - 1) * 30ms;
        }
    }
}
</style>
