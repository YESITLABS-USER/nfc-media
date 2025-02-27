import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "https://nfcmediapi.tgastaging.com",
});

export const login = (formData) => API.post("/api/v1/login", formData);

export const logout = (id) => API.post('/api/v1/logout', id, {
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
  }
});

// export const forgetpassword = (formData) => API.post('/forgot-password', formData);

// export const resetPassword = (formData) => API.post('/reset-password', formData);

// export const profileView = (id) => API.get(`/${id}`, { headers: {
//   'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
// }});

// export const updateUserProfile = ({formData, id}) => API.put(`/${id}`, formData, { 
//   headers: {
//     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
//     'Content-Type': 'multipart/form-data',
//   },
// });

// ------------------------------ User Slice APi -----------------------------------------------


export const signUp = (formData) => API.post(`/api/v1/sign-up`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

export const signIn = (formData) => API.post(`/api/v1/user-login`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

export const verifyOtp = (formData) => API.post(`/api/v1/verify-otp`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});
export const resendOtp = (formData) => API.post(`/api/v1/resend-otp`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

export const getUser = (formData) => API.post(`/api/v1/my-profile-get`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});
export const updateUser = (formData) => API.post(`/api/v1/my-profile-update`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});
export const deleteUser = (formData) => API.post(`/api/v1/delete-account`, formData, { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

// ---------------------------------- About Tagis Api -----------------------------------------------

export const getAboutTagis = () => API.get(`/api/v1/get-about-us`,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

// ---------------------------------- About Services Api -----------------------------------------------

export const getAboutServices = () => API.get(`/api/v1/get-about-services`,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

// ---------------------------------- Terms and Condition and Privacy Api --------------------------------

export const getTermsCondition = () => API.get(`/api/v1/term-condition`,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

export const getPrivacyPolicy = () => API.get(`/api/v1/privacy-policy`,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});


// ---------------------------------- Contact Api --------------------------------

export const createContact = (formData) => API.post(`/api/v1/save-contact`, formData,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});

// ---------------------------------- FAQ Api --------------------------------

export const getAllFaq = () => API.get(`/api/v1/view-faq`,  { 
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("nfc-app"))?.token}`,
    'lang': localStorage.getItem("language") || "eng",
  },
});
