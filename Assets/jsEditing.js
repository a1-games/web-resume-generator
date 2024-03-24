



let jsContainer = document.getElementById("JS-edit-overlay");




var jsInsertElem = null;
function onTextChanged(text)
{
    console.log(text);
    // remove the whole page before loading js

    // the js should only consist of methods. no new variables!

    // destroy the old script
    if (jsInsertElem)
    {
        jsInsertElem.remove();
    }

    // load the new script
    jsInsertElem = document.createElement("script");
    jsInsertElem.innerHTML = text;
    document.body.append(jsInsertElem);
}



function spawnJsContainer()
{
    let inputElem = document.createElement("textarea");
    inputElem.id = "js-input-text";
    inputElem.innerHTML = "document.getElementById(\"resume-editing-container\").style.backgroundColor = \"#FF2211\";";
    inputElem.onchange = (e) => {
        onTextChanged(inputElem.value);
    }

    jsContainer.append(inputElem);
}

spawnJsContainer();
























