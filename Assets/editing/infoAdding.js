

// editingContainer


// Parent for the whole thing
let columnHolder = document.createElement("div");
columnHolder.className = "multi-item-container editing-container footspace";




// ------------------------------------------------------------------
// ------------------------------------------------------------------



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

let bulletPointIcon = document.createElement("img");
bulletPointIcon.src = "Assets/icon_checkmark.png";
bulletPointIcon.className = "bullet-point-showcase clickable replaceable-img";
bulletPointIcon.onclick = () => {
    bulletPointPicker.style.display = "flex";
}

shortBoxBulletPointHolder.append(bulletPointIcon);


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
















