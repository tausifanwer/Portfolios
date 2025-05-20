// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MSG_SEN_ID,
	appId: import.meta.env.VITE_APP_ID,
	databaseURL: import.meta.env.VITE_DB_URL,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
