var firebaseConfig = {
    apiKey: "AIzaSyDpV2ylPYTqrfTLaRlrT9-_t_mNvWOIE9s",
    authDomain: "kwitter-a7e0d.firebaseapp.com",
    databaseURL: "https://kwitter-a7e0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-a7e0d",
    storageBucket: "kwitter-a7e0d.appspot.com",
    messagingSenderId: "211711766361",
    appId: "1:211711766361:web:29366f4a143fadfca26648"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
         purpose: "Adding Room Name"
   });

   localStorage.setItem("room_name",room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
   console.log("room_name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}