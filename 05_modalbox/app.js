var getmodal = document.getElementById("signupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");

getbtnsignup.addEventListener("click", function() {
    getmodal.style.display = "block";
});

getbtnclose.addEventListener("click", function() {
    getmodal.style.display = "none";
});

// window.onclick is click on window screen
window.onclick = function(e) {
    // console.log(e.target);

    if(e.target === getmodal) {
        getmodal.style.display = "none";
    }
}

// requestFullscreen() has under documen.documentElement
let getdocelement = document.documentElement;
// console.log(getdocelement);

getbtnfullscreen.addEventListener("click", function() {
    
    if(getdocelement.requestFullscreen) {
        getdocelement.requestFullscreen();
    } else if (getdocelement.msRequestFullscreen) {
        getdocelement.msRequestFullscreen();
    } else if (getdocelement.webkitRequestFullscreen) {
        getdocelement.webkitRequestFullscreen();
    }

    getbtnclosescreen.style.display = "inline-block";
});

// exitFullscreen() is under document

getbtnclosescreen.addEventListener("click", function() {
    
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }

    getbtnclosescreen.style.display = "none";

});

// ms => microsoft product 
// webkit => chrome, safari 

// 16DONE 