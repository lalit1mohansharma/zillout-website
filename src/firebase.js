import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyB3LjqR2Sa6wArq0j2BmMr7REWsvtDV_ec",
      authDomain: "zillout-1611836129456.firebaseapp.com",
      databaseURL: "https://zillout-1611836129456-default-rtdb.firebaseio.com",
      projectId: "zillout-1611836129456",
      storageBucket: "zillout-1611836129456.appspot.com",
      messagingSenderId: "141910281072",
      appId: "1:141910281072:web:92d65fd0972924b2ab9db5"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;