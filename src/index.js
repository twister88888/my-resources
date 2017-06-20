import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import firebase from 'firebase'
import registerServiceWorker from './components/registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

var config = {
  apiKey: "AIzaSyD_OeCv23-rBLc7jNo-zBeJJJ1BWMpyrQg",
  authDomain: "personal-goals-d34e1.firebaseapp.com",
  databaseURL: "https://personal-goals-d34e1.firebaseio.com",
  projectId: "personal-goals-d34e1",
  storageBucket: "personal-goals-d34e1.appspot.com",
  messagingSenderId: "685481268255"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
