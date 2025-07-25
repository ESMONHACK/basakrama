import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Desktop } from "./screens/Desktop";
import { LoginForm } from "./screens/Desktop/Login/Loginform";
import { RegisterForm } from  "./screens/Desktop/Register/Registerform"
import { IntroductionForm } from "./screens/Desktop/Introduction/Introductionform"
import { Dashboard } from "./screens/Desktop/Dashboard/Dashboardkrama"
import { Profile } from "./screens/Desktop/Dashboard/Profile"
import { MatchingGame } from "./screens/Desktop/Dashboard/Gamesambungkata"
import {Gamebubblekata} from "./screens/Desktop/Dashboard/Gamebubblekata"
import {GameSoal} from "./screens/Desktop/Dashboard/Gamesoal"

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
        <Route path="/profile" element={<Profile />} />  
        <Route path="/sambungkata" element={<MatchingGame />} />
        <Route path="/bubblekata" element={<Gamebubblekata />} />
        <Route path="/soal" element={<GameSoal />} />
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
