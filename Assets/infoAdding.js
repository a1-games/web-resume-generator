

// editingContainer


// Parent for the whole thing
let columnHolder = document.createElement("div");
columnHolder.className = "multi-item-container editing-container footspace";




// ------------------------------------------------------------------
// ------------------------------------------------------------------


// FUNCTIONS
function MultiContainer()
{
    let multicon = document.createElement("div");
    multicon.className = "multi-item-container footspace";
    return multicon;
}

function TextObject(_className, _innerText, _invert)
{
    let textobj = document.createElement("div");
    textobj.className = _className;
    textobj.innerText = _innerText;
    textobj.style.filter = _invert ? "invert(1)" : "";
    return textobj;
}

function InputField(_className, _defValue, _invert)
{
    let inputfield = document.createElement("input");
    inputfield.type = "text";
    inputfield.className = _className;
    inputfield.value = _defValue;
    inputfield.style.filter = _invert ? "invert(1)" : "";
    inputfield.onfocus = () => {
        inputfield.value = "";
    };
    return inputfield;
}









// ------------------------------------------------------------------
// ------------------------------------------------------------------



// SHORT INFO
let shortBox = document.createElement("div");
shortBox.className = "editing-container";
shortBox.id = "shortinfo-adder";
shortBox.style.flexGrow = 1;

let shortBoxTitle = TextObject("editing-title", "Bullet Points", true)
shortBox.append(shortBoxTitle);

// TITLE
let shortBoxTitleAdderHolder = MultiContainer();
shortBox.append(shortBoxTitleAdderHolder);


// Input Field
let shortBoxTitleAdder = InputField("titleAdderInput", "Section Title", true)
shortBoxTitleAdderHolder.append(shortBoxTitleAdder);


// Adding Button
let shortBoxTitleAdderButton = TextObject("infoAddButton", "Add Title", true)
shortBoxTitleAdderButton.onclick = () => {
    insertInformationTitle(shortBoxTitleAdder.value, shortinfContainer);
};
shortBoxTitleAdderHolder.append(shortBoxTitleAdderButton);



// SEPERATION LINE
let shortBoxSepLineHolder = MultiContainer();

// Adding Button
let shortBoxSeperationLineAdder = TextObject("infoAddButton", "Add seperation line", true)
shortBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(shortinfContainer);
};
shortBoxSepLineHolder.append(shortBoxSeperationLineAdder);


// input field with button and image icon picker
// add bullet point




shortBox.append(shortBoxSepLineHolder);
columnHolder.append(shortBox);
// ------------------------------------------------------------------
// ------------------------------------------------------------------


// LONG INFO
let infBox = document.createElement("div");
infBox.className = "editing-container";
infBox.id = "information-adder";
infBox.style.flexGrow = 1;

let infBoxTitle = TextObject("editing-title", "Information", false)


// SEPERATION LINE
let infBoxSeperationLineAdder = TextObject("infoAddButton", "Add seperation line", false)
infBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(infContainer);
};

infBox.append(infBoxTitle);
infBox.append(infBoxSeperationLineAdder);
columnHolder.append(infBox);





editingContainer.append(columnHolder);














