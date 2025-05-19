var clicks = 0;
var clicksPerClick = 1;
var upgradeCost = 25;
var musicPlaying = false;

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
    musicPlaying = !musicPlaying;
}