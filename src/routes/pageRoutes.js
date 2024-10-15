import { path } from "./path";
import Home from "../components/home";
import Shop from "../components/shop";
import Cart from "../components/cart";


export const pageRoutes = [
  {
    name: "Home",
    Components: Home,
    isPrivate: false,
    path: path.HOME
  },
  {
    name: "Shop",
    Components: Shop,
    isPrivate: false,
    path: path.SHOP
  },
  {
    name: "Plants",
    Components: Shop,
    isPrivate: false,
    path: path.PLANTS
  },
  {
    name: "Cacti",
    Components: Shop,
    isPrivate: false,
    path: path.CACTI
  },
  {
    name: "Cart",
    Components: Cart,
    isPrivate: false,
    path: path.CART
  },

]
