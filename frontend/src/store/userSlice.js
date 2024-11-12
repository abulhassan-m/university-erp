import { createSlice } from '@reduxjs/toolkit';
import { login } from '../services/auth';

const userSlice = createSlice({
    name: 'user',
    initialState: { userInfo: null, isAuthenticated: false },
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.userInfo = null;
            state.isAuthenticated = false;
        }
    }
});

export const { loginSuccess, logout } = userSlice.actions;

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const userData = await login(username, password);
        dispatch(loginSuccess(userData));
    } catch (error) {
        console.error("Login failed:", error);
    }
};

export default userSlice.reducer;