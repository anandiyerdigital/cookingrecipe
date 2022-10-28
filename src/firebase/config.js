import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBg784h9rdts-3PqJBGAedoxHL_9GgbmN8",
    authDomain: "cooking-ninja-site-adebe.firebaseapp.com",
    projectId: "cooking-ninja-site-adebe",
    storageBucket: "cooking-ninja-site-adebe.appspot.com",
    messagingSenderId: "734782480301",
    appId: "1:734782480301:web:bdfc9f3c734c87ddd6cb24"
  };


  const app = initializeApp(firebaseConfig);

  const projectFirestore = getFirestore(app);

  export {projectFirestore}