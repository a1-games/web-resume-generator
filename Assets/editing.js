let editingContainer = document.getElementById("resume-editing-container");









/* IMAGE PICKER */
let patternDataObjs = [
    {
        filename:"bckgrnd_pattern_02.png",
        setPattern:()=>{  },
    },
]





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
        sliderProperties:{min:0.125, max:3,step:0.125, defVal:1.25, unit:"rem"},
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
    inputSlider.defaultValue = sliderDataObjs[i].sliderProperties.defVal;
    inputSlider.step = sliderDataObjs[i].sliderProperties.step;
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
























