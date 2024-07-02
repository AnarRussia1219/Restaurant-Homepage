/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "accent-primary": "#ffffff",
                "accent-primary-contrasting": "#000000",
                "accent-secondary": "#ffd324",
                "accent-secondary-contrasting": "#000000",
            },
        },
        borderRadius: {
            "button": "8px",
        },
        transitionDuration: {
            "default-1": "0.2s",
    }
    },
    plugins: [],
};
