importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyDqWUevxsVTHxo1XMDaE92PCdw_DToLbHs",
    authDomain: "ts-quiz-app.firebaseapp.com",
    projectId: "ts-quiz-app",
    storageBucket: "ts-quiz-app.appspot.com",
    messagingSenderId: "1031743419892",
    appId: "1:1031743419892:web:fe8812f8979c9f95ec35a1"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
