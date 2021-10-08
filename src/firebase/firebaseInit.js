import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCVHLAcJYUXu63yQlAZtgypdoaXCQQ9yk8",
    authDomain: "lugowebdevelopmentportfolio.firebaseapp.com",
    projectId: "lugowebdevelopmentportfolio",
    storageBucket: "lugowebdevelopmentportfolio.appspot.com",
    messagingSenderId: "1053918652292",
    appId: "1:1053918652292:web:fdb5a5305c791166ab5fd1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();

