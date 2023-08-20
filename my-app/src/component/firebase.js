import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
const firebaseConfig = {
  apiKey: "AIzaSyBgoMZqOt-nv4VKVgHj3ZFjRb8AVW3Ke40",
  authDomain: "demotest-cbd0d.firebaseapp.com",
  projectId: "demotest-cbd0d",
  storageBucket: "demotest-cbd0d.appspot.com",
  messagingSenderId: "694949577264",
  appId: "1:694949577264:web:5a32500886f4122053e3f5",
  measurementId: "G-G64QZ2SXHS",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();
export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BBqJIE0R1QDODOQ8ZicKYM7FABoK8xhZz6aYvTYmtx3hifL1bDF0tNj1ymtozdmIMnUjl2o2lYnDtF_b4M7Rl70",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
