//ReqisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/Registration.module.sass";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Registration error");
            }

            setSuccess("You have successfully registered!");
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setError("Failed to register. Try again.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Регистрация</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

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
                        Registration
                    </button>
                </form>

                <button onClick={() => navigate("/login")} className={styles.button}>
                Do you already have an account? Login
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
