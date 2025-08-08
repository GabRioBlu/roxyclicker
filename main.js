var clicks = 0;
var upgradeCost = 25;
var musicPlaying = false;
var currentTheme = "lightMode";

roxyLayer.buyables.forEach((buyable, i) => {
	buyableDiv = document.createElement("div");
	buyableDiv.classList.add("upgrade");
	buyableDiv.classList.add((i % 2 == 0) ? "player" : "aspect");
	image = document.createElement("img");
	image.src = buyable.image();
	buyableDiv.appendChild(image);
	infoDiv = document.createElement("div");
	infoDiv.classList.add("upgradeDetails");
	p1 = document.createElement("p");
	p1.innerText = buyable.title();
	infoDiv.appendChild(p1);
	p2 = document.createElement("p");
	p2.innerText = buyable.description();
	infoDiv.appendChild(p2);
	p3 = document.createElement("p");
	p3.innerText = "Cost: " + buyable.cost();
	infoDiv.appendChild(p3);
	buyableDiv.appendChild(infoDiv);
	button = document.createElement("button");
	button.setAttribute("onclick", "roxyLayer.buyables[" + i + "].buy()");
	button.innerText = "buy";
	buyableDiv.appendChild(button);
	document.getElementById("upgradeWindow").appendChild(buyableDiv);
})

function clickIcon() {
    clicks += 1 + roxyLayer.buyables[0].effect();
}

function buyUpgrade(i) {
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
	clicks += roxyLayer.buyables[1].effect() / 20;
	
	roxyLayer.buyables.forEach((buyable, i) => {
		document.getElementById("upgradeWindow").children[i].children[2].disabled = (clicks < buyable.cost());
		document.getElementById("upgradeWindow").children[i].children[1].children[2].innerText = "Cost: " + buyable.cost();
	})
	if (parseInt(clicks) >= 1000)
	{
		document.getElementById("clickCounter").innerText = "SPECTROGRAM";
	}
	else
	{
		document.getElementById("clickCounter").innerText = "Clicks: " + parseInt(clicks);
	}
}

setInterval(update, 50);
