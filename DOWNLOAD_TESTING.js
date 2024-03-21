




function saveHTML() {
    var fullpage = document.documentElement.outerHTML;
    var bl = new Blob([fullpage], {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "MyResumePage.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
    a.click();
}

function savePage()
{

}



function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');


let dlButton = document.getElementById("download-html-button");
dlButton.onclick = () => {
    console.log("Download button was pressed");
    html2pdf(document.body);
};


  



