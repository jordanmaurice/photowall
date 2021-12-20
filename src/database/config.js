import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw6dO31ZkhvcTcn_8CoU7a3HxPGU6LpLM",
  authDomain: "photowall-5ccd3.firebaseapp.com",
  databaseURL: "https://photowall-5ccd3-default-rtdb.firebaseio.com",
  projectId: "photowall-5ccd3",
  storageBucket: "photowall-5ccd3.appspot.com",
  messagingSenderId: "622009573497",
  appId: "1:622009573497:web:9bec99bebb04d8d6ddf4a8"
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database}