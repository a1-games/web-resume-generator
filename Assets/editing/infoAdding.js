

// editingContainer


// Parent for the whole thing
let columnHolder = document.createElement("div");
columnHolder.className = "multi-item-container editing-container footspace pagewidth";




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

let shortBoxTitle = TextObject("editing-title footspace", "Bullet Points", true)
shortBox.append(shortBoxTitle);

// TITLE
let shortBoxTitleAdderHolder = MultiContainer("footspace");
shortBox.append(shortBoxTitleAdderHolder);


// Adding Button
let shortBoxTitleAdderButton = TextObject("infoAddButton dark-trans clickable titleFont", "Add Title", false)
shortBoxTitleAdderButton.onclick = () => {
    insertInformationTitle(shortBoxTitleAdder.value, shortinfContainer);
};
shortBoxTitleAdderHolder.append(shortBoxTitleAdderButton);



// SEPERATION LINE
let shortBoxSepLineHolder = MultiContainer("footspace");
shortBoxSepLineHolder.style.width = "fit-content";
shortBox.append(shortBoxSepLineHolder);


// Adding Button
let shortBoxSeperationLineAdder = TextObject("infoAddButton dark-trans clickable", "Add seperation line", false)
shortBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(shortinfContainer);
};
shortBoxSepLineHolder.append(shortBoxSeperationLineAdder);






// BULLET POINT ADDER

let shortBoxBulletPointShowcase = document.createElement("div");
shortBox.append(shortBoxBulletPointShowcase);
let shortBoxBulletPointHolder = MultiContainer("footspace");
// input field with button and image icon picker

// adding button
let shortBoxBulletPointAdder = TextObject("infoAddButton dark-trans clickable", "Add bullet point holder", false)
shortBoxBulletPointAdder.onclick = () => {
    appendShortInfo();
    //addLineToShortinfoArray(selectedBulletPointName, "Bullet Point", true);
    //appendShortInfoToParent(shortBoxBulletPointShowcase, {iconname:selectedBulletPointName, text:"Bullet Point", invert:true});
};
shortBoxBulletPointHolder.append(shortBoxBulletPointAdder);

shortBox.append(shortBoxBulletPointHolder);




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
















