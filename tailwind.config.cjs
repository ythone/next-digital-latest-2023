/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                billion: ['billion', 'sans-serif'],
                mont: ['mont', 'sans-serif'],
                opensans: ['opensans', 'sans-serif'],
                franklin: ['franklin', 'sans-serif'],
            },
        },
    },
    plugins: [],
}