import firebase from "./Firebase";
import { database } from "firebase";

const db = firebase.firestore();

const addRoom = () => {
  let user = db.collection("users").doc("MW7xkSf8rxdKax2ZPQDqS1JZBlJ2");
  user.get().then(function(doc) {
    if(doc.exists){
      console.log(doc.data());
    } else {
      console.log("No document");
    }
  }).catch(function(error) {
    console.log("Error getting document: ", error);
  });

/*  db.collection("rooms").doc("MW7xkSf8rxdKax2ZPQDqS1JZBlJ2").set({
    roomName: "Arif's Room",
    roomId: 12345678910,
    inviteCode: 123,
    host: user.get().then(function(doc))
  });*/
}

export default addRoom;