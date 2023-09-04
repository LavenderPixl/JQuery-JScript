var ButtonAddedCounter = 0;
var CurrentButton;
var CurrentButtonEdit;
var txtButtonContext = $("#txtButtonContext"); //Text on the buttons.
var ButtonAddedClass = $(".ButtonsAdded");

$("#btnAddNewButton").on('click', function () {
    var div = $("<div id= 'div"+(++ButtonAddedCounter)+"'></div>");
    var button = $("<input type = 'button' id = 'btnDynamic" + ButtonAddedCounter.toString() + "' value = 'btnDynamic" + ButtonAddedCounter + "' />");
    var edit = $("<input type = 'button' id = 'btnEdit' class = 'div"+(ButtonAddedCounter)+"' value = 'Edit' />");
    var del = $("<input type = 'button' id = 'btnDelete' value = 'Delete' />");
    div.append(button);
    div.append(edit);
    div.append(del);
    ButtonAddedClass.append(div);
    console.log("Buttons added");
    console.log(div);
})

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.val().length;
    return (ControlWidth * 9 + 25);
}

$(document).on("click", "#btnDelete" , function () {
    console.log("Deleted");
    $(this).closest("div").remove();
})

$(document).on("click", "#btnEdit", function(){
    console.log("Edit pressed");
    var d = $(this).prev();
    CurrentButtonEdit = d;
    $("#txtButtonContext").val(d.val());
    console.log(d.val())
});

$("#txtButtonContext").on("keyup", function() {
    CurrentButtonEdit.val($("#txtButtonContext").val());
    $("#txtButtonContext").width(CalculateWidthOnControl($("#txtButtonContext")));
});