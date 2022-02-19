import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDAOdyl3NiPol4bsHpLYrWoyOyI1sNZpcc",
    authDomain: "e-ride-9aa54.firebaseapp.com",
    projectId: "e-ride-9aa54",
    storageBucket: "e-ride-9aa54.appspot.com",
    messagingSenderId: "395972388129",
    appId: "1:395972388129:web:775e850d4612c37ca4ca60"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
