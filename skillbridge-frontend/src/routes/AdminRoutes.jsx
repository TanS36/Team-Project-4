// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AdminPanel from "../pages/AdminPanel";


const AdminRoutes = ({ isLoggedIn, username, handleLogin }) => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/panel" element={<AdminPanel />} />
            <Route path="/admin/panel/course/create" />
            <Route path="/admin/panel/course/courseId/edit" />
            <Route path="/admin/panel/course/courseId/lessonId/edit" />
            <Route path="/admin/panel/course/courseId/create" />
        </Routes>
    );
};

export default AdminRoutes;