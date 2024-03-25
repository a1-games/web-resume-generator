

// editingContainer

let columnHolder = document.createElement("div");
columnHolder.className = "multi-item-container editing-container footspace";


// SHORT INFO
let shortBox = document.createElement("div");
shortBox.className = "editing-container";
shortBox.id = "shortinfo-adder";
shortBox.style.flexGrow = 1;

let shortBoxTitle = document.createElement("div");
shortBoxTitle.className = "editing-title";
shortBoxTitle.innerText = "Bullet Points";
shortBoxTitle.style.filter = "invert(1)";

let shortBoxSeperationLineAdder = document.createElement("div");
shortBoxSeperationLineAdder.className = "sepLineAdder";
shortBoxSeperationLineAdder.innerText = "Add seperation line";
shortBoxSeperationLineAdder.style.filter = "invert(1)";
shortBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(shortinfContainer);
};

shortBox.append(shortBoxTitle);
shortBox.append(shortBoxSeperationLineAdder);
columnHolder.append(shortBox);






// LONG INFO
let infBox = document.createElement("div");
infBox.className = "editing-container";
infBox.id = "information-adder";
infBox.style.flexGrow = 1;

let infBoxTitle = document.createElement("div");
infBoxTitle.className = "editing-title";
infBoxTitle.innerText = "Information";

let infBoxSeperationLineAdder = document.createElement("div");
infBoxSeperationLineAdder.className = "sepLineAdder";
infBoxSeperationLineAdder.innerText = "Add seperation line";
infBoxSeperationLineAdder.onclick = () => {
    insertSeperationLine(infContainer);
};

infBox.append(infBoxTitle);
infBox.append(infBoxSeperationLineAdder);
columnHolder.append(infBox);





editingContainer.append(columnHolder);














