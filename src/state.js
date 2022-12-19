import { reactive } from "vue";
const state = reactive({
    active: false,
    socials: {
        socialsNameProp: "",
        socialsNameOpened: false,
    },
});

export default state;
