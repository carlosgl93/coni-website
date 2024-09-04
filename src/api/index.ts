import axios from 'axios';

export const appointmentApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const paykuApi = axios.create({
  baseURL: import.meta.env.VITE_PAYKU_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_PAYKU_API_KEY}`,
  },
});
