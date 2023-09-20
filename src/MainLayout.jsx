
import {
    createBrowserRouter,
  } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import CategoryDetails from "./pages/CategoryDetails/CategoryDetails";
import HomeContent from "./pages/HomeContent/HomeContent";

const MainLayout= createBrowserRouter(
   [{
    path: '/',
    
    element: <Home/>,
    children: [
      {
        path: '/search',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pasta'),
        element: <HomeContent/>
      },
      {
        path: '/categories',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/categories/:name',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`), 
       element: <CategoryDetails/>

      }
     
    ]
  }]
  )


export default MainLayout
