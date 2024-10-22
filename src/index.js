import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp'; // Assuming you have a SignUp component
import Home from "./pages/Home";
import Index from './pages/Index'; // Login page
import Myphotos from './pages/Myphotos';
import CommunityPhotos from './pages/CommunityPhotos';
import UploadPhoto from './pages/UploadPhoto';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/index" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/openPhotos" element={<Myphotos />} />
      <Route path="/openCommunity" element={<CommunityPhotos />} />
      <Route path="/openUploadPhoto" element={<UploadPhoto />} />
      <Route path="/openSignUp" element={<SignUp />} /> {/* Keep this if you have a SignUp page */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
