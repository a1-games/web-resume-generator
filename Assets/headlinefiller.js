






// main containers
let container = document.createElement("div");
container.id = "pi-container";
container.className = "no-text-decoration blogpost-container";

let headlinediv = document.createElement("div");
headlinediv.id = "pi-headline";

// headshot picture
let headshot = document.createElement("img");
headshot.id = "pi-headshot";
headshot.style.cursor = "pointer";
headshot.src = "Assets/headshot_square.jpg";
headlinediv.append(headshot);


// uploading
let headshotUpload = document.createElement("input");
headshotUpload.type = "file";
headshotUpload.style.opacity = 0;
headshotUpload.style.position = "absolute";
headshotUpload.oninput = (e) => {
    
    var files = headshotUpload.files[0];

    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            headshot.src = this.result;
        });    
    }
    
};
headshot.onclick = () => {
    headshotUpload.click();
}

// text container
let textdiv = document.createElement("div");
textdiv.id = "pi-info";

// name div
let namediv =  document.createElement("div");
namediv.id ="pi-name";
namediv.className = " editable-text";
textdiv.append(namediv);

// seperation line
let _line = document.createElement("div");
_line.className = "seperation-line";
_line.style = "margin: 0.5em 0";
textdiv.append(_line);

// one-liner div
let onelinerdiv =  document.createElement("div");
onelinerdiv.id ="headline-text";
onelinerdiv.className = " editable-text";
textdiv.append(onelinerdiv);



headlinediv.append(textdiv);

container.append(headlinediv);

piContainer.append(container);



function setHeadshot(url)
{
    headshot.src = url;
}


function setHeadlineName(name)
{
    namediv.innerText = name;
}

function setOnelinerText(text)
{
    onelinerdiv.innerText = text;
}














