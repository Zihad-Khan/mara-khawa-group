import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/hero/Home.jsx'
import Gallery from './components/hero/Gallery.jsx'

const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
      children:[
        {
          path: "",
          element: <Home />
        },
        {
          path:"gallery",
          element: <Gallery />
        },
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
