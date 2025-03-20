//LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../assets/Registration.module.sass";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", formData);
            localStorage.setItem("token", response.data.token);
            navigate("/profile");
        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Login</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </form>

                <button onClick={() => navigate("/register")} className={styles.button}>
                    I don't register
                </button>
            </div>
        </div>
    );
};

export default LoginPage;

