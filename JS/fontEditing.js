


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
        info:"Bullet Points",
        sliderProperties:{min:0.1, max:3,step:0.1, defVal:1.2, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-shortinfo`, `${value}rem`)},
    },
    {
        name:"infsize",
        info:"Information",
        sliderProperties:{min:0.1, max:3,step:0.1, defVal:1.3, unit:"rem"},
        changeSizeProperty:(value)=>{document.documentElement.style.setProperty(`--fontsize-information`, `${value}rem`)},
    },
]


function addSlider(sliderDataObj, parentElem, footspace = false)
{
    let sliderbox = document.createElement("div");
    sliderbox.className = `editing-container ${footspace? "footspace" : ""}`;
    sliderbox.style.width = "100%";

    let title = document.createElement("div");
    title.className = "editing-title";
    title.id = `${sliderDataObj.name}-title`;
    title.innerText = `${sliderDataObj.info} font-size: ${sliderDataObj.sliderProperties.defVal}${sliderDataObj.sliderProperties.unit}`;

    let inputSlider = document.createElement("input");
    inputSlider.className = "fontsize-slider";
    inputSlider.id = `${sliderDataObj.name}-slider`;
    inputSlider.type = "range";
    inputSlider.min = sliderDataObj.sliderProperties.min;
    inputSlider.max = sliderDataObj.sliderProperties.max;
    inputSlider.step = sliderDataObj.sliderProperties.step;
    inputSlider.value = sliderDataObj.sliderProperties.defVal;
    inputSlider.oninput = (e) => {
        title.innerText = `${sliderDataObj.info} font-size: ${inputSlider.value}${sliderDataObj.sliderProperties.unit}`;
        sliderDataObj.changeSizeProperty(inputSlider.value);
    };

    sliderbox.append(title);
    sliderbox.append(inputSlider);

    parentElem.append(sliderbox);
}


let globalfontsliderRow = MultiContainer("editing-container footspace pagewidth");

addSlider(sliderDataObjs[0], globalfontsliderRow);

editingContainer.append(globalfontsliderRow);



let doublefontsliderRow = MultiContainer("editing-container footspace pagewidth");

addSlider(sliderDataObjs[1], doublefontsliderRow);
addSlider(sliderDataObjs[2], doublefontsliderRow);

editingContainer.append(doublefontsliderRow);





















