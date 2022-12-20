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
        <div
            class="grid grid-cols-2 overflow-hidden transition-transform duration-1000 delay-300"
            :class="{ opened: state.socialsNameOpened }"
            id="credits-wrapper"
        >
            <div
                class="fixed col-span-1 transition-opacity duration-300 delay-[1300ms]"
                :class="{ opened: state.socialsNameOpened }"
                id="credits-title"
            >
                <h1>credits</h1>
            </div>
            <div class="col-start-2 col-span-1">
                <div
                    class="grid grid-cols-2 mb-8"
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
                        class="pl-24 col-span-1 text-lg font-medium tracking-tight transition-transform duration-1000 delay-300"
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
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ opened: state.socialsNameOpened }"
            id="socials-display"
        >
            <SocialsDisplay />
        </div>
    </div>
</template>

<style scoped>
#credits-wrapper.opened {
    transform: translateX(-50%);
}
#credits-title.opened {
    opacity: 0;
    transition-delay: 0ms !important;
}
#categories-wrapper.opened {
    opacity: 0;
    transition-delay: 0ms !important;
}
#people-wrapper.opened {
    transform: translateX(-100%);
}
#socials-display.opened {
    opacity: 1 !important;
    transition-delay: 1300ms !important;
    pointer-events: initial !important;
}
</style>
