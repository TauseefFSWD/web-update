
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateUser from './components/CreateUser.jsx';
import Home from './components/Home.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
    children: [
      {
        path: '/',
        element: <Home/>, 
        loader: () => fetch('https://web-backend-3le3.onrender.com/users')
      },
      {
        path:'/create-user',
        element: <CreateUser/>
      }, {
        path: "/update/:id",
        element: <Update/>,
        loader: ({params}) => fetch(`https://web-backend-3le3.onrender.com/users/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
