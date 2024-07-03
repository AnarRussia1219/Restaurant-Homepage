/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "accent-primary": "#ffd324",
                "accent-primary-contrasting": "#000000",
            },
        },
        borderRadius: {
            "button": "8px",
        },
        transitionDuration: {
            "default-1": "0.2s",
            "default-1-longer": "0.5s",
        },
    },
    plugins: [],
};
