
function SaveShortInfo()
{
    let elementList = shortinfContainer.children;
    //console.log(elementList)

    for (let i = 0; i < elementList.length; i++) {
        let elem = elementList[i];
        if (elem.className.includes("short-inf-container"))
        {
            let shortinfo = _GetShortInfoObject(elem);
            CVL_AddShortInfo(shortinfo);
        }
        if (elem.className.includes("inf-title-big"))
        {
            CVL_AddShortInfoTitle(elem.innerText);
        }
        if (elem.className.includes("seperation-line"))
        {
            CVL_AddSeperationLine_ShortInfo();
        }
    }
}

function SaveInfo()
{
    let elementList = infContainer.children;

    for (let i = 0; i < elementList.length; i++) {
        let elem = elementList[i];
        if (elem.className.includes("inf-container"))
        {
            let infoObject = _GetInfoObject(elem);
            CVL_AddInfo(infoObject);
        }
        if (elem.className.includes("inf-title-big"))
        {
            CVL_AddInfoTitle(elem.innerText);
        }
        if (elem.className.includes("seperation-line"))
        {
            CVL_AddSeperationLine_Info();
        }
    }
}

function SaveHeadline()
{
    let name = personName.innerText;
    CVL_SetPersonName(name);
    let oneliner = oneLiner.innerText;
    CVL_SetOneliner(oneliner);
}

function WriteAllToObject()
{
    CVL_Clear();
    SaveHeadline();
    SaveShortInfo();
    SaveInfo();
    SaveDocumentSettings();
    console.log("Wrote CV to Object:");
    CVL_DEBUG();
}


// --------------------
// Private
// --------------------

function SaveDocumentSettings()
{
    CVL_SaveMainColor(colorPicker.value);

    // I can't come up with a better way to do this.
    let patternSelectionParent = document.getElementById("pattern-circles-container");
    let total = patternSelectionParent.children.length-2; // -2 bc uploading stuff
    for (let i = total-1; i <= 0; i--) {
        if (patternSelectionParent.children[i].className.includes("selected-pattern-circle"))
        {
            CVL_SaveBackgroundIndex(i);
            break;
        }
    }
}


function _GetShortInfoObject(elem)
{
    let bulletpoints = [];
        
    // det her tager bare alle short inf lines
    let shortinflines = elem.getElementsByClassName("short-inf-line");

    for (let j = 0; j < shortinflines.length; j++) {
        let child = shortinflines[j];
        // find the icon
        let icontype = child.children[0].id;
        // find the text
        let text = child.children[1].innerText;

        bulletpoints.push({"icontype":icontype,"text":text});
    }
    return bulletpoints;
}

function _GetInfoObject(elem)
{
    let infoObj = {};
    
    let datetimeElem = elem.getElementsByClassName("inf-datetime")[0];
    if (datetimeElem != undefined)
        infoObj["datetime"] = datetimeElem.innerText;

    let locationElem = elem.getElementsByClassName("inf-location")[0];
    if (locationElem != undefined)
        infoObj["location"] = locationElem.innerText;

    let titleElem = elem.getElementsByClassName("inf-title")[0];
    if (titleElem != undefined)
        infoObj["title"] = titleElem.innerText;

    let textElem = elem.getElementsByClassName("inf-text")[0];
    if (textElem != undefined)
        infoObj["text"] = textElem.innerText;

    return infoObj;
}



