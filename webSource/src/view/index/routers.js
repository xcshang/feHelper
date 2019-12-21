import Layout from "@/components/layout/Layout";

let routers = [
    {
      path: "/preview",
      component: () => import(/* webpackChunkName: "404" */ "@components/preview")
    },
    {
      path: "/404",
      component: () => import(/* webpackChunkName: "404" */ "@components/404")
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: () => import(/* webpackChunkName: "index" */ "./index"),
        }
      ]
    },
    {
      path: "/about",
      component: Layout,
      children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "about-index" */ "./about/index"),
      },
      {
        path: "doc",
        component: () => import(/* webpackChunkName: "about-doc" */ "./about/doc"),
      }
    ]
    },
    { path: "*", redirect: "/404" }
]

export default routers