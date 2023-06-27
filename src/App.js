// import logo from './logo.svg';
import "./App.css";

import ArticalPage from "./Page/ArticalPage";
import ArticalPageSecond from "./Page/ArticalPageSecond";
import ClinlicsPage from "./Page/ClinlicsPage";
import RelatedArticalPage from "./Page/RelatedArticalPage";
import MoreRelatedArticlesPage from "./Page/MoreRelatedArticlesPage";
import SamplePage from "./Page/SamplePage";
import Specialities from "./Page/Specialities";
import { createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom';
import Footor from "./components/Footor/Footor";


const Layout=()=>{
  return(
    <div className="">
        <Outlet/>
        <Footor/>
        </div>
  )
}

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <SamplePage />
      },
      {
        path:"/ArticalPage",
        element: <ArticalPage /> 
       },
      {
        path:"/ArticalPageSecond",
        element:<ArticalPageSecond />
      },
      {
        path:"/ClinlicsPage",
        element:<ClinlicsPage />
      },
      {
        path:"/RelatedArticalPage",
        element:<RelatedArticalPage />
      },
      {
        path:"/Specialities",
        element: <Specialities />
      },
      {
        path:"/MoreRelatedArticlesPage",
        element:<MoreRelatedArticlesPage/>
      }
    ]
  }
])

function App() {
  return (
    <>
     
     
     <RouterProvider router={router}/>
      
      
     
      
    </>
  );
}

export default App;
