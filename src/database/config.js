import * as firebase from "firebase";
// import 'firebase/auth'
// import 'firebase/app'

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

const auth = app.auth();
const database = firebase.database()

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;

    console.log(user)

    // Query the database for the user...
    const query = await database.ref('users').where({"uid": user.uid}).get();

    // If the user is not found, add it...
    if (query.docs.length === 0) {
      await database.ref("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//database.ref('posts').update({[post.id]: post})

const signInWithEmailAndPassword = async (email, password) => {
  console.log("Hit: signInWithEmailAndPassword")
  
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Hit after await signInWithEmailAndPassword")
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    console.log(user)

    await database.collection('users').add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {  auth,
          database,
          signInWithGoogle,
          signInWithEmailAndPassword,
          registerWithEmailAndPassword,
          sendPasswordResetEmail,
          logout,
}