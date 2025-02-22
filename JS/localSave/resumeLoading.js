



function LoadResumeFromLocalStorage(resumeName)
{
    if (localStorage.getItem(selectedCV_Title) == null)
    {
        spawnNotification(false, `\"${resumeName}\" not found.`);
        return;
    }
    let objstring = localStorage.getItem(resumeName);
    //console.log(objstring)
    var obj = JSON.parse(objstring);

    LoadResume(obj);

    spawnNotification(true, `\"${resumeName}\" loaded.`);
}

function LoadResume(resumeObject)
{
    _ClearResume();
 
    // grab name and set it
    setHeadlineName(resumeObject["name"]);

    // same for oneliner
    setOnelinerText(resumeObject["oneliner"]);

    // shortinfo
    let shortinfolist = resumeObject["shortinfo"];

    for (let i = 0; i < shortinfolist.length; i++) {
        let thing = shortinfolist[i];
        // bullet points
        if (thing["shortinfo_container"] != undefined)
        {
            let array = thing["shortinfo_container"];
            for (let i = 0; i < array.length; i++) {
                addLineToShortinfoArray(array[i]["icontype"], array[i]["text"], !array[i]["icontype"].includes("flag"));
            }
            appendShortInfo();
        }
        // seperation line
        if (thing == "seperationline")
            insertSeperationLine(shortinfContainer);
        // title
        if (thing["shortinfotitle"] != undefined)
        {
            insertInformationTitle(thing["shortinfotitle"], shortinfContainer);
        }
    }


    // info
    let infolist = resumeObject["info"];

    for (let i = 0; i < infolist.length; i++) {
        let thing = infolist[i];
        // information
        if (thing["info"] != undefined)
        {
            let infoobj = thing["info"];
            insertInformation(infoobj["datetime"],
                            infoobj["location"],
                            infoobj["title"],
                            infoobj["text"]);
            
        }
        // seperation line
        if (thing == "seperationline")
            insertSeperationLine(infContainer);
        // title
        if (thing["infotitle"] != undefined)
        {
            insertInformationTitle(thing["infotitle"], infContainer);
        }
    }


    // pattern and color
    let patternIndex = resumeObject["background"];
    //console.log(patObj);
    if (patternIndex != undefined)
    {
        let patObj = patternDataObjs[patternIndex];
        selectPattern(patObj.element, `url('../IMG/${patObj.filename}')`);
    }
    
    let color = resumeObject["color"];
    if (color != undefined)
    {
        colorPicker.value = color;
        colorPicker.dispatchEvent(new Event("input"));
    }
}


function _ClearResume()
{
    let count = infContainer.children.length;
    for (let i = 0; i < count; i++) {
        infContainer.children[0].remove();
    }
    count = shortinfContainer.children.length;
    for (let i = 0; i < count; i++) {
        shortinfContainer.children[0].remove();
    }

}


























