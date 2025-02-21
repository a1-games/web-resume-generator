// REFERENCES

const editingContainer = document.getElementById("resume-editing-container");

const infContainer = document.getElementById("inf-container");

const profileInfContainer = document.getElementById("profile-inf-aligner");

const shortinfContainer = document.getElementById("shortinf-container");

const piContainer = document.getElementById("personal_information");

const patternCirclesParent = document.getElementById("pattern-circles-container");



// FUNCTIONS
function MultiContainer(additionalClasses = "")
{
    let multicon = document.createElement("div");
    multicon.className = `multi-item-container ` + additionalClasses;
    return multicon;
}

function TextObject(_className, _innerText, _invert)
{
    let textobj = document.createElement("div");
    textobj.className = _className;
    textobj.innerText = _innerText;
    textobj.style.filter = _invert ? "invert(1)" : "";
    return textobj;
}

function InputField(_className, _defValue, _invert)
{
    let inputfield = document.createElement("input");
    inputfield.type = "text";
    inputfield.className = _className;
    inputfield.value = _defValue;
    inputfield.style.filter = _invert ? "invert(1)" : "";
    inputfield.onfocus = () => {
        inputfield.value = "";
    };
    return inputfield;
}

function createRemovalButton(itemToRemove, parent, forceSize)
{
    let remBut = document.createElement("div");
    remBut.className = "clickable removal-button-small";
    if (forceSize != null)
        remBut.style.height = forceSize;

    remBut.onclick = () => {
        // remove
        itemToRemove.remove();
    }

    parent.append(remBut);
}
function createRemovalButtonCentered(itemToRemove, parent, forceSize)
{
    let remBut = document.createElement("div");
    remBut.className = "clickable removal-button-small translate-middle";
    if (forceSize != null)
        remBut.style.height = forceSize;

    remBut.onclick = () => {
        // remove
        itemToRemove.remove();
    }

    parent.append(remBut);
}
function createRemovalButtonCenteredVerticalOnly(itemToRemove, parent)
{
    let remBut = document.createElement("div");
    remBut.className = "clickable removal-button-small translate-middle-vertical";

    remBut.onclick = () => {
        // remove
        itemToRemove.remove();
    }

    parent.append(remBut);
}

