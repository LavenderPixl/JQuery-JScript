var ButtonAddedCounter = 0;
var CurrentButton;

var txtButtonContext = $("#txtButtonContext");
var ButtonAddedClass = $(".ButtonsAdded");

$("#btnAddNewButton").on('click', function () {
    var div = $("<div id='div"+ ButtonAddedCounter +"'></div>");
    var Button = $("<input type='button' id='btnDynamic" + (++ButtonAddedCounter).toString() + "' value = 'btnDynamic" + ButtonAddedCounter + "' /> ");
    var edit = $("<input type='button' id='btnEdit' value = 'Edit' /> ");
    var del = $("<input type='button' class='btnDelete' value = 'Delete' /> ");
    div.append(Button);
    div.append(edit);
    div.append(del);
    ButtonAddedClass.append(div);
    ButtonAddedClass.append("<br />");
});


// ButtonAddedClass.delegate("input", "click", function () {
//     CurrentButton = $(this);
//     var TextToTextField = $(this).val();
//     txtButtonContext.val(TextToTextField);
//     txtButtonContext.width(CalculateWidthOnControl(txtButtonContext));
// });


txtButtonContext.on('input', function () {
    CurrentButton.val($(this).val());
    txtButtonContext.width(CalculateWidthOnControl(txtButtonContext));
});

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.val().length;
    return (ControlWidth * 9 + 25);
}

function deleteButton() {
    console.log("eeee");
}

$('.btnDelete').live('click', function ()
{
    $('input').remove('.btnDelete');

    // $(this).parent().remove();
    // console.log("fff");
});