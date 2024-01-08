<script>
import axios from "axios";

export default {
    name: "CreateView",
    data() {
        return {
            file: "",
            fileUrl: "",
            description: "",
        };
    },

    methods: {
        async uploadImage(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("image", file);

            try {
                const response = await axios.post(
                    "http://localhost:8306/api/postsMedia",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                );
                console.log(response.data);
                if (200 <= response.status && response.status < 400) {
                    this.fileUrl = response.data.fileUrl;
                }
            } catch (error) {
                console.error(error);
            }
        },

        async onSubmit() {
            let data = {
                description: this.description,
                author_id: "1",
                media_url: this.fileUrl,
            };
            try {
                const response = await axios.post(
                    "http://localhost:8306/api/posts",
                    data,
                );
                this.$router.push({ name: "home" });
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<template>
    <div>
        <div class="grid grid-cols-2">
            <h1 class="fixed col-span-1">create</h1>
            <div class="col-span-1 col-start-2">
                <form
                    class="flex flex-col flex-grow"
                    enctype="multipart/form-data"
                    @submit="onSubmit"
                >
                    <label
                        class="py-4 text-center border-solid border-1 border-custom-gray rounded-lg transition-all duration-300 hover:text-accent"
                    >
                        upload file
                        <input type="file" @change="uploadImage" />
                    </label>
                    <img
                        class="w-full h-0 aspect-square object-cover"
                        :src="fileUrl"
                        :class="{ opened: fileUrl }"
                    />
                    <textarea
                        class="h-96 mt-8 p-6 resize-none text-color bg-transparent border-solid border-1 border-custom-gray rounded-lg"
                        placeholder="Describe your perspectives..."
                        v-model="description"
                    ></textarea>
                    <button
                        class="py-4 mt-8 text-center border-solid border-1 border-custom-gray rounded-lg"
                        type="submit"
                    >
                        share
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
input[type="file"] {
    display: none;
}
img.opened {
    height: unset !important;
    margin-top: 2rem;
}
</style>
