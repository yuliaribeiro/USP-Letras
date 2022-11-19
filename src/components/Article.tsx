import { Avatar, CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export function Article() {
	return (
		<Card sx={{ maxWidth: 425 }}>
			{/*TODO Apply onclick to redirect to the article*/}
			<CardActionArea>
				<CardHeader
					avatar={
						<Avatar
							aria-label="writer name" //TODO set name with JS
							src="https://avatars.githubusercontent.com/u/89787597?v=4"
							sx={{ width: 75, height: 75 }}
						/>
					}
					title={
						<Typography variant="body1">
							Write title here. I know that they are very very long, so I'm still writing here, just to fill it
						</Typography>
					} //TODO set name IAW H.
					subheader="September 14, 2016" //TODO set date realease IAW H.
				/>
				<CardContent>
					{
						//TODO  set Text below IAW description H.
					}

					<Typography
						gutterBottom
						variant="body2"
						color="text.secondary"
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							WebkitLineClamp: "5",
							WebkitBoxOrient: "vertical",
						}}
					>
						This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
						of frozen peas along with the mussels, if you like. Add rice and stir very gently to distribute. Top with
						artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
						Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
						without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more.
					</Typography>

					<Typography variant="overline" color="text.secondary">
						read more
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
