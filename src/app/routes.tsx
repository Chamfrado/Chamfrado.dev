import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// lazy = carregamento sob demanda (code splitting)
const Home = lazy(() => import('../pages/home/Home'))
const About = lazy(() => import('../pages/about/about'))

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
])

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-6 text-neon-cyan">carregando…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
