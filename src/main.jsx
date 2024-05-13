import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { MainPage } from './pages/MainPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/deploy-test/",
//     element: <App />,
//     children: [
//       {
//         path: "/deploy-test/",
//         element: <MainPage />,
//       },
//       {
//         path: "/vite-react-router/",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App></App>
  </React.StrictMode>,
)
