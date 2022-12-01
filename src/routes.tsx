import { createBrowserRouter } from "react-router-dom";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { Home } from "./pages/Home/Home";
import { Reading } from "./pages/Reading/Reading";
import Contact from "./pages/Contact/Contact";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/articles",
		element: <ArticlesPage />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/reading",
		element: <Reading />
	},
]);
