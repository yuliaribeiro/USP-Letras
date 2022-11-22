import { Avatar, Grid, Typography } from "@mui/material";

export function Writer() {
	return (
		<>
			<Grid container sx={{ marginLeft: "auto", marginRight: "auto", width: "95%" }}>
				<Grid item>
					<Avatar
						alt="research name" //TODO Change name IAW H. info
						src="https://avatars.githubusercontent.com/u/89787597?v=4" //TODO Change pic
						sx={{
							marginRight: 2,
							marginTop: 2,
							marginBottom: 2,
							boxShadow: 6,
							width: { lg: 200, md: 150, sm: 100, xs: 0 },
							height: { lg: 200, md: 150, sm: 100, xs: 0 },
						}}
					/>
				</Grid>
				<Grid item xs>
					<Typography textAlign="justify">
						Truncation should be conditionally applicable on this long line of text as this is a much longer line than
						what the container can support.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}
