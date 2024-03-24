



// PRINT PAGE BUTTON
let downloadButton =  document.createElement("a");
downloadButton.id ="pi-cv-link";
downloadButton.style.cursor = "pointer";
downloadButton.innerText = "Click to view or download as .pdf"
downloadButton.onclick = () => {
    print();
};
editingContainer.append(downloadButton);


