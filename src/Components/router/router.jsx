import { Form, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Hero from "../Hero/Hero"
import Number from "../Number/Number";
import About from "../About/About";
import Hover from "../Hover/Hover";
import Lavash from "../Food/Lavash/Lavash";
import Desert from "../Food/Desert/Desert"; 
import Bread from "../Food/Bread/Bread";
import Burger from "../Food/Burger/Burger";
import Set from "../Food/Set/Set"
import Pizza from "../Food/Pizza/Pizza"
import Sendvich from "../Food/Sendvich/Sendvich"
import Xoddog from "../Food/Xoddog/Xoddog"
import Free from "../Food/Free/Free"
import Drink from "../Food/Drink/Drink"
import Salad from "../Food/Salad/Salad"
import Sauke from "../Food/Sauke/Sauke"
import Xagi from "../Food/Xagi/Xagi";
import Button from "../Button/Button";
import NumberCard from "../Number.card/NumberCard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Hero />,
                children:[
                    {
                        path:"/",
                        element:<Lavash/>
                    },
                    {
                        path:"/desert",
                        element:<Desert/>
                    },
                    {
                        path:"/set",
                        element:<Set/>
                    },
                    {
                        path:"/xagi",
                        element:<Xagi/>
                    },
                    {
                        path:"/burger",
                        element:<Burger/>
                    },
                    {
                        path:"/pizza",
                        element:<Pizza/>
                    },
                    {
                        path:"/sendvich",
                        element:<Sendvich/>
                    },
                    {
                        path:"/xoddog",
                        element:<Xoddog/>
                    },
                    {
                        path:"/free",
                        element:<Free/>
                    },
                    {
                        path:"/drink",
                        element:<Drink/>
                    },
                    {
                        path:"/salad",
                        element:<Salad/>
                    },
                    {
                        path:"/bread",
                        element:<Bread/>
                    },
                    {
                        path:"/sauke",
                        element:<Sauke/>
                    },
                ]
            },
            {
                path: "/number",
                element: <Number />
            },
            {
                path: "/numbercard",
                element:<NumberCard/>
            },
            {
                path: "/about",
                element: <About />
            }
            ,
            {
                path: "/hover",
                element: <Hover />
            }
            ,
            {
                path: "/button",
                element: <Button />
            }
        ],

    },
])
export default router

