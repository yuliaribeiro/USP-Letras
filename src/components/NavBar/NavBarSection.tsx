import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Book, Email, Home, Menu, Users } from "../icons/fontAwesomeIcons";

const menuBoxList = [
	{
		title: "Home",
		icon: <Home />,
		path: "/",
	},
	{
		title: "About us",
		icon: <Users />,
		path: "about",
	},
	{
		title: "Articles",
		icon: <Book />,
		path: "/articles",
	},
	{
		title: "Contact",
		icon: <Email />,
		path: "/contact",
	},
];

export function NavBarSection() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const path = useNavigate();

	const handleClick = (route: string) => {
		if (route === "about") {
			path("/");
			const anchor = document.getElementById(route);
			console.log(anchor);
			setTimeout(() => anchor?.scrollIntoView({ block: "center", inline: "center" }), 10);
		} else {
			path(route);
		}
	};

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
			className="menuDrawer"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			role="presentation"
			sx={{ width: "100%", height: "100%" }}
		>
			<List>
				{Object(menuBoxList).map((item: { icon: JSX.Element; title: string; path: string }) => (
					<ListItem key={item.title} sx={{ px: 1 }}>
						<ListItemButton
							alignItems="center"
							sx={{ ":hover": { backgroundColor: "#2E2E33" } }}
							onClick={() => handleClick(item.path)}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primaryTypographyProps={{ fontFamily: "montserrat" }} primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Button
				color="neutral"
				onClick={toggleDrawer(true)}
				startIcon={<Menu />}
				sx={{
					":hover": { color: "#F75A68" },
					fontFamily: "montserrat",
					fontWeight: "bold",
					position: "fixed",
					left: 15,
					top: 10,
				}}
			>
				MENU
			</Button>
			<Drawer anchor={"left"} open={menuIsOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: "13rem" } }}>
				{menuList()}
			</Drawer>
		</>
	);
}
