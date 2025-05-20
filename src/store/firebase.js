// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: import.meta.env.API_KEY,
	authDomain: import.meta.env.AuthDomain,
	projectId: import.meta.env.projectId,
	storageBucket: import.meta.env.storageBucket,
	messagingSenderId: import.meta.env.messagingSenderId,
	appId: import.meta.env.appId,
	databaseURL: import.meta.env.databaseURL,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
