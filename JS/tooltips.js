



function CreateText(message, parent)
{
    let text = document.createElement("div");
    text.innerText = message;
    text.className = "tooltip-text";
    parent.append(text);
}



function SpawnToolTips()
{






let tooltipsbox = document.createElement("div");
tooltipsbox.className = "tooltips-container";

document.body.prepend(tooltipsbox);




let minimizebox = document.createElement("div");
minimizebox.className = "tooltip-minimize";
minimizebox.onclick = () => {
    if (tooltipsbox.className.includes("tt-minimized"))
    {
        tooltipsbox.classList.remove("tt-minimized");
        minimizebox.classList.remove("tooltip-maximize");
    }
    else
    {
        tooltipsbox.classList.add("tt-minimized");
        minimizebox.classList.add("tooltip-maximize");
    }
}

tooltipsbox.append(minimizebox);

CreateText("Editing Instructions", tooltipsbox);
CreateText("Click on the profile icon to change it.", tooltipsbox);
CreateText("Click any bullet point icon to open a menu to change it.", tooltipsbox);
CreateText("Click any line of text to edit it.", tooltipsbox);
CreateText("Click the red X on any item to remove it completely.", tooltipsbox);
CreateText("The order of elements can not be changed.", tooltipsbox);
CreateText(" ", tooltipsbox);
CreateText("Sometimes the fonts are not loaded the first time you click print. Just close the pop-up and try again.", tooltipsbox);
CreateText("Print settings should be as follows:", tooltipsbox);
CreateText("Destination: Save as PDF", tooltipsbox);
CreateText("Margins: Default", tooltipsbox);
CreateText("Headers and footers: Disabled", tooltipsbox);
CreateText("Background graphics: Disabled", tooltipsbox);



}
SpawnToolTips();





