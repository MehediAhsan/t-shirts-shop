import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from '../layouts/Main';
import Orders from '../components/Orders/Orders';
import About from '../components/About/About';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                loader: () => fetch('tshirts.json'),
                element: <Home></Home>
            },
            {
                path:'orders',
                element: <Orders></Orders>
            },
            {
                path:'about',
                element: <About></About>
            }
        ]
    }
])