



var selectedCV_Title = "";
var currentCV_Title = "Resume";

var currentCV = {};


function CVL_DEBUG()
{
    console.log(currentCV);
}

function CVL_Clear()
{
    currentCV = {
        "name":undefined,
        "oneliner":undefined,
        "shortinfo":[],
        "info":[],
        "color":undefined,
        "background":undefined,
        "remsize":undefined,
        "shortinf":undefined,
        "infsize":undefined,
    };
}
CVL_Clear();

function _CanSave()
{
    if (currentCV_Title == "")
    {
        spawnNotification(false, "Couldn't save. Choose a file name.");
        return false;
    }
    return true;
}

function CVL_SaveToLocalStorage()
{
    if (!_CanSave()) return;
    let json = JSON.stringify(currentCV);
    localStorage.setItem(currentCV_Title, json);
    spawnNotification(true, "Saved resume in browser.");
    SavingUI_AddLocalStorageOption(currentCV_Title);
}

function CVL_Download()
{
    if (!_CanSave()) return;
    let json = JSON.stringify(currentCV);

    let blob = new Blob([json], { type: "application/json" });


    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${currentCV_Title}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    spawnNotification(true, "Download started.");
}

function CVL_DeleteItemFromLocalStorage(key)
{
    if (localStorage.getItem(key) != null)
    {
        localStorage.removeItem(key);
        spawnNotification(true, `\"${key}\" was deleted.`);
        document.getElementById("cv-saving-"+key).remove();
        return;
    }
    
    spawnNotification(false, `\"${key}\" was not found.`);
}


// --------------------
// Document Settings
// --------------------
function CVL_SaveMainColor(color)
{
    currentCV["color"] = color;
}

function CVL_SaveBackgroundIndex(index)
{
    currentCV["background"] = index;
}

function CVL_SaveFontSize_Root(size)
{
    currentCV["remsize"] = size;
}

function CVL_SaveFontSize_ShortInfo(size)
{
    currentCV["shortinf"] = size;
}

function CVL_SaveFontSize_Info(size)
{
    currentCV["infsize"] = size;
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



















