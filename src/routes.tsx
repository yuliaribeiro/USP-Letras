import { createBrowserRouter } from "react-router-dom";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/articles",
		element: <ArticlesPage />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);
