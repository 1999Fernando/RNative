import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC-eJ03Xg7DJKhaCQuSECHSSOux5gy4mvM",
  authDomain: "reactcrud-ac276.firebaseapp.com",
  projectId: "reactcrud-ac276",
  storageBucket: "reactcrud-ac276.appspot.com",
  messagingSenderId: "376997193593",
  appId: "1:376997193593:web:2eb42ee6c901ad8908f1a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export default {
  firebase,
  db,
  auth
};
