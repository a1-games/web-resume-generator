






let piContainer = document.getElementById("personal_information");

// main containers
let container = document.createElement("div");
container.id = "pi-container";
container.className = "no-text-decoration blogpost-container";

let headlinediv = document.createElement("div");
headlinediv.id = "pi-headline";

// headshot picture
let headshot = document.createElement("img");
headshot.id = "pi-headshot";
headshot.src = "Customization/headshot_square.jpg";
headlinediv.append(headshot);


// text container
let textdiv = document.createElement("div");
textdiv.id = "pi-info";

// name div
let namediv =  document.createElement("div");
namediv.id ="pi-name";
textdiv.append(namediv);

// seperation line
let _line = document.createElement("div");
_line.className = "seperation-line";
_line.style = "margin: 0.5em 0";
textdiv.append(_line);

// one-liner div
let onelinerdiv =  document.createElement("div");
onelinerdiv.id ="headline-text";
textdiv.append(onelinerdiv);


// download button
let downloadButton =  document.createElement("a");
downloadButton.id ="pi-cv-link";
downloadButton.style.cursor = "pointer";
downloadButton.onclick = () => {
    print();
};
textdiv.append(downloadButton);

headlinediv.append(textdiv);

container.append(headlinediv);

piContainer.append(container);






function setHeadlineName(name)
{
    namediv.innerText = name;
}

function setOnelinerText(text)
{
    onelinerdiv.innerText = text;
}

function setDownloadText(text)
{
    downloadButton.innerText = text;
}














