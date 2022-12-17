/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "0px",
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                color: "rgb(var(--color))",
                "bg-color": "rgb(var(--bg-color))",
                "custom-gray": "rgb(var(--gray))",
                accent: "rgb(var(--accent))",
                "alt-accent": "rgb(var(--alt-accent))",
            },
            transitionProperty: {
                width: "width",
                height: "height",
                filter: "filter",
            },
            borderWidth: {
                1: "1px",
            },
            container: {
                center: true,
                "max-width": {
                    xs: "100%",
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
        },
    },
    darkMode: "class",
    corePlugins: {
        preflight: false,
    },
    plugins: [],
    important: true,
};

