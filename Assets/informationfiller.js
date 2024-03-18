
const infContainer = document.getElementById("inf-container");
const profileInfContainer = document.getElementById("profile-inf-aligner");

function insertInformationTitle(title, container)
{
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title-big ";
    _title.innerText = title;

    container.append(_title);
}

function insertSeperationLine(container)
{
    let _line = document.createElement("div");
    _line.className = "seperation-line";
    container.append(_line);
}

function insertInformation(datetime, location, title, text)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container information-container";

    // timedate
    let _time = document.createElement("div");
    _time.className = "inf-font inf-datetime ";
    _time.innerText = datetime;

    // location
    let _location = document.createElement("div");
    _location.className = "inf-font inf-location ";
    _location.innerText = location;
    
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title ";
    _title.innerText = title;

    // description text
    let _text = document.createElement("div");
    _text.className = "inf-font inf-text ";
    _text.innerText = text;

    
    newContainer.append(_time);
    newContainer.append(_location);
    newContainer.append(_title);
    newContainer.append(_text);
    
    infContainer.append(newContainer);
}

function insertText(text, container)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container information-container";

    // description text
    let _text = document.createElement("div");
    _text.className = "inf-font inf-text ";
    _text.innerText = text;
    newContainer.append(_text);
    
    container.append(newContainer);
}



