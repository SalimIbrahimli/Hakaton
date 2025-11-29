// Firebase Auth importları
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Sənin config kodun
import { firebaseConfig } from "./firebase-config.js";

// Firebase-i işə sal
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// HTML düyməsi
const googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // İstifadəçi məlumatlarını localStorage-ə yazırıq
      localStorage.setItem(
        "travelxCurrentUser",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );

      // Xoş gəldin səhifəsinə yönləndir
      window.location.href = "./welcome.html";
    })
    .catch((error) => {
      console.log("Google login error:", error);
    });
});
