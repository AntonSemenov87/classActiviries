/*var database = firebase.database(); // creating connection with database
console.log(database);

database.ref().on("value", function (snapshot) { //retrieving data from database
    console.log(snapshot.val());
});

//set the data
//ref means where to 
//database.ref("songs/").set({
//  "favsong": "Everlong"

//});

// create a folder called bio
// SET data: name, age

$("#saveButton").on("click", function () {
    //get value of inputs
    var name = $("#nameInput").val();
    var age = $("#ageInput").val();
    //put in database
    darabase.ref("bio/").set({
        name: name,
        age: age
    })
})

//database.ref("bio/").set({
 //   "name": "Anton",
   // "age": "100"
//})






//}); */

var database = firebase.database();

console.log(database);



/*database.ref("songs/favsong").on("value", function (snapsho){
    console.log(snapshot.val());
})
*/

database.ref("bio/").on("value", function (snapshot) {
    console.log(snapshot.val());
    var data = snapshot.val().bio;
    console.log(data);
    $("#name").text("Name: " + data.name);
    $("#age").text("Age: " + data.age);

    for (key in data) {
        console.log('This is ')
    }
});

database.ref("songs/").set({
    favsong: "Everlong"
});

// using JavaScript create a folder called bio
// SET the following data:
// name, age
$("#saveButton").on("click", function () {
    // get value of the inputs
    var name = $("#nameInput").val();
    var age = $("#ageInput").val();

    database.ref("bio/").set({
        name: name,
        age: age
    });




});