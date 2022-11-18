import { Avatar, Grid, Typography } from "@mui/material";

export function Writer() {
	return (
		<>
			<Grid container sx={{ width: "60%", marginLeft: "auto", marginRight: "auto", paddingBottom: 10 }}>
				<Grid item>
					<Avatar
						alt="research name" //TODO Change name IAW Hygraph info
						src="https://avatars.githubusercontent.com/u/89787597?v=4"
						sx={{
							marginRight: 2,
							boxShadow: 5,
							width: { lg: 200, md: 150, sm: 100, xs: 0 },
							height: { lg: 200, md: 150, sm: 100, xs: 0 },
						}}
					/>
				</Grid>
				<Grid item xs>
					<Typography>
						Truncation should be conditionally applicable on this long line of text as this is a much longer line than
						what the container can support.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}
