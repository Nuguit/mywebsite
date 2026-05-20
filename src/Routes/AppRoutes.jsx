import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import MainPage from "../Pages/MainPage"
import SobreMi from "../Pages/SobreMi/SobreMi"
import Curriculum from "../Pages/Curriculum/Curriculum"
import SafeMapPage from "../Pages/SafeMap/SafeMapPage"
import OtrosProyectos from "../Pages/OtrosProyectos/OtrosProyectos"

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
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
        {
          path: "/otrosproyectos",
          element: <OtrosProyectos />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes
