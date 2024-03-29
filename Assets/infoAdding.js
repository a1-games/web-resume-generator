

// editingContainer


// Parent for the whole thing
let columnHolder = document.createElement("div");
columnHolder.className = "multi-item-container editing-container footspace";




// ------------------------------------------------------------------
// ------------------------------------------------------------------


// FUNCTIONS
function MultiContainer(_footspace = true)
{
    let multicon = document.createElement("div");
    multicon.className = `multi-item-container ${_footspace ? "footspace" : ""}`;
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

function insertBulletPoint(_parent)
{

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
let shortBoxTitleAdder = InputField("titleAdderInput inputField dark-trans", "Section Title", false)
shortBoxTitleAdderHolder.append(shortBoxTitleAdder);


// Adding Button
let shortBoxTitleAdderButton = TextObject("infoAddButton dark-trans clickable", "Add Title", false)
shortBoxTitleAdderButton.onclick = () => {
    insertInformationTitle(shortBoxTitleAdder.value, shortinfContainer);
};
shortBoxTitleAdderHolder.append(shortBoxTitleAdderButton);



// SEPERATION LINE
let shortBoxSepLineHolder = MultiContainer();

// Adding Button
let shortBoxSeperationLineAdder = TextObject("infoAddButton dark-trans clickable", "Add seperation line", false)
shortBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(shortinfContainer);
};
shortBoxSepLineHolder.append(shortBoxSeperationLineAdder);

shortBox.append(shortBoxSepLineHolder);







let shortBoxBulletPointShowcase = document.createElement("div");
shortBox.append(shortBoxBulletPointShowcase);
let shortBoxBulletPointHolder = MultiContainer();
// input field with button and image icon picker


// icon selection
let icons = [
    "checkmark",
    "address",
    "location",
    "website",
    "globe",
    "phone",
    "phone_touch",
    "email",
    "mail",
]
let chosenBulletPoint = icons[0];

let bulletPointIcon = document.createElement("img");
bulletPointIcon.src = "Assets/icon_checkmark.png";
bulletPointIcon.className = "bullet-point-showcase clickable";
bulletPointIcon.onclick = () => {
    bulletPointPicker.style.display = "flex";
}


shortBoxBulletPointHolder.append(bulletPointIcon);

let bulletPointPicker = MultiContainer();
bulletPointPicker.id = "bullet-point-icon-picker";
bulletPointPicker.style.display = "none";

for (let i = 0; i < icons.length; i++) {
    let newIcon = document.createElement("img");
    newIcon.src = `Assets/icon_${icons[i]}.png`
    newIcon.className = "bullet-point-showcase clickable";
    newIcon.onclick = () => {
        bulletPointIcon.src = newIcon.src;
        chosenBulletPoint = icons[i];
        bulletPointPicker.style.display = "none";
    }
    bulletPointPicker.append(newIcon);
}


shortBoxBulletPointHolder.append(bulletPointPicker);

// text input field
let shortBoxBulletPointInput = InputField("bulletPointAdderInput inputField dark-trans", "Bullet Point", false);
shortBoxBulletPointHolder.append(shortBoxBulletPointInput);

// adding button
let shortBoxBulletPointAdder = TextObject("infoAddButton dark-trans clickable", "Add bullet point", false)
shortBoxBulletPointAdder.onclick = () => {
    addLineToShortinfoArray(chosenBulletPoint, shortBoxBulletPointInput.value, true);
    appendShortInfoToParent(shortBoxBulletPointShowcase, {iconname:chosenBulletPoint, text:shortBoxBulletPointInput.value, invert:true});
};
shortBoxBulletPointHolder.append(shortBoxBulletPointAdder);

shortBox.append(shortBoxBulletPointHolder);





// submit button
let shortBoxSubmitButtonHolder = MultiContainer();
let shortBoxBulletPointSubmitter = TextObject("infoAddButton dark-trans clickable", "Submit category", false)
shortBoxBulletPointSubmitter.onclick = () => {
    appendShortInfo();
    shortBoxBulletPointShowcase.innerHTML = "";
};

shortBoxSubmitButtonHolder.append(shortBoxBulletPointSubmitter);

shortBox.append(shortBoxSubmitButtonHolder);



columnHolder.append(shortBox);

// ------------------------------------------------------------------
// ------------------------------------------------------------------


// LONG INFO
let infBox = document.createElement("div");
infBox.className = "editing-container";
infBox.id = "information-adder";
infBox.style.flexGrow = 1;

let infBoxTitle = TextObject("editing-title", "Information", false)
infBox.append(infBoxTitle);



// TITLE
let infBoxTitleAdderHolder = MultiContainer();
infBox.append(infBoxTitleAdderHolder);


// Input Field
let infBoxTitleAdder = InputField("titleAdderInput inputField light-trans", "Section Title", true)
infBoxTitleAdderHolder.append(infBoxTitleAdder);


// Adding Button
let infBoxTitleAdderButton = TextObject("infoAddButton light-trans clickable", "Add Title", true)
infBoxTitleAdderButton.onclick = () => {
    insertInformationTitle(infBoxTitleAdder.value, infContainer);
};
infBoxTitleAdderHolder.append(infBoxTitleAdderButton);


// SEPERATION LINE
let infBoxSepLineHolder = MultiContainer();

// Adding Button
let infBoxSeperationLineAdder = TextObject("infoAddButton light-trans clickable", "Add seperation line", true)
infBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(infContainer);
};
infBoxSepLineHolder.append(infBoxSeperationLineAdder);
infBox.append(infBoxSepLineHolder);




columnHolder.append(infBox);
editingContainer.append(columnHolder);
















