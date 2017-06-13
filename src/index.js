import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

var config = {
  apiKey: "AIzaSyD_OeCv23-rBLc7jNo-zBeJJJ1BWMpyrQg",
  authDomain: "personal-goals-d34e1.firebaseapp.com",
  databaseURL: "https://personal-goals-d34e1.firebaseio.com",
  projectId: "personal-goals-d34e1",
  storageBucket: "personal-goals-d34e1.appspot.com",
  messagingSenderId: "685481268255"
};
firebase.initializeApp(config);
//ON. Accede a un hijo, esperando cambios
var ref = firebase.database().ref('resources').child('2');
ref.on('value', function(snapshot) {
  var template = snapshot.val();
  console.log(template);
});

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
