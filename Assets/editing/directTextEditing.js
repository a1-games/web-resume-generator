

let selectedEditableText = null;


let de_InputField = document.createElement("textarea");
de_InputField.id = "direct-editing-inputfield";
de_InputField.onblur = () => {
    body.append(de_InputField);
    selectedEditableText.innerText = de_InputField.value;
    selectedEditableText.classList.remove("selected-editable");
    // replace the removal button if not header
    if (selectedEditableText.className.includes("inf-font") && !selectedEditableText.className.includes("short-inf"))
    {
        createRemovalButtonCenteredVerticalOnly(selectedEditableText, selectedEditableText, "0.7em")
    }
    selectedEditableText = null;
    de_InputField.style.display = "none";
}
document.body.append(de_InputField);
de_InputField.style.display = "none";

function SelectTextToEdit(element)
{
    selectedEditableText = element;

    selectedEditableText.classList.add("selected-editable");
    selectedEditableText.append(de_InputField);
    
    de_InputField.style.display = "block";
    de_InputField.value = element.innerText;
    de_InputField.style.fontSize = element.style.fontSize;
    de_InputField.style.fontFamily = element.style.fontFamily;

    de_InputField.select();
}



addEventListener("click", (e) => {
    if (e.target.className.includes("editable-text"))
    {
        SelectTextToEdit(e.target);
    }
});



































