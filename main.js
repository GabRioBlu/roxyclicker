var clicks = 0;

function clickIcon() {
    clicks++;
    document.getElementById("clickCounter").innerText = "Clicks: " + clicks;
}