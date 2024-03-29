



// PRINT PAGE BUTTON
let buttonContainer =   document.createElement("a");
buttonContainer.className = "editing-container footspace clickable";
buttonContainer.style.backgroundColor = "var(--shortinfo-color)";
buttonContainer.style.display = "block";
buttonContainer.onclick = () => {
    print();
};

let downloadButton = document.createElement("a");
downloadButton.id ="pi-cv-link";
downloadButton.innerText = "Click to view or download as .pdf"

buttonContainer.append(downloadButton);
editingContainer.append(buttonContainer);


