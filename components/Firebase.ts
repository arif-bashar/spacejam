import { firebaseConfig } from "./../firebaseConfig";
import * as firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

export default firebase;
