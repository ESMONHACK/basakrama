import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Desktop } from "./screens/Desktop";
import { LoginForm } from "./screens/Desktop/Login/Loginform";
import { RegisterForm } from  "./screens/Desktop/Register/Registerform"
import { IntroductionForm } from "./screens/Desktop/Introduction/Introductionform"
import { Dashboard } from "./screens/Desktop/Dashboard/Dashboardkrama"

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Desktop />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />  
        <Route path="/introduction" element={<IntroductionForm />} />  
        <Route path="/dashboard" element={<Dashboard />} />  
        
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
