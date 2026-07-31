import { Suspense, lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import MainPage from "../Pages/MainPage"
import SobreMi from "../Pages/SobreMi/SobreMi"
import Curriculum from "../Pages/Curriculum/Curriculum"
import SafeMapPage from "../Pages/SafeMap/SafeMapPage"
import OtrosProyectos from "../Pages/OtrosProyectos/OtrosProyectos"

const ProjectCaseStudy = lazy(() => import("../Pages/OtrosProyectos/ProjectCaseStudy"))
const Faq = lazy(() => import("../Pages/Faq/Faq"))
const Contact = lazy(() => import("../Pages/Contact/Contact"))
const Blog = lazy(() => import("../Pages/Blog/Blog"))
const TechPage = lazy(() => import("../Pages/Technologies/TechPage"))

const withSuspense = (element) => (
  <Suspense fallback={<div style={{ backgroundColor: "#050505", minHeight: "40vh" }} />}>
    {element}
  </Suspense>
)

const techRoute = (path, slug) => ({
  path,
  element: withSuspense(<TechPage slug={slug} path={path} />),
})

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
        {
          path: "/otrosproyectos/:slug",
          element: withSuspense(<ProjectCaseStudy />),
        },
        {
          path: "/faq",
          element: withSuspense(<Faq />),
        },
        {
          path: "/contacto",
          element: withSuspense(<Contact />),
        },
        {
          path: "/blog",
          element: withSuspense(<Blog />),
        },
        techRoute("/react", "react"),
        techRoute("/nodejs", "nodejs"),
        techRoute("/javascript", "javascript"),
        techRoute("/php", "php"),
        techRoute("/wordpress", "wordpress"),
        techRoute("/mysql", "mysql"),
        techRoute("/mongodb", "mongodb"),
        techRoute("/api", "api"),
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes
