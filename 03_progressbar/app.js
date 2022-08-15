var getprogressbar = document.querySelector(".progress-bar");
var getdownloadbtn = document.querySelector(".download-btn");
var seturl = "https://www.youtube.com";

getdownloadbtn.addEventListener("click", function() {

    var setwidth = 0;

    function progressincrease() {
        
        if(setwidth >= 100){
            // clearInterval(variable)
            clearInterval(interval);

            setwidth = 0;

            window.location.href = seturl; // go href link
        } else {
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute("data-increase", `${setwidth}%`);
        }
    }

    var interval = setInterval(progressincrease, 100);

    getdownloadbtn.setAttribute("disabled", true);
});

// 10PG