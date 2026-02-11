import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProfileLayout from './components/layout/profileLayout';
import MainLayout from './components/layout/mainLayout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Feed from './components/Feed/Feed';
import Profile from './components/pages/profile/profile'

// simple auth check
const isAuthenticated = () => {
  return document.cookie.includes("access_token");
};

// protected route wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Feed />} />
          {/* <Route path="/post" element={<Feed />} /> */}
        </Route>


        <Route
          element={
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        

        {/* DEFAULT REDIRECT */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
