import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Api.js";
import { toast } from "react-toastify";


// // For Unauthenticated User
// function logouterror() {
//   toast.error("Token Expired")
//   localStorage.removeItem("nfc-admin");
//   setTimeout(() => {
//     window.location.href = "/";
//   }, 1000);
// }

//  User API
export const signUp = createAsyncThunk("user/signUp", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.signUp(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
export const signIn = createAsyncThunk("user/signIn", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.signIn(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
export const logout = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await api.logout();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const verifyOtp = createAsyncThunk("user/verifyOtp", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.verifyOtp(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const resendOtp = createAsyncThunk("user/resendOtp", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.resendOtp(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const getUser = createAsyncThunk("user/getUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.getUser(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const updateUser = createAsyncThunk("user/updateUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.updateUser(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.deleteUser(formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
 
const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userData: null,
    loading: false,
    error: null,
    otpError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Sign-up user
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload?.message || "Otp sent successfully")
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        const errorPayload = action.payload || "Failed to send OTP";
        state.error = errorPayload;
    
        if (errorPayload.errors) {
            const errorMessages = Object.values(errorPayload.errors).flat().join(", ");
            toast.error(errorMessages || "Failed to send OTP");
        } else {
            toast.error(errorPayload.error?.[0] || "Failed to send OTP");
        }
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload?.message || "Otp sent successfully")
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        const errorPayload = action.payload || "Failed to send OTP";
        state.error = errorPayload;
        if (errorPayload.errors) {
          const errorMessages = Object.values(errorPayload.errors).flat().join(", ");
          toast.error(errorMessages ?? action.payload?.message ?? "Failed to send OTP");
        } else {
          toast.error(errorPayload.error?.[0] ?? action.payload?.message ?? "Failed to send OTP");
        }
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload?.message || "Logout successfully")
        localStorage.removeItem("nfc-app");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload?.message || "Unauthenticated User");
        localStorage.removeItem("nfc-app");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
    
      // Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpError = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpError = null;
        localStorage.setItem("nfc-app", JSON.stringify({
          user_id: action.payload?.user?.id,
          token: action.payload?.token
        }));
        toast.success(action.payload?.message || "Otp verified successfully")
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Wrong OTP";
        state.otpError = action.payload?.message || "Wrong or Invalid OTP"
      })

      // resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpError = null;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpError = null;
        toast.success(action.payload?.message || "Otp resend successfully");
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Wrong OTP";
        toast.error(action.payload?.message || "Failed to resend otp")
      })

      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload?.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
        toast.error(action.payload?.message || "Failed to get account");
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload?.data;
        toast.success(action.payload?.message || "User updated successfully");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
        toast.error(action.payload?.message || "Failed to Update User");
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = null;
        toast.success(action.payload?.message || "Account deleted successfully");
        setTimeout(() => {
          window.location.href = "/";
          localStorage.removeItem("nfc-app");
        },[500]);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "error in deleting account";
        toast.error(action.payload?.message || "Failed to delete account");
      })

  },
});

export default userSlice.reducer;
