import { Avatar, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export function Article() {
	return (
		<Card
			sx={{
				height: 400,
				maxWidth: 410,
				marginLeft: "auto",
				marginRight: "auto",
				"&:hover": { scale: { lg: "1.09", md: "1.05" } },
			}}
		>
			{/*TODO Apply onclick to redirect to the article*/}

			<CardHeader
				avatar={
					<Avatar
						aria-label="writer name" //TODO set name with JS
						src="https://avatars.githubusercontent.com/u/89787597?v=4"
						sx={{ height: 75, width: 75 }}
					/>
				}
				subheader="September 14, 2016" //TODO set date realease IAW H.
				title={
					<Typography textAlign="justify" variant="body1">
						Write title here. I know that they are very very long, so I'm still writing here, just to fill it
					</Typography>
				} //TODO set name IAW H.
			/>
			<CardContent>
				{
					//TODO  set Text below IAW description H.
				}

				<Typography
					color="text.secondary"
					gutterBottom
					sx={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: "8",
						WebkitBoxOrient: "vertical",
					}}
					textAlign="justify"
					variant="body1"
				>
					This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
					frozen peas along with the mussels, if you like. Add rice and stir very gently to distribute. Top with
					artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
					Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
					without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. Reduce heat to
					medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring,
					until mussels have opened and rice is just tender, 5 to 7 minutes more. Reduce heat to medium-low, add
					reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels
					have opened and rice is just tender, 5 to 7 minutes more.
				</Typography>
				{/*TODO set onclick to redirect to page*/}
				<Button>read more</Button>
			</CardContent>
		</Card>
	);
}
