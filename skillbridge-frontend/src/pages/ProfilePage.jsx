import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../assets/Profile.module.sass";

const ProfilePage = () => {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (err) {
                setError("Не удалось загрузить данные пользователя.");
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.profileWrapper}>
                <h2 className={styles.title}>User Information</h2>
                {error ? (
                    <p className={styles.error}>{error}</p>
                ) : (
                    <div className={styles.userInfo}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;