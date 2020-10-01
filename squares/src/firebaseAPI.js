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
        this.rootRef = firebase.database().ref();
        this.result = undefined;
    }
    setRoom (data){
        const context = this;
        console.log('Writing user to FB...', data);
        this.rootRef.child('rooms').once('value').then(snap=>{
            let counter = snap.val()? Object.keys(snap.val()).length:0;
            data = {
                ...snap.val(),
                [`room${counter+1}`]: data
            }
            console.log(data)
            return data
        }).then(
            (data)=>{
                console.log('here', data)
                context.rootRef.child('rooms').set(data)
            }
        )
        // this.rootRef.child('rooms').add(data)
    }
    // returns Promise
    getRooms () {
        console.log('Read data from FB...');
        return this.rootRef.child('rooms').once('value').then(function(snapshot) {
                let result = snapshot.val();
                console.log('result', result)
                return result
            })
        }


    readAsync () {
        let af = async ()=>{
            let result = 'test'
            console.log('result1', result)
            return result 
        }
        return af()
        // this.rootRef.child('games').once('value', snap => {
        //     console.log(snap.val())
        //   })
    }

    setUser (userName) {
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

    getRooms2(){
        console.log ('final', this.readAsync())
        
    }

    getRooms1(){

        setTimeout(()=>{
            let result = 'boom'
            console.log(result)
        }, 2000)


        // const roomPattern = {
        //     name: 'defaultRoom',
        //     users: ['player1', 'player2'],
        //     status: false
        // }
        // this.write({room0: roomPattern})
    }


}


export default new DatabaseAPI();
