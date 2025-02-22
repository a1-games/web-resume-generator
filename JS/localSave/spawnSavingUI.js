

function spawnSavingUIButton(text, parent, onclick)
{
    let buttonElem = document.createElement("div");
    buttonElem.className = "ol-box clickable ol-safe-button ol-m-a";
    buttonElem.innerText = text;

    buttonElem.onclick = onclick;

    parent.append(buttonElem);
    return buttonElem;
}


function spawnSaveAsJSON()
{
    let box = document.createElement("div");
    box.className = "ol-box";
    buttonOverlay.append(box);

    let title = document.createElement("div");
    title.innerText = "Filename";
    box.append(title);

    let inputField = document.createElement("textarea");
    inputField.className = "ol-textarea";
    inputField.value = currentCV_Title;
    inputField.onblur = () => {
        currentCV_Title = inputField.value;
    }
    box.append(inputField);

    spawnSavingUIButton("Save in browser", box, () => {
        WriteAllToObject();
        CVL_SaveToLocalStorage();
    });

    spawnSavingUIButton("Save as JSON", box, () => {
        WriteAllToObject();
        CVL_Download();
    });
    
}

function SavingUI_AddLocalStorageOption(key)
{
    let option = document.createElement("option");
    option.label = key;
    option.value = key;
    option.id = "cv-saving-"+key;
    let dropdown = document.getElementById("cv-saving-dropdown");
    if (dropdown != undefined)
        dropdown.append(option);
}

function spawnLocalStorageOptions()
{
    if (localStorage.length == 0) return;

    let box = document.createElement("div");
    box.className = "ol-box";
    buttonOverlay.append(box);

    let dropdown = document.createElement("select");
    dropdown.id = "cv-saving-dropdown";
    box.append(dropdown)

    for (var i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let item = localStorage.getItem(key);
        
        let option = document.createElement("option");
        option.label = key;
        option.value = key;
        option.id = "cv-saving-"+key;
        // this makes sure the last added option is selected internally
        selectedCV_Title = key;
        dropdown.append(option)
    }
    // spawn element "select"
    // add children "option"
    // for each localstorage key

    // Add an event listener for change event
    dropdown.addEventListener("change", function () {
        selectedCV_Title = dropdown.value;
    });

    spawnSavingUIButton("Load selected", box, () => {
        // load it with the object being made from the key that is option.value
        LoadResumeFromLocalStorage(dropdown.value)
    });

    let deleteButton = spawnSavingUIButton("Delete selected", box, () => {
        CVL_DeleteItemFromLocalStorage(dropdown.value);
    });
    deleteButton.classList.add("ol-danger-button");
}


function spawnSavingUI()
{

    spawnLocalStorageOptions();

    //let uploadJSONButton = spawnSavingUIButton("Upload JSON", buttonOverlay, () => {
    //});
    //uploadJSONButton.classList.remove("ol-m-a");

    spawnSaveAsJSON();
    
}


spawnSavingUI();





















