var clicks = 0;
var clicksPerClick = 1;
var upgradeCost = 25;
var musicPlaying = false;
var currentTheme = "lightMode";

function clickIcon() {
    clicks += clicksPerClick;
    document.getElementById("clickCounter").innerText = "Clicks: " + clicks;
}

function buyUpgrade(){
    if (clicks < upgradeCost) return;
    clicks -= upgradeCost;
    upgradeCost *= 2;
    document.getElementById("costMarker").innerText = "cost: " + upgradeCost + " clicks";
    document.getElementById("clickCounter").innerText = "Clicks: " + clicks;
    clicksPerClick++;
}

function toggleMusic(){
    if (musicPlaying) document.getElementById("music").pause();
    else document.getElementById("music").play();
    document.getElementById("musicToggle").classList.toggle("enabled");
    musicPlaying = !musicPlaying;
}

function toggleTheme(){
     if (currentTheme == "lightMode"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentTheme = "darkMode";
     } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentTheme = "lightMode";
     }
     document.getElementById("lightMode").classList.toggle("invisible");
     document.getElementById("darkMode").classList.toggle("invisible");
}

function toggleSettingsBar(){
    document.getElementById("settingsBar").classList.toggle("opened");
    document.getElementById("settingsGear").classList.toggle("opened");
}

function update(){
    console.log(document.getElementById("settingsGear2").offsetLeft);
}

setInterval(update, 50);