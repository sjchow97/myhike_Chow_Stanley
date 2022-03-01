function read_display_Quote() {
    //console.log("inside the function")

    //get into the right collection
    db.collection("quotes").doc("Tuesday")
        .onSnapshot(TuesdayDoc => {
            console.log(TuesdayDoc.data());
            document.getElementById("quote-goes-here").innerHTML = TuesdayDoc.data().quote
        })
}
read_display_Quote();

function insertName() {
    // to check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // lets me know who is the user that logged in to et the UID
            currentUser = db.collection("users").doc(user.uid); // will go to firestore and go to the document of the user
            currentUser.get().then(userDoc => {
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                document.getElementById("name-goes-here").innerText = user_Name; // using javascript
            })
        }
    })

}
insertName();