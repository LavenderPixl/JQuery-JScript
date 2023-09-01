var ButtonCounter = 0;
var TextBoxElement;
var DocumentButton;


function SetupDOMElements() {
    TextBoxElement = document.getElementById("txtButtonContext");
}
function AddBaseButton()
{
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', "btn" + ButtonCounter.toString());
    button.setAttribute('value', "btnShow" + ButtonCounter.toString());
    button.setAttribute('onclick', "AddedButtonClicked(" + ButtonCounter + ")");
    button.style.backgroundColor = "Blue";
    button.style.color = "White";
    button.style.height = "40px";
    return button;
}
function AddExtraButtons(text, clickFunc)
{
    var btn = document.createElement('input');
    btn.setAttribute('value', text);
    btn.setAttribute('onclick', clickFunc);
    btn.setAttribute('type', 'button');
    return btn;
}

function AddNewButton() {
    var div = document.createElement('div');
    div.setAttribute('ID', "btn"+ButtonCounter.toString());
    document.getElementsByClassName("ButtonsAdded")[0].appendChild(div);
    
    var button = AddBaseButton();
    var delButton = AddExtraButtons("Delete", "DeleteButton("+ div.getAttribute("ID")+")");
    var editButton = AddExtraButtons("Edit", "EditButton("+div.getAttribute("ID")+")");
    // TextBoxElement.style.visibility = "hidden";
    
    div.appendChild(button);
    div.appendChild(delButton);
    div.appendChild(editButton);

    ButtonCounter++;
}

function DeleteButton(div) 
{
    div.remove()
    // document.getElementsByClassName("ButtonsAdded")[e.remove()]
    // e.parentElement.remove()
}
function EditButton(div)
{
    TextBoxElement.style.visibility = "visible";
    var btn = div.querySelector("#"+div.id+"");
    AddedButtonClicked(btn);

}

function AddedButtonClicked(btn) {
    DocumentButton = btn;
    TextBoxElement.value = DocumentButton.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    console.log(TextBoxElement.style.width);
}

function TextboxValueChanged() {
    DocumentButton.value = TextBoxElement.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    console.log(TextBoxElement.style.width);
}

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.value.length;
    console.log(ControlWidth);
    return (ControlWidth * 9 + 25 + 'px');
}