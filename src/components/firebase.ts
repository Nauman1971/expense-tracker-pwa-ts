import firebase from 'firebase/app';
import 'firebase/messaging';

export const firebaseConfig = {
    apiKey: "AIzaSyCu7T9QureRlqWoGNdXIaxhFaVUkNGdcTo",
    authDomain: "expense-tracker-ap.firebaseapp.com",
    projectId: "expense-tracker-ap",
    storageBucket: "expense-tracker-ap.appspot.com",
    messagingSenderId: "83594289466",
    appId: "1:83594289466:web:8a6d6427527ddd1d923003"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
