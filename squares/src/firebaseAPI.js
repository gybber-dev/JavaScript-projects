import * as firebase from 'firebase'

// just once:
console.log('Firebase init...')
const firebaseConfig = {
    apiKey: "AIzaSyDNcxa2F-H2BmjlcyN7qhj_YVk7POu0jZ4",
    authDomain: "squares-b2ca0.firebaseapp.com",
    databaseURL: "https://squares-b2ca0.firebaseio.com",
    projectId: "squares-b2ca0",
    storageBucket: "squares-b2ca0.appspot.com",
    messagingSenderId: "461200909073",
    appId: "1:461200909073:web:276734bd91fb62dd36e2b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class DatabaseAPI {
    constructor() {
        this.rootRef = firebase.database().ref()
    }
    write (data){
        console.log('Writing user to FB...', data)
        this.rootRef.child('games').set(data)
    }
    read () {
        console.log('Read data from FB...');
        this.rootRef.child('games').once('value').then(function(snapshot) {
            return snapshot.val()
          });
        // this.rootRef.child('games').once('value', snap => {
        //     console.log(snap.val())
        //   })
    }

    userInit (userName) {
        // from here: https://firebase.google.com/docs/firestore/solutions/presence
        if (!userName) return;
        var userStatusDatabaseRef = this.rootRef.child('users/'+userName);
        const isOfflineForDatabase = { state: false };
        
        const isOnlineForDatabase = { state: true };

        // Create a reference to the special '.info/connected' path in 
        // Realtime Database. This path returns `true` when connected
        // and `false` when disconnected.
        firebase.database().ref('.info/connected').on('value', function(snapshot) {
            // If we're not currently connected, don't do anything.
            if (snapshot.val() == false) {
                return;
            };

            // If we are currently connected, then use the 'onDisconnect()' 
            // method to add a set which will only trigger once this 
            // client has disconnected by closing the app, 
            // losing internet, or any other means.
            userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase)
            .then(function() {
                userStatusDatabaseRef.set(isOnlineForDatabase);
            });
        });
    }


}


export default new DatabaseAPI();
