



var currentCV_Title = "Resume";

var currentCV = {
    "name":"",
    "oneliner":"",
    "shortinfo":[],
    "info":[],
}


function CVL_DEBUG()
{
    console.log(currentCV);
}

function CVL_Clear()
{
    currentCV = {
        "name":"",
        "oneliner":"",
        "shortinfo":[],
        "info":[],
    };
}

function CVL_SaveToLocalStorage()
{
    localStorage.setItem(currentCV_Title, currentCV);
}

function CVL_Download()
{
    let json = JSON.stringify(currentCV);

    let blob = new Blob([json], { type: "application/json" });


    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${currentCV_Title}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



// --------------------
// Headline
// --------------------
function CVL_SetPersonName(text)
{
    currentCV["name"] = text;
}
function CVL_SetOneliner(text)
{
    currentCV["oneliner"] = text;
}

// --------------------
// Short Info
// --------------------
function CVL_AddShortInfoTitle(text)
{
    currentCV["shortinfo"].push({"shortinfotitle":text});
}
function CVL_AddSeperationLine_ShortInfo()
{
    currentCV["shortinfo"].push("seperationline");
}
function CVL_AddShortInfo(shortInfoObj)
{
    currentCV["shortinfo"].push({"shortinfo_container":shortInfoObj});
}

// --------------------
// Info
// --------------------
function CVL_AddInfoTitle(text)
{
    currentCV["info"].push({"infotitle":text});
}
function CVL_AddSeperationLine_Info()
{
    currentCV["info"].push("seperationline");
}
function CVL_AddInfo(infoObj)
{
    currentCV["info"].push({"info":infoObj});
}



















