import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from "./error-page";
import Root, { loader as rootLoader, action as rootAction} from "./routes/root";
import Contact, {
  loader as contactLoader,
} from "./routes/contact";

import EditContact, {action as editAction} from "./routes/edit";



import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
