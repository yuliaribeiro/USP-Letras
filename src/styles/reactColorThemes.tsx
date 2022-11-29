import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		neutral: PaletteColorOptions;
		lightRed: PaletteColorOptions;
	}
	interface PaletteOptions {
		neutral: PaletteColorOptions;
		lightRed: PaletteColorOptions;
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		neutral: true;
		primary: true;
		success: true;
		lightRed: true;
	}
}

declare module "@mui/material/TextField" {
	interface TextFieldPropsColorOverrides {
		neutral: true;
		primary: true;
		success: true;
		lightRed: true;
	}
}

const { palette } = createTheme();
export const theme = createTheme({
	palette: {
		lightRed: palette.augmentColor({
			color: {
				main: "#F75A68",
			},
		}),
		neutral: palette.augmentColor({
			color: {
				main: "#717171",
			},
		}),
		primary: palette.augmentColor({
			color: {
				main: "#60A5FA",
			},
		}),
		success: palette.augmentColor({
			color: {
				main: "#00875F",
			},
		}),
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#717171",
							borderRadius: 10,
						},
						"&:hover fieldset": {
							borderColor: "#60A5FA",
						},
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					color: "#FFFFFF",
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: "#717171",
				},
			},
		},
	},
});
