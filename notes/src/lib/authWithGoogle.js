/* eslint-disable no-unused-vars */
import {signInWithPopup, GoogleAuthProvider,} from "firebase/auth";
import {auth} from "./config.js";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};
// export const close = () => {
//     signOut(auth)
//       .then(() => {
//         Sign-out successful.
//       })
//       eslint-disable-next-line no-unused-vars
//       .catch((error) => {
//         An error happened.
//       });
//   };
  
