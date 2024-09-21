import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import MovieDetails from './pages/MovieDetailsPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/movie/:id',
    element: <MovieDetails/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)