import axios from "axios";

export const API_ADDRESS = "http://212.42.106.82/api/v1";

const API = axios.create({
  baseURL: API_ADDRESS,
});

export const PUBLIC_API = axios.create({
  baseURL: API_ADDRESS,
});

API.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

// API.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (err) => {
//     const originalRequest = err.config;
//     if (err.response.status == 401 && !err.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.post(
//           `${API_ADDRESS}/api/v1/users/refresh/`,
//           {
//             refresh: localStorage.getItem("refresh"),
//           }
//         );
//         localStorage.setItem("token", response.data.access);
//         return API.request(originalRequest);
//       } catch (e) {
//         return Promise.reject(e);
//       }
//     } else {
//       return Promise.reject(err);
//     }
//   }
// );

export default API;
