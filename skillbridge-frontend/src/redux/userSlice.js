import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный экшен для получения данных профиля
export const fetchUserProfile = createAsyncThunk("user/fetchProfile", async (_, { rejectWithValue }) => {
    try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/api/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Не удалось загрузить данные пользователя.");
    }
});

// Асинхронный экшен для регистрации
export const registerUser = createAsyncThunk("user/register", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/register", formData);
        if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
            return response.data;
        }
        throw new Error("Registration failed");
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Ошибка регистрации");
    }
});

// Асинхронный экшен для логина
export const loginUser = createAsyncThunk("user/login", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", formData);
        if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
            return response.data;
        }
        throw new Error("Ошибка входа");
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Неверный email или пароль.");
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
        successMessage: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            sessionStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // Получение профиля
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Регистрация
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = "Регистрация успешна!";
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //логин
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

