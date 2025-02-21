

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
    let _time = document.createElement("div");
    _time.className = "inf-font inf-datetime editable-text";
    _time.innerText = datetime;
    createRemovalButtonCenteredVerticalOnly(_time, _time)

    // location
    let _location = document.createElement("div");
    _location.className = "inf-font inf-location editable-text";
    _location.innerText = location;
    createRemovalButtonCenteredVerticalOnly(_location, _location)
    
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title editable-text";
    _title.innerText = title;
    createRemovalButtonCenteredVerticalOnly(_title, _title)

    // description text
    let _text = document.createElement("div");
    _text.className = "inf-font inf-text editable-text";
    _text.innerText = text;
    createRemovalButtonCenteredVerticalOnly(_text, _text)

    
    newContainer.append(_time);
    newContainer.append(_location);
    newContainer.append(_title);
    newContainer.append(_text);
    
    createRemovalButton(newContainer, newContainer)

    infContainer.append(newContainer);
}

function insertText(text, container)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container information-container";

    // description text
    let _text = document.createElement("div");
    _text.className = "inf-font inf-text editable-text";
    _text.innerText = text;
    createRemovalButtonCenteredVerticalOnly(_text, _text)
    
    newContainer.append(_text);

    createRemovalButton(newContainer, newContainer)
    
    container.append(newContainer);
}



