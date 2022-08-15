var slides = document.getElementsByClassName("carousel-item");
var dots = document.querySelectorAll(".dot");

var currslide = 1;

// prev button 
var prevbtn = document.getElementById("prev");

prevbtn.addEventListener("click", function() {
    carousel(currslide -= 1);
});

// next button

var nextbtn = document.getElementById("next");

nextbtn.addEventListener("click", function() {
    carousel(currslide += 1);
});

// res for currslide 1 to 3 & 3 to 1 ( 4 to 1) ( 0 to 4)
function carousel(slidenumber) {
    
    // hide all slides
    for (var x = 0; x < dots.length; x++) {
        console.log(dots[x]);
        
        dots[x].addEventListener("click", function() {
            
            currslide = this.getAttribute("data-bs-slide-to");
            console.log(this[x]);
        });
    }
    
    var y;
    
    for (y = 0; y < slides.length; y++) {
        slides[y].style.display = "none";
    }
    
    for (var z = 0; z < dots.length; z++) {
        
        // dots[z].className = "dot";
        dots[z].classList.remove("active");
        // dots[z].className = dots[z].className.replace("active", "");
    }
    
    if(slidenumber > slides.length) {
        currslide = 1;
    } else if(slidenumber < 1) {
        currslide = slides.length;
    }

    console.log(currslide);
    
    slides[currslide - 1].style.display = "block";
    
    // dots[currslide - 1].classList.add("active");
    dots[currslide - 1].className = "dot active";
    // dots[currslide - 1].className += " active";
}

carousel(currslide);

// slide        0   1   2
// currentslide 1-1 2-1 3-1

// 15DT 