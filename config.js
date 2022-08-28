import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBisyjPkjcBKYL89anbZTydQZVZBn5UBu8",
  authDomain: "team-voting-a-c24fb.firebaseapp.com",
  databaseURL: "https://team-voting-a-c24fb-default-rtdb.firebaseio.com",
  projectId: "team-voting-a-c24fb",
  storageBucket: "team-voting-a-c24fb.appspot.com",
  messagingSenderId: "153520516257",
  appId: "1:153520516257:web:7fa25d811435b69b9414e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();