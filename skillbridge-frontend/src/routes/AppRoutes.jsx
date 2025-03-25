// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";


const AppRoutes = ({ isLoggedIn, username, handleLogin }) => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default AppRoutes;
