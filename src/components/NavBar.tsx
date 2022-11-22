import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { theme } from "../styles/reactColorThemes";
import { ThemeProvider } from "@mui/material/styles";

import { Book, Email, Home, Menu, Users } from "../icons/fontAwesomeIcons";

const colorThemesForComponents = theme;

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
			className="menuDrawer"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			role="presentation"
			sx={{ width: "100%", height: "100%" }}
		>
			<List>
				{Object(menuBoxList).map((item: { icon: JSX.Element; title: string }) => (
					<ListItem key={item.title} sx={{ px: 1 }}>
						<ListItemButton alignItems="center" sx={{ ":hover": { backgroundColor: "#2E2E33" } }}>
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
			<ThemeProvider theme={colorThemesForComponents}>
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
			</ThemeProvider>
			<Drawer anchor={"left"} open={menuIsOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: "13rem" } }}>
				{menuList()}
			</Drawer>
		</>
	);
}
