import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Participants from './routes/participants.tsx';
import CreateParticipant from './routes/createParticipant.tsx';
import Home from './routes/home.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "participants",
        element: <Participants />
      },
      {
        path: "create",
        element: <CreateParticipant />,
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
