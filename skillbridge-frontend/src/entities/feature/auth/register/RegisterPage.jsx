import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Fotter from "../../../../components/Footer/Footer";
import styles from "./ui/Registration.module.sass";

const RegisterPage = () => {
    const [formData, setFormData] = React.useState({ name: "", email: "", password: "" });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.user);

    useEffect(() => {
        if (successMessage) {
            setTimeout(() => navigate("/profile"), 1500);
        }
    }, [successMessage, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Registration</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

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

                    <button type="submit" disabled={loading} className={styles.button}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <button onClick={() => navigate("/login")} className={styles.button}>
                    Do you already have an account? Login
                </button>
            </div>
        </div>
        <Fotter />
        </>
    );
};

export default RegisterPage;