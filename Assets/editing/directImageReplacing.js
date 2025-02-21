


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

let bulletPointIsBeingSelected = false;
let selectedBulletPointName = icons[0];

// icon choices picker spawning
let IconReplacer = MultiContainer(false);
IconReplacer.id = "bullet-point-icon-picker";
for (let i = 0; i < icons.length; i++) {
    let newIcon = document.createElement("img");
    //newIcon.src = `Assets/icon_${icons[i]}.png`
    newIcon.src = `Assets/icon_${icons[i]}.png`
    newIcon.className = "bullet-point-showcase clickable";
    
    newIcon.onclick = () => {
        selectedIconElement.src = newIcon.currentSrc;
        deselectElement();
        IconReplacer.style.display = "none";

        if (bulletPointIsBeingSelected)
        {
            // idk if this is unnessecary but I am too tired to risk it
            let name = icons[i];
            selectedBulletPointName = name;
            bulletPointIsBeingSelected = false;
        }
    }
    IconReplacer.append(newIcon);
}

// should be none
IconReplacer.style.display = "none";

document.body.append(IconReplacer);


function SelectIconToReplace(event)
{
    let element = event.target;
    let xPos = event.pageX;
    let yPos = event.pageY;

    selectedIconElement = element;

    selectedIconElement.classList.add("selected-editable");
    //selectedIconElement.append(IconReplacer);
    IconReplacer.style.left = `${xPos}px`;
    IconReplacer.style.top = `${yPos}px`;
    
    IconReplacer.style.display = "flex";
}

function deselectElement()
{
    selectedIconElement.classList.remove("selected-editable");
    selectedIconElement = null;
    IconReplacer.style.display = "none";
}


addEventListener("click", (e) => {
    // make sure only one item is selected or deselect if clicking away
    if (selectedIconElement != null)
    {
        deselectElement()
    }
    if (e.target.className.includes("replaceable-img"))
    {
        SelectIconToReplace(e);
    }
});



























