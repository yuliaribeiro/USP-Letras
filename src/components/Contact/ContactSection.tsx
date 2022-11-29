import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

const textFieldList = [
	{
		label: "first name",
		type: "text",
		required: true,
		md: 6,
	},
	{
		label: "last name",
		type: "text",
		required: false,
		md: 6,
	},
	{
		label: "email",
		type: "email",
		required: true,
		md: 12,
	},
	{
		label: "subject",
		type: "text",
		required: true,
		md: 12,
	},
];

export function ContactSection() {
	return (
		<Card sx={{ maxWidth: 500, maxHeight: 530, bgcolor: "transparent" }}>
			<CardContent>
				<form>
					<Grid container spacing={2}>
						{/* @ts-ignore */}
						{Object(textFieldList).map((item, key) => {
							return (
								<Grid key={key} item md={item.md} xs={12}>
									<TextField
										type={item.type}
										label={item.label}
										variant="outlined"
										placeholder={item.label}
										fullWidth
										required={item.required}
									/>
								</Grid>
							);
						})}
						<Grid item xs={12}>
							<TextField
								label="message"
								variant="outlined"
								placeholder="message"
								multiline
								rows={5}
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								color="error"
								size="large"
								sx={{
									borderRadius: 5,
									fontFamily: "montserrat",
									fontWeight: "bold",
									":hover": {
										bgcolor: "lightRed.main",
									},
								}}
								variant="contained"
								fullWidth
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	);
}
