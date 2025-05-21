var clicks = 0;
var clicksPerClick = 1;
var upgradeCost = 25;
var musicPlaying = false;
var currentTheme = "lightMode";

function clickIcon() {
    clicks += clicksPerClick;
    document.getElementById("clickCounter").innerText = "Clicks: " + clicks;
}

function buyUpgrade() {
    if (clicks < upgradeCost) return;
    clicks -= upgradeCost;
    upgradeCost *= 2;
    document.getElementById("costMarker").innerText = "cost: " + upgradeCost + " clicks";
    document.getElementById("clickCounter").innerText = "Clicks: " + clicks;
    clicksPerClick++;
}

function toggleMusic() {
    if (musicPlaying) document.getElementById("music").pause();
    else document.getElementById("music").play();
    document.getElementById("musicToggle").classList.toggle("enabled");
    musicPlaying = !musicPlaying;
}

function toggleTheme() {
     if (currentTheme == "lightMode") {
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

function openVolumeControls() {
    document.getElementById("volumeControls").classList.toggle("opened");
}

function checkNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && evt.key != "Backspace")
        return false;
    if (parseInt(document.getElementById("volumeInput").value + evt.key) > 100 && getSelection().toString() != "100") {
        document.getElementById("volumeInput").value = 100;
        return false;
    } else if (parseInt(document.getElementById("volumeInput").value + evt.key) < 0) {
        document.getElementById("volumeInput").value = 0;
        return false;
    }
    return true;
}

function updateVolumeFromText() {
    if (document.getElementById("volumeInput").value == "") {
        document.getElementById("volumeInput").value = 0;
    }
    document.getElementById("volumeSlider").value = parseInt(document.getElementById("volumeInput").value);
    setVolume(document.getElementById("volumeSlider").value);
}

function updateVolumeFromSlider() {
    document.getElementById("volumeInput").value = document.getElementById("volumeSlider").value;   
    setVolume(document.getElementById("volumeSlider").value);
}

function setVolume(volume) {
    document.getElementById("music").volume = volume / 100;
    if (volume >= 66.666) {
        document.getElementById("volume1").style.stroke = "black";
        document.getElementById("volume2").style.stroke = "black";
        document.getElementById("volume3").style.stroke = "black";
    } else if (volume >= 33.333) {
        document.getElementById("volume1").style.stroke = "black";
        document.getElementById("volume2").style.stroke = "black";
        document.getElementById("volume3").style.stroke = "none";
    } else if (volume > 0) {
        document.getElementById("volume1").style.stroke = "black";
        document.getElementById("volume2").style.stroke = "none";
        document.getElementById("volume3").style.stroke = "none";
    } else {
        document.getElementById("volume1").style.stroke = "none";
        document.getElementById("volume2").style.stroke = "none";
        document.getElementById("volume3").style.stroke = "none";
    }
}

function toggleSettingsBar() {
    document.getElementById("settingsBar").classList.toggle("opened");
    document.getElementById("settingsGear").classList.toggle("opened");
    document.getElementById("volumeControls").classList.remove("opened");
}

function update() {

}

setInterval(update, 50);