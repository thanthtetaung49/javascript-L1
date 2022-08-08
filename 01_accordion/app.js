var getaccordionTitle = document.getElementsByClassName("accordion-title");
// console.log(getaccordionTitle); // DomToken List 
var getaccordionContent = document.querySelectorAll(".accordion-content");
// console.log(getaccordionContent); // NodeList

for (var x = 0; x < getaccordionTitle.length; x++){
    // console.log(x);

    getaccordionTitle[x].addEventListener("click", function(e) {
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle("active");
        var getcontent = this.nextElementSibling;
        console.log(getcontent);

        if(getcontent.style.height){
            getcontent.style.height = null; // beware can't set 0
        } else {
            // console.log(getcontent.scrollHeight);
            getcontent.style.height = getcontent.scrollHeight + "px";
        }
    });

    if(getaccordionTitle[x].classList.contains("active")){
        getaccordionContent[x].style.height = getaccordionContent[x].scrollHeight + "px";
    }
}