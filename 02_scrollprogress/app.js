var getprogressbar = document.getElementById("progressbar");

window.onscroll = function() {
    scrollpoint();
}

function scrollpoint(){
    
    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop); // take start point of scroll
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight); // take final point of scroll
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight); // take window screen heihgt

    var calcheight = getscrollheight - getclientheight;
    // console.log(calcheight);

    var getfinal = Math.round((getscrolltop / calcheight) * 100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    window.print();
}

// screen height percentage formula 
// (scrolltop / scrollheight - clientheight) * 100;