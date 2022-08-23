var fullscreenbtn = document.querySelector(".fullscreen-btn");
var existscreenbtn = document.querySelector(".exist-btn");

fullscreenbtn.addEventListener("click", function() {
    
    localStorage.setItem("enterfullscreen", "enter");
    localStorage.removeItem("existfullscreen");

    fullscreen();
});

existscreenbtn.addEventListener("click", function() {

    localStorage.setItem("existfullscreen", "exist");
    localStorage.removeItem("enterfullscreen");

    fullscreen();
});

function fullscreen() {

    if(localStorage.getItem("enterfullscreen") === "enter") {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}