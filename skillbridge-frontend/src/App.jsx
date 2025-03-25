// App.jsx
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUsername(name);
    };

    return (
        <Router>
            <AppRoutes 
                isLoggedIn={isLoggedIn} 
                username={username} 
                handleLogin={handleLogin} 
            />
        </Router>
    );
}

export default App;

