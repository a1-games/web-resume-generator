let editingContainer = document.getElementById("resume-editing-container");


/* SLIDERS */
let sliderDataObjs = [
    {
        name:"remsize",
        info:"Root",
        sliderProperties:{min:8, max:28,step:0.5, defVal:15, unit:"px"},
        changeSizeProperty:(value)=>{document.documentElement.style.fontSize = `${value}px`},
    },
    {
        name:"shortinf",
        info:"Short Information",
        sliderProperties:{min:0.125, max:3,step:0.125, defVal:1.25, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-shortinfo`, `${value}rem`)},
    },
    {
        name:"infsize",
        info:"Information",
        sliderProperties:{min:0.125, max:3,step:0.125, defVal:1.375, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-information`, `${value}rem`)},
    },
]


var sliders = [];



for (let i = 0; i < sliderDataObjs.length; i++) {
    let sliderbox = document.createElement("div");
    sliderbox.className = "editing-container footspace";

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























