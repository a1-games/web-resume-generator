
const shortinfContainer = document.getElementById("shortinf-container");

var infosarray = []

function addLineToShortinfoArray(_iconname, _text, _invertImage, _link = null)
{
    infosarray.push({iconname:_iconname, text:_text, invert:_invertImage, link:_link});
}

function appendShortInfo()
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container short-inf-container";

    let shadeCover = document.createElement("div");
    shadeCover.className = "short-inf-background-image"
    newContainer.append(shadeCover);

    let blackBackground = document.createElement("div");
    blackBackground.className = "blackdrop "
    newContainer.append(blackBackground);

    for (let i = 0; i < infosarray.length; i++) {

        // icon
        let _icon = document.createElement("img");
        _icon.className = "short-inf-icon";
        _icon.src = `Assets/icon_${infosarray[i].iconname}.png`;
        if (infosarray[i].invert)
            _icon.classList.add("invert-icon");

        // text
        let _text = document.createElement("div");
        _text.className = "inf-font short-inf editable";
        _text.innerText = infosarray[i].text;
        if (infosarray[i].link != null)
        {
            _text.onclick = () => { window.open(infosarray[i].link); };
            _text.style.cursor = "pointer";
        }

        // line div
        let _line = document.createElement("div");
        _line.className = "short-inf-line";
        _line.append(_icon);
        _line.append(_text);

        newContainer.append(_line);
    }

    // clear the array
    infosarray = [];
    
    shortinfContainer.append(newContainer);
}



function appendShortInfoToParent(_parentContainer, shortInfoObj)
{
    // information container
    let newContainer = document.createElement("div");


    // icon
    let _icon = document.createElement("img");
    _icon.className = "short-inf-icon";
    _icon.src = `Assets/icon_${shortInfoObj.iconname}.png`;
    if (shortInfoObj.invert)
        _icon.classList.add("invert-icon");

    // text
    let _text = document.createElement("div");
    _text.className = "inf-font short-inf";
    _text.innerText = shortInfoObj.text;
    if (shortInfoObj.link != null)
    {
        _text.onclick = () => { window.open(shortInfoObj.link); };
        _text.style.cursor = "pointer";
    }

    // line div
    let _line = document.createElement("div");
    _line.className = "short-inf-line";
    _line.append(_icon);
    _line.append(_text);

    newContainer.append(_line);

    
    _parentContainer.append(newContainer);
}



