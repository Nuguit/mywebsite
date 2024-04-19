import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import MainPage from "../Pages/MainPage"

const AppRoutes = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [ {
            path: "/",
            element: <MainPage />,
          },
        
        
        ]  
      }
        ])
        return <RouterProvider router={router}></RouterProvider>
    }
    
    export default AppRoutes