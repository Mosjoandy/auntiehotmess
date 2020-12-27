import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyARWHdLEqTSRY3gF0XgDry0T_DXLQBteCM",
    authDomain: "auntiehotmessdb.firebaseapp.com",
    databaseURL: "https://auntiehotmessdb.firebaseio.com",
    projectId: "auntiehotmessdb",
    storageBucket: "auntiehotmessdb.appspot.com",
    messagingSenderId: "1087867434162",
    appId: "1:1087867434162:web:750971f59f966907"
};
firebase.initializeApp(config);

export default firebase