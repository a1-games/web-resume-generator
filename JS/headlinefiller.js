






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
headshot.src = "IMG/headshot_square.jpg";
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
const personName = document.createElement("div");
personName.id ="pi-name";
personName.className = " editable-text";
textdiv.append(personName);

// seperation line
let _line = document.createElement("div");
_line.className = "seperation-line";
_line.style = "margin: 0.5em 0";
textdiv.append(_line);

// one-liner div
const oneLiner = document.createElement("div");
oneLiner.id ="headline-text";
oneLiner.className = " editable-text";
textdiv.append(oneLiner);



headlinediv.append(textdiv);

container.append(headlinediv);

piContainer.append(container);



function setHeadshot(url)
{
    headshot.src = url;
}


function setHeadlineName(name)
{
    personName.innerText = name;
}

function setOnelinerText(text)
{
    oneLiner.innerText = text;
}














