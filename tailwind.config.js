module.exports = {
	mode: "jit",
	purge: ["./src/**"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
			desktop: "1280px",
		},
		extend: {
			minHeight: {
				20: "5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
