// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAJjyDlY2tDpu4cGyhevEbFKyeJMJA_oNE",
	authDomain: "protfolioview.firebaseapp.com",
	projectId: "protfolioview",
	storageBucket: "protfolioview.firebasestorage.app",
	messagingSenderId: "620674716775",
	appId: "1:620674716775:web:cd35b54a58a98a360e30c2",
	databaseURL:
		"https://protfolioview-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
