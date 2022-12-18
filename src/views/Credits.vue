<script>
export default {
    data() {
        return {
            credits: [
                {
                    roles: "inspired by",
                    people: [
                        "<a href='https://weare.tm/' target='_blank'>aristide benoist's tm</a>",
                    ],
                },
                {
                    roles: "photography",
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
                    roles: "motion",
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
                    ],
                },
            ],
        };
    },
};
</script>

<template>
    <div class="container grid grid-cols-2">
        <div class="fixed col-span-1">
            <h1>credits</h1>
        </div>
        <div class="col-start-2 col-span-1">
            <div class="grid grid-cols-2 gap-24 mb-8" v-for="item in credits">
                <div class="col-span-1 text-sm">
                    {{ item.roles }}
                </div>
                <ul class="col-span-1 text-lg font-medium tracking-tight">
                    <li v-html="people" v-for="people in item.people"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
