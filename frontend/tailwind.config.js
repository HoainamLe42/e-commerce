/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: '#d70019',
                secondary: '#444444',
                brandYellow: '#fdc62e',
                brandGreen: '#2dcc6f',
                brandBlue: '#1376f4',
                brandWhite: '#eeeeee',
                bgMain: '#f3f4f6',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '3rem',
                },
            },
            // maxWidth: {
            //     'custom-container': '1200px',
            // },
        },
    },
    plugins: [],
};
