import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import MainPage from "../Pages/MainPage"
import SobreMi from "../Pages/SobreMi/SobreMi"
import Curriculum from "../Pages/Curriculum/Curriculum"
import SafeMapPage from "../Pages/SafeMap/SafeMapPage"

const AppRoutes = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [ {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "/about",
            element: <SobreMi />,
          },
          {
            path: "/curriculum",
            element: <Curriculum />,
          },
          {
            path: "/safemap",
            element: <SafeMapPage />,
          },
    

        
        ]  
      }
        ])
        return <RouterProvider router={router}></RouterProvider>
    }
    
    export default AppRoutes