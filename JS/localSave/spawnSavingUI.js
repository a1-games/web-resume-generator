

function spawnSavingUIButton(text, parent, onclick)
{
    let buttonElem = document.createElement("div");
    buttonElem.className = "ol-box clickable";
    buttonElem.innerText = text;

    buttonElem.onclick = onclick;

    parent.append(buttonElem);
}


function spawnSaveAsJSON()
{
    let box = document.createElement("div");
    box.className = "ol-box";

    let title = document.createElement("div");
    title.innerText = "Filename";
    box.append(title);

    let inputField = document.createElement("textarea");
    inputField.className = "ol-textarea";
    inputField.onblur = () => {
        if (inputField.value != "")
            currentCV_Title = inputField.value;
        else
            currentCV_Title = "Resume";
    }
    box.append(inputField);

    spawnSavingUIButton("Save in browser", box, () => {
        ForceSaveAll();
        CVL_SaveToLocalStorage();
    });

    spawnSavingUIButton("Save as JSON", box, () => {
        ForceSaveAll();
        CVL_Download();
    });
    
    

    buttonOverlay.append(box);
}


function spawnLocalStorageOptions()
{
    // spawn element "select"
    // add children "option"
    // for each localstorage key

    // Add an event listener for change event
    dropdown.addEventListener("change", function () {
        selectedValue.textContent = "You selected: " + dropdown.value;
    });
}


function spawnSavingUI()
{


    spawnSavingUIButton("Upload JSON", () => {
        
    });
    

    spawnSaveAsJSON();
    
}


spawnSavingUI();





















