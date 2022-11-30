/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: "var(--color)",
                "bg-color": "var(--bg-color)",
                accent: "var(--accent)",
                "alt-accent": "var(--alt-accent)",
            },
            borderWidth: {
                1: "1px",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
    important: true,
};

