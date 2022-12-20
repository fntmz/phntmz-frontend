<script setup>
import SocialsDisplay from "../components/CreditsView/SocialsDisplay.vue";
import stateRaw from "../state";

let credits = [
    {
        roles: "inspired by",
        people: [
            "<a href='https://weare.tm/' target='_blank'>aristide benoist's tm</a>",
        ],
    },
    {
        roles: "photography // cinematography",
        people: ["bao anh ngo", "minh anh do", "hieu minh nguyen"],
    },
    {
        roles: "lighting",
        people: ["bao anh ngo", "minh anh do", "hieu minh nguyen"],
    },
    {
        roles: "literary // language",
        people: ["bao anh ngo", " minh anh do", "hieu minh nguyen"],
    },
    {
        roles: "user interface // experience",
        people: ["hieu minh nguyen", "ayush pramanik"],
    },
    {
        roles: "motion // animation",
        people: ["hieu minh nguyen"],
    },
    {
        roles: "backend development",
        people: ["hieu minh nguyen"],
    },
    {
        roles: "faces",
        people: [
            "bao anh ngo",
            "huong giang vu",
            "jamiel masangkay",
            "cong minh ho",
            "hieu minh nguyen",
            "dan anh do",
            "minh anh do",
            "anh thu le",
            "michael son",
        ],
    },
];

let state = stateRaw.socials;

function openSocials(name) {
    state.socialsNameProp = name;
    state.socialsNameOpened = true;
}
</script>

<template>
    <div>
        <div class="fixed h-full container grid grid-cols-2">
            <h1
                class="col-span-1 transition-opacity duration-300 delay-[1300ms]"
                :class="{ opened: state.socialsNameOpened }"
                id="title-wrapper"
            >
                credits
            </h1>
            <div
                class="opacity-0 col-span-1 col-start-2 transition-opacity duration-300 pointer-events-none"
                :class="{ opened: state.socialsNameOpened }"
                id="socials-wrapper"
            >
                <SocialsDisplay />
            </div>
        </div>
        <div class="container grid grid-cols-2">
            <div class="col-span-1 col-start-2">
                <div
                    class="grid grid-cols-2 mb-8 gap-24"
                    v-for="categories in credits"
                >
                    <div
                        class="col-span-1 text-sm transition-opacity duration-300 delay-[1300ms]"
                        :class="{ opened: state.socialsNameOpened }"
                        id="categories-wrapper"
                    >
                        {{ categories.roles }}
                    </div>
                    <ul
                        class="z-[1] col-span-1 text-lg font-medium tracking-tight transition-transform duration-1000 delay-300"
                        :class="{ opened: state.socialsNameOpened }"
                        id="people-wrapper"
                    >
                        <li v-for="name in categories.people">
                            <div
                                v-if="name.includes('</a>')"
                                v-html="name"
                            ></div>
                            <button v-else v-on:click="openSocials(name)">
                                {{ name }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#title-wrapper.opened,
#categories-wrapper.opened {
    opacity: 0;
    transition: opacity 300ms !important;
    pointer-events: none;
}
#socials-wrapper.opened {
    opacity: 1 !important;
    transition: opacity 300ms 1300ms !important;
    pointer-events: initial !important;
}
#people-wrapper.opened {
    transform: translateX(calc(-300% - 12em));
}
</style>
