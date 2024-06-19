



// PRINT PAGE BUTTON
let printbuttonContainer =   document.createElement("a");
printbuttonContainer.className = "editing-container footspace pagewidth clickable";
printbuttonContainer.style.backgroundColor = "var(--shortinfo-color)";
printbuttonContainer.style.display = "block";
printbuttonContainer.onclick = () => {
    // scroll to top because the margin is relative to scroll position for some godforsaken reason
    window.scrollTo(0, 0);
    // then, print
    print();
};

let printdownloadButton = document.createElement("a");
printdownloadButton.id ="pi-cv-link";
printdownloadButton.innerText = "Click to view, print or download as .pdf"

printbuttonContainer.append(printdownloadButton);
editingContainer.append(printbuttonContainer);


// DOWNLOAD HTML PAGE

/*

let htmlbuttonContainer =   document.createElement("a");
htmlbuttonContainer.className = "editing-container footspace pagewidth clickable";
htmlbuttonContainer.style.backgroundColor = "var(--shortinfo-color)";
htmlbuttonContainer.style.display = "block";
htmlbuttonContainer.onclick = () => {
    
};

let htmldownloadButton = document.createElement("a");
htmldownloadButton.id ="pi-cv-link";
htmldownloadButton.innerText = "Click to download as html for your own website"

htmlbuttonContainer.append(htmldownloadButton);
editingContainer.append(htmlbuttonContainer);

*/