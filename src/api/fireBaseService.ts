import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Interfaces
import { Login } from "@/interfaces/Login";

export const fireBaseService = new class FireBaseService {
    
    firebaseConfig = {
        apiKey: "AIzaSyDBaFB4kHEUntKqubh4acCzpgTB6TAn61M",
        authDomain: "flashing-english.firebaseapp.com",
        projectId: "flashing-english",
        storageBucket: "flashing-english.appspot.com",
        messagingSenderId: "11161847788",
        appId: "1:11161847788:web:53681c5d6a76b73469e2c9",
        measurementId: "G-CZFLW8RYWC"
    };
    firebaseApp = initializeApp(this.firebaseConfig);
    
    firebaseAuth = getAuth(this.firebaseApp);
    analytics = getAnalytics(this.firebaseApp);

    constructor() {
        console.log('FireBaseService Constructor');
    }

    public async logInByEmail(userCredentials: Login) {
        console.log('Start');

        await createUserWithEmailAndPassword(
            this.firebaseAuth,
            userCredentials.email,
            userCredentials.password
        )
        .then((userCredentialsResp) => {
            console.log(userCredentialsResp);
        })
        .catch((error) => {
            this.handleError(error);
        });
    }

    public handleError(error: any) {
        console.error(error.message, error.code);
    }
}