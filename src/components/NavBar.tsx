import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Users, Home, Menu, Book, Email } from "../icons/fontAwesomeIcons";

const menuBoxList = [
	{
		title: "Home",
		icon: <Home />,
	},
	{
		title: "About us",
		icon: <Users />,
	},
	{
		title: "Articles",
		icon: <Book />,
	},
	{
		title: "Contact",
		icon: <Email />,
	},
];

export function NavBar() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setMenuIsOpen(open);
	};

	const menuList = () => (
		<Box
			className="temporary"
			sx={{ width: "100%", height: "100%" }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{Object(menuBoxList).map((item: { title: string; icon: JSX.Element }) => (
					<ListItem key={item.title} disablePadding>
						<ListItemButton>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Button startIcon={<Menu />} onClick={toggleDrawer(true)}>
				MENU
			</Button>
			<Drawer anchor={"left"} open={menuIsOpen} onClose={toggleDrawer(false)}>
				{menuList()}
			</Drawer>
		</>
	);
}
