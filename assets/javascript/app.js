// ================
// ASSIGNMENT INSTRUCTIONS
// ================
   
   // * Only two users can play at the same time.

    // * Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
  
    // * The game will track each player's wins and losses.
  
    // * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.
  
    // * Styling and theme are completely up to you. Get Creative!
  
    // * Deploy your assignment to Github Pages.

// ================
// FIREBASE
// ================

var config = {
    apiKey: "AIzaSyD92XpkWmDFDAptaMNxaxkmLtBt88OwJeQ",
    authDomain: "rps-multiplayer-4380b.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-4380b.firebaseio.com",
    projectId: "rps-multiplayer-4380b",
    storageBucket: "rps-multiplayer-4380b.appspot.com",
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();

  var players = database.ref("/players");
  var chat = database.ref("/chat");

//   database.ref().set({
//   })

// ================
// RPS GAME 
// ================

$(document).ready(function(){

    // Global Variables
    var playerName
    var player1Enter = false;
    var player2Enter = false;
    var playerScores = {
        name: "",
        choice: "",
        wins: 0,
        losses: 0,
    },
        resetId;


    // User types in name
    var playeroneName = document.getElementById("username").value;

    
    // Fetch names from Firebase


});
