import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Test from './components/Test.jsx';
import Playlist from './components/Playlist.jsx';

import UnderConstruction from './components/UnderConstruction.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/playlist",
    element:<Playlist/>
  },
  {
    path:"/chords",
    element:<UnderConstruction/>
  },
  {
    path:"/test",
    element:<Test />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
