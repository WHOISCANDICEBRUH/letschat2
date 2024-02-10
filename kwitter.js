var firebaseConfig = {
    apiKey: "AIzaSyDt2xb-p8WfX8ba1ZpwqGHZrTxBwsGY2lo",
    authDomain: "letschat-d2e60.firebaseapp.com",
    databaseURL: "https://letschat-d2e60-default-rtdb.firebaseio.com",
    projectId: "letschat-d2e60",
    storageBucket: "letschat-d2e60.appspot.com",
    messagingSenderId: "452371193670",
    appId: "1:452371193670:web:1187e2f470d294fe26cf47",
    measurementId: "G-KM3WF1SNSH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}

