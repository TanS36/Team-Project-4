//App.jsx
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import RegisterPage from "./pages/RegisterPage"; 
import LoginPage from "./pages/LoginPage"; 
import ProfilePage from "./pages/ProfilePage"; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUsername(name);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Search 
                        onSearch={(query) => console.log("Searching:", query)} 
                        isLoggedIn={isLoggedIn} 
                        username={username} 
                        onLogin={handleLogin}
                    />
                } />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
