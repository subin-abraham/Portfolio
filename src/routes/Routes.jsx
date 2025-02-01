import React from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom';
import RootPage from '../pages/RootPage';
// import About from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/dashboard" element={<RootPage />} />
    {/* <Route path="/about" element={<About />} /> */}
  </Routes>
);
export default AppRoutes;