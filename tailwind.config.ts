import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['var(--font-sans)', 'sans-serif'],
            serif: ['var(--font-source-serif)', 'serif'],
        },

        extend: {
            colors: {
                red: {
                    '100': '#FBE9EE',
                    '200': '#F3B8C7',
                    '300': '#EA86A0',
                    '400': '#E2557A',
                    '500': '#D92353',
                    '600': '#BB1E47',
                    '700': '#9C193C',
                    '800': '#7E1430',
                    '900': '#600F25',
                    '1000': '#410B19',
                },
                blue: {
                    '100': '#D9F6F9',
                    '200': '#A4EAF1',
                    '300': '#6FDDE9',
                    '400': '#39D1E1',
                    '500': '#04C4D9',
                    '600': '#03A4B6',
                    '700': '#038593',
                    '800': '#026570',
                    '900': '#01454C',
                    '1000': '#012529',
                },
                green: {
                    '100': '#D2EFE1',
                    '200': '#9EDDC0',
                    '300': '#6ACB9E',
                    '400': '#37B87C',
                    '500': '#03A65A',
                    '600': '#038C4C',
                    '700': '#02723E',
                    '800': '#02572F',
                    '900': '#013D21',
                    '1000': '#012313',
                },
                yellow: {
                    '50': '#FFFFFE',
                    '100': '#FFFFFD',
                    '200': '#FCF3C5',
                    '300': '#F8E78D',
                    '400': '#F5DB55',
                    '500': '#F2CF1D',
                    '600': '#CBAE18',
                    '700': '#A48C14',
                    '800': '#7C6A0F',
                    '900': '#55490A',
                    '1000': '#2E2706',
                },
                orange: {
                    '100': '#FDE4DA',
                    '200': '#FAC2AE',
                    '300': '#F7A081',
                    '400': '#F57F54',
                    '500': '#F25D27',
                    '600': '#D15022',
                    '700': '#AF431C',
                    '800': '#8E3717',
                    '900': '#6C2A12',
                    '1000': '#4B1D0C',
                },
                gray: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#e5e5e5',
                    '300': '#d4d4d4',
                    '400': '#a3a3a3',
                    '500': '#737373',
                    '600': '#525252',
                    '700': '#404040',
                    '800': '#262626',
                    '900': '#171717',
                    '1000': '#0a0a0a',
                },
                black: '#000000',
                white: '#ffffff',
            },

            boxShadow: {
                '01': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                '02': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                '03': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                '04': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                '05': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            },
    
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
