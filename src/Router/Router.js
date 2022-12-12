import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import ComputerScience from "../Pages/ComputerScience/ComputerScience";
import Contact from "../Pages/Contact/Contact";
import DragonNews from "../Pages/DragonNews/DragonNews";
import Home from "../Pages/Home/Home";
import Nutritionist from "../Pages/Nutritionist/Nutritionist";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path:'/skills',
                element: <Skills></Skills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/nutritionist',
                element: <Nutritionist></Nutritionist>
            },
            {
                path: '/course',
                element: <ComputerScience></ComputerScience>
            },
            {
                path: '/news',
                element: <DragonNews></DragonNews>
            }
        ]
    }

])

export default router;