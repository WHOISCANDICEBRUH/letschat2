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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !!!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html"
      
}