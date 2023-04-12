import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

export const authRoutes = [
	{
		path: '/admin',
		element: <Admin/>
	}
]

export const publicRoutes = [
	{
		path: '/',
		element: <Home/>
	},
	{
		path: '/login',
		element: <Auth/>
	},
	{
		path: '/register',
		element: <Auth/>
	},
	{
		path: '/shop',
		element: <Shop/>
	},
	{
		path: '/cart',
		element: <Cart/>
	},
	{
		path: '/favorites',
		element: <Favorites/>
	},
	{
		path: '/product/:id',
		element: <Product/>
	},
	{
		path: '*',
		element: <NotFound/>
	},
]