import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		neutral: PaletteColorOptions;
	}
	interface PaletteOptions {
		neutral: PaletteColorOptions;
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		neutral: true;
	}
}

const { palette } = createTheme();
export const theme = createTheme({
	palette: {
		neutral: palette.augmentColor({
			color: {
				main: "#717171",
			},
		}),
	},
});
