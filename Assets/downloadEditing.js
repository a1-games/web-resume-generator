



// PRINT PAGE BUTTON
let buttonContainer =   document.createElement("a");
buttonContainer.className = "editing-container footspace";
buttonContainer.style.backgroundColor = "var(--shortinfo-color)";
buttonContainer.style.cursor = "pointer";
buttonContainer.style.display = "block";
buttonContainer.onclick = () => {
    print();
};

let downloadButton = document.createElement("a");
downloadButton.id ="pi-cv-link";
downloadButton.style.cursor = "pointer";
downloadButton.innerText = "Click to view or download as .pdf"

buttonContainer.append(downloadButton);
editingContainer.append(buttonContainer);


