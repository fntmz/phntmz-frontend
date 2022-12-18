<script>
import axios from "axios";
export default {
    data() {
        return {
            credits: [],
        };
    },
    created() {
        let apiURL = "web-production-c75c.up.railway.app/api/credit";
        axios
            .get(apiURL)
            .then((res) => {
                this.credits = res.data;
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<template>
    <div class="container grid grid-cols-2">
        <div class="fixed col-span-1">
            <h1>credits</h1>
        </div>
        <div class="col-start-2 col-span-1">
            <div
                class="grid grid-cols-2 gap-24 mb-8"
                v-for="item in credits.data.data.slice().reverse()"
            >
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
