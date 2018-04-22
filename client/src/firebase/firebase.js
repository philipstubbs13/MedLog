import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAejy37NPoM-mlG4JYV63SG38KC_FQT5ZM",
    authDomain: "testproject-73caf.firebaseapp.com",
    databaseURL: "https://testproject-73caf.firebaseio.com",
    projectId: "testproject-73caf",
    storageBucket: "testproject-73caf.appspot.com",
    messagingSenderId: "669484164250"
};

if (!firebase.apps.length) {
firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};