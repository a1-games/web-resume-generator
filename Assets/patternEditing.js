





/* IMAGE PICKER */

let selectedPCircle = null;

let patternDataObjs = [
    {
        filename:"bckgrnd_pattern_00.png",
        setPattern:(element, imgurl) => { selectPattern( element, imgurl ); },
        element:null,
    },
    {
        filename:"bckgrnd_pattern_01.png",
        setPattern:(element, imgurl) => { selectPattern( element, imgurl ); },
        element:null,
    },
    {
        filename:"bckgrnd_pattern_02.png",
        setPattern:(element, imgurl) => { selectPattern( element, imgurl ); },
        element:null,
    },
    {
        filename:"bckgrnd_pattern_03.png",
        setPattern:(element, imgurl) => { selectPattern( element, imgurl ); },
        element:null,
    },
    {
        filename:"icon_empty.png",
        setPattern:(element, imgurl) => { selectPattern( element, "none" ); },
        element:null,
    },
]

function selectPattern(element, imgurl)
{
    document.documentElement.style.setProperty(`--background-pattern`, imgurl)
    // show the selected one
    if (selectedPCircle)
    {
        selectedPCircle.classList.remove("selected-pattern-circle");
    }
    element.classList.add("selected-pattern-circle");
    selectedPCircle = element;
}

function addPatternSeletor(patternDataObj, styleURL)
{
    let patternSelector = document.createElement("div");
    patternSelector.className = "circle-option pattern-selector clickable";
    patternSelector.style.backgroundImage = styleURL;
    patternSelector.onclick = () => {
        patternDataObj.setPattern(patternSelector, `url('${patternDataObj.filename}')`);
    };

    patternDataObj.element = patternSelector;
    patternCirclesParent.prepend(patternSelector);
}

for (let i = 0; i < patternDataObjs.length; i++) {
    addPatternSeletor(patternDataObjs[i],
                      `url('Assets/${patternDataObjs[i].filename}')`);
}
// mark the default pattern as selected
selectPattern(patternDataObjs[2].element, `url('${patternDataObjs[2].filename}')`);

// uploading
let patternUploadButton = document.getElementById("edit-image-picker");
patternUploadButton.oninput = (e) => {
    
    var newPatternObj = {
        filename:"patternUploadButton.result",
        setPattern:(element, imgurl) => { selectPattern( element, imgurl ); },
    }

    var files = patternUploadButton.files[0];

    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            newPatternObj.filename = this.result;
            // add it after its loaded, otherwise it will be fucked
            addPatternSeletor(newPatternObj, `url('${newPatternObj.filename}')`);
        });    
    }
    
    patternDataObjs.push(newPatternObj);
};


/* COLOUR PICKER */
let colorPicker = document.getElementById("edit-color-picker");
colorPicker.oninput = () => {
    document.documentElement.style.setProperty(`--shortinfo-color`, `${colorPicker.value}f6`)
};
