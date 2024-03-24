let editingContainer = document.getElementById("resume-editing-container");









/* IMAGE PICKER */
let patternCirclesParent = document.getElementById("pattern-circles-container");

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
    patternSelector.className = "circle-option pattern-selector";
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
selectPattern(patternDataObjs[2].element);

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





/* SLIDERS */
let sliderDataObjs = [
    {
        name:"remsize",
        info:"Root",
        sliderProperties:{min:8, max:28,step:0.5, defVal:15, unit:"px"},
        changeSizeProperty:(value)=>{document.documentElement.style.fontSize = `${value}px`},
    },
    {
        name:"infsize",
        info:"Information",
        sliderProperties:{min:0.125, max:3,step:0.125, defVal:1.375, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-information`, `${value}rem`)},
    },
    {
        name:"shortinf",
        info:"Short Information",
        sliderProperties:{min:0.125, max:3,step:0.125, defVal:1.25, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-shortinfo`, `${value}rem`)},
    },
]


var sliders = [];



for (let i = 0; i < sliderDataObjs.length; i++) {
    let sliderbox = document.createElement("div");
    sliderbox.className = "editing-container";

    let title = document.createElement("div");
    title.className = "editing-title";
    title.id = `${sliderDataObjs[i].name}-title`;
    title.innerText = `${sliderDataObjs[i].info} font-size: ${sliderDataObjs[i].sliderProperties.defVal}${sliderDataObjs[i].sliderProperties.unit}`;

    let inputSlider = document.createElement("input");
    inputSlider.className = "fontsize-slider";
    inputSlider.id = `${sliderDataObjs[i].name}-slider`;
    inputSlider.type = "range";
    inputSlider.min = sliderDataObjs[i].sliderProperties.min;
    inputSlider.max = sliderDataObjs[i].sliderProperties.max;
    inputSlider.step = sliderDataObjs[i].sliderProperties.step;
    inputSlider.value = sliderDataObjs[i].sliderProperties.defVal;
    inputSlider.oninput = (e) => {
        console.log(inputSlider.value);
        title.innerText = `${sliderDataObjs[i].info} font-size: ${inputSlider.value}${sliderDataObjs[i].sliderProperties.unit}`;
        sliderDataObjs[i].changeSizeProperty(inputSlider.value);
    };

    sliderbox.append(title);
    sliderbox.append(inputSlider);

    sliders.push(inputSlider);
    editingContainer.append(sliderbox);
}



// leave this last

// PRINT PAGE BUTTON
let downloadButton =  document.createElement("a");
downloadButton.id ="pi-cv-link";
downloadButton.style.cursor = "pointer";
downloadButton.innerText = "Click to view or download as .pdf"
downloadButton.onclick = () => {
    print();
};
editingContainer.append(downloadButton);
























