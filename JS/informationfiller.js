

function insertInformationTitle(title, container)
{
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title-big editable-text";
    _title.innerText = title;

    createRemovalButtonCenteredVerticalOnly(_title, _title)
    container.append(_title);
}

function insertSeperationLine(container)
{
    let _line = document.createElement("div");
    _line.className = "seperation-line";
    container.append(_line);
    createRemovalButtonCentered(_line, _line)
}

function insertInformation(datetime, location, title, text)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container information-container";

    // timedate
    if (datetime != undefined)
    {
        let _time = document.createElement("div");
        _time.className = "inf-font inf-datetime editable-text";
        _time.innerText = datetime;
        createRemovalButtonCenteredVerticalOnly(_time, _time)
        newContainer.append(_time);
    }

    // location
    if (location != undefined)
    {
        let _location = document.createElement("div");
        _location.className = "inf-font inf-location editable-text";
        _location.innerText = location;
        createRemovalButtonCenteredVerticalOnly(_location, _location)
        newContainer.append(_location);
    }
    
    // title
    if (title != undefined)
    {
        let _title = document.createElement("div");
        _title.className = "inf-font inf-title editable-text";
        _title.innerText = title;
        createRemovalButtonCenteredVerticalOnly(_title, _title)
        newContainer.append(_title);
    }

    // description text
    if (text != undefined)
    {
        let _text = document.createElement("div");
        _text.className = "inf-font inf-text editable-text";
        _text.innerText = text;
        createRemovalButtonCenteredVerticalOnly(_text, _text)
        newContainer.append(_text);
    }

    
    createRemovalButton(newContainer, newContainer)

    infContainer.append(newContainer);
}

function insertText(text)
{
        
    insertInformation(undefined,
                    undefined,
                    undefined,
                    text);

}



