import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
