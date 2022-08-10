// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRPX89_6pA9ntsFPo0A_k_ilRVUGGA1dI",
    authDomain: "la-cueva-de-gollum.firebaseapp.com",
    projectId: "la-cueva-de-gollum",
    storageBucket: "la-cueva-de-gollum.appspot.com",
    messagingSenderId: "544271488654",
    appId: "1:544271488654:web:21b420bc69fb0af0919bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const conectarAfirebase = () => app