// REFERENCES

const editingContainer = document.getElementById("resume-editing-container");

const infContainer = document.getElementById("inf-container");

const profileInfContainer = document.getElementById("profile-inf-aligner");

const shortinfContainer = document.getElementById("shortinf-container");

const piContainer = document.getElementById("personal_information");

const patternCirclesParent = document.getElementById("pattern-circles-container");



// FUNCTIONS
function MultiContainer(_footspace = true)
{
    let multicon = document.createElement("div");
    multicon.className = `multi-item-container ${_footspace ? "footspace" : ""}`;
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