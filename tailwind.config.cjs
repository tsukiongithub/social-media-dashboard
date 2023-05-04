const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				mobile: "375px",
				desktop: "1440px",
			},
			colors: {
				"lime-green": "hsl(163, 72%, 41%)",
				"bright-red": "hsl(356, 69%, 56%)",
				facebook: "hsl(208, 92%, 53%)",
				twitter: "hsl(203, 89%, 53%)",
				"instagram-lg": {
					from: "hsl(37, 97%, 70%)",
					to: "hsl(329, 70%, 58%)",
				},
				youtube: "hsl(348, 97%, 39%)",
				theme: {
					dark: {
						"toggle-lg-from": "hsl(210, 78%, 56%)",
						"toggle-lg-to": "hsl(146, 68%, 55%)",
						text: "hsl(0, 0%, 100%)",
						"text-alt": "hsl(228, 34%, 66%)",
						700: "hsl(228, 28%, 20%)",
						800: "hsl(232, 19%, 15%)",
						900: "hsl(230, 17%, 14%)",
					},
					light: {
						toggle: "hsl(230, 22%, 74%)",
						text: "hsl(230, 17%, 14%)",
						"text-alt": "hsl(228, 12%, 44%)",
						700: "hsl(227, 47%, 96%)",
						800: "hsl(225, 100%, 98%)",
						900: "hsl(0, 0%, 100%)",
					},
				},
			},
		},
	},
	plugins: [],
};
