


// icon selection
let icons = [
    "checkmark",
    "address",
    "location",
    "website",
    "globe",
    "phone",
    "phone_touch",
    "email",
    "mail",
]

let selectedIconElement = null;


// icon choices picker
let IconReplacer = MultiContainer();
IconReplacer.id = "bullet-point-icon-picker";
for (let i = 0; i < icons.length; i++) {
    let newIcon = document.createElement("img");
    newIcon.src = `Assets/icon_${icons[i]}.png`
    newIcon.className = "bullet-point-showcase clickable";
    
    newIcon.onclick = () => {
        selectedIconElement.src = newIcon.src;
        deselectElement();
        IconReplacer.style.display = "none";
    }
    IconReplacer.append(newIcon);
}
IconReplacer.style.display = "flex";

document.body.append(IconReplacer);


function SelectIconToReplace(element)
{
    if (selectedIconElement != null)
    {
        deselectElement()
    }
    selectedIconElement = element;

    selectedIconElement.classList.add("selected-editable");
    selectedIconElement.append(IconReplacer);
    
    IconReplacer.style.display = "flex";
}

function deselectElement()
{
    selectedIconElement.classList.remove("selected-editable");
    selectedIconElement = null;
}


addEventListener("click", (e) => {
    if (e.target.className.includes("replaceable-img"))
    {
        SelectIconToReplace(e.target);
    }
});



























