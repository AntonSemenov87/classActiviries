var button = $("<button>").addClass("btn btn-success");

//add button to DOM
$("#lou-buttons".append(button);

$(document).on("click", ".btn-success", function () {
    //remove a class
    $(this).removeClass("btn-success");
    //add a new class
    $(this).addClass("btn-warning");
});