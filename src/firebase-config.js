import firebase from 'firebase/app'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUFGV1Vund6QfibiaHVTajnMOffekJH4",
  authDomain: "hotelweblagoondeck.firebaseapp.com",
  projectId: "hotelweblagoondeck",
  storageBucket: "hotelweblagoondeck.appspot.com",
  messagingSenderId: "637387650291",
  appId: "1:637387650291:web:c8b1569f4603a8b325f386",
  measurementId: "G-MTV2S7439B"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics.
// const auth = getAuth(app);

// export default app;
// export { auth };
export const auth = firebase.auth();
export default app;


