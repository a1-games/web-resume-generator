
















function spawnNotification(positive = true, text)
{
    
    let notif = document.createElement("div");
    notif.className = "ol-box clickable ui-notif ";
    notif.innerText = text;
    notif.style.backgroundColor = positive ? "green" : "red";

    document.body.prepend(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);



}























