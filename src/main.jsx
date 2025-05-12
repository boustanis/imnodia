import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Test from './components/Test.jsx';
import Playlist from './components/Playlist.jsx';

import UnderConstruction from './components/UnderConstruction.jsx';

import './index.css'

const basePath = import.meta.env.BASE_URL;

const paths = [
  {
    path:`${basePath}`,
    element:<App/>
  },
  {
    path:`${basePath}playlist`,
    element:<Playlist/>
  },
  {
    path:`${basePath}chords`,
    element:<UnderConstruction/>
  },
  {
    path:`${basePath}test`,
    element:<Test />
  }
];

const router = createBrowserRouter(paths)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

console.log(paths);
