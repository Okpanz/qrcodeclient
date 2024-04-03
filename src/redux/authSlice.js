import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  user: null,
  isLoading: false,
  error: null,
  successMessage: null,
};

// Define async thunk for logging in
export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
  try {
    const response = await fetch('https://server-master-ullz.onrender.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const user = await response.json();
    dispatch(loginUser(user)); // Dispatch loginUser action to update user state
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  dispatch(logoutUser()); // Dispatch logoutUser action to clear user state
});


// Define async thunk for signing up
export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch('https://server-master-ullz.onrender.com/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); 
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem('user'); 
    },
    clearError(state) {
      state.error = null;
    },
    clearSuccessMessage(state) {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.successMessage = 'Login successful';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.successMessage = 'Signup successful';
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    selectError: (state) => state.error,
    selectLoading: (state) => state.isLoading,
    selectSuccess: (state) => state.successMessage,
  },
});

export const {  clearError, clearSuccessMessage } = authSlice.actions;
export const { selectError, selectLoading, selectSuccess } = authSlice.selectors;
export default authSlice.reducer;
