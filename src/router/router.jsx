import { Form, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../Components/Hero/Hero"
import Number from "../Components/Number/Number";
import About from "../Components/About/About";
import Hover from "../Components/Hover/Hover";
import Lavash from "../Components/Food/Lavash/Lavash";
import Desert from "../Components/Food/Desert/Desert"; 
import Bread from "../Components/Food/Bread/Bread";
import Burger from "../Components/Food/Burger/Burger";
import Set from "../Components/Food/Set/Set"
import Pizza from "../Components/Food/Pizza/Pizza"
import Sendvich from "../Components/Food/Sendvich/Sendvich"
import Donar from "../Components/Food/Donar/Donar"
import Xoddog from "../Components/Food/Xoddog/Xoddog"
import Free from "../Components/Food/Free/Free"
import Drink from "../Components/Food/Drink/Drink"
import Salad from "../Components/Food/Salad/Salad"
import Sauke from "../Components/Food/Sauke/Sauke"
import Xagi from "../Components/Food/Xagi/Xagi";
import Button from "../Components/Button/Button";
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
                        path:"/donar",
                        element:<Donar/>
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