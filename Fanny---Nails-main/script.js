
$(".inner-switch").on("click", function() {
    if($("body").hasClass("dark")){
        $("body").removeClass("dark");
        $(".inner-switch").text("OFF");
    }else {
        $("body").addClass("dark");
        $(".inner-switch").text("ON");
    }
});

function Hitelesites() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var date = document.forms[0]["date"].value;
    var time = document.forms[0]["time"].value;

    if (name === "" || email === "" || date === "" || time === "") 
    {
        alert("Minden mezőt ki kell tölteni!");
    } 
    else 
    {

        alert("Foglalás elküldve!");
    }
}



function frissitSzalonAllapot() {
    var jelenlegiIdo = new Date();
    var ora = jelenlegiIdo.getHours();

    var szalonTextElem = document.getElementById('szalontext');
    var onlineElem = document.getElementById('online');
    var offlineElem = document.createElement('span');
    offlineElem.id = 'offline';
    offlineElem.textContent = 'ZÁRVA';

    if (ora >= 8 && ora < 16) {
        szalonTextElem.removeChild(offlineElem);
        szalonTextElem.appendChild(onlineElem);
    } else {
        szalonTextElem.removeChild(onlineElem);
        szalonTextElem.appendChild(offlineElem);
    }
}

frissitSzalonAllapot()


setInterval(frissitSzalonAllapot, 60000);