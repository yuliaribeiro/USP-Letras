/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				exo: ["exo", "sans-serif"],
				merriweather: ["merriweather", "sans-serif"],
				montserrat: ["montserrat", "sans-serif"],
			},
			colors: {
				gray: {
					100: "#E1E1E6",
					200: "#C4C4CC",
					300: "#8D8D99",
					500: "#323238",
					600: "#29292E",
					700: "#121214",
					900: "#09090A",
				},
				green: {
					400: "#00875F",
				},
				red: {
					500: "#F75A68",
				},
			},
		},
	},
	plugins: [],
};
