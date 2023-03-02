
//open IIFE
(function() {
    "use strict";
    console.log("reading js");

    //go back to landing page
    document.querySelector(".back-button").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#header").className = "showing";
        document.querySelector("#overview").className = "showing";
        document.querySelector("main").className = "hidden";
    });

    // go to main story full page
    const clickTwenty = document.querySelector("#twenty");
    clickTwenty.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#header").className = "hidden";
        document.querySelector("#overview").className = "hidden";
        document.querySelector("main").className = "showing";
    });


    const story = document.querySelector(".story");

    //from Javascript scroll effects slides
    const navLinks = document.querySelectorAll(".nav-link"); //targets all pieces of clothing to be clicked
    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener("click", smoothScroll); //when you click on a piece of clothing, it will call smooth scroll function which shows the story
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetID = event.target.getAttribute("href"); //the id are in the href
        const targetAnchor = document.querySelector(targetID);

        const images = document.getElementById("image").getElementsByTagName("img")

        console.log(images);


        //getBoundingClientRect() tells top property of any element in relation to window
        //floor = round; -150 = put element below header
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 150;


        //smooth scroll magic
        story.scrollBy({top: originalTop, left:0, behavior:"smooth" });
    };

    //declaring variable for all of my area maps of pieces of clothing
    const twentyOutfit = document.querySelector("#twenty-outfit");
    const myTop = document.querySelector("#twenty-top");
    const myPants = document.querySelector("#twenty-bottom");

    //when you click on any of these pieces of clothing, the handleClick which changes the images to highlight specific piece of clothing is called
    myTop.addEventListener("click", handleClick);
    myPants.addEventListener("click", handleClick);
    twentyOutfit.addEventListener("click", handleClick);
    

    function handleClick(event) {
        event.preventDefault();
        if (event.target === myTop) {
            //change image to highlight top
            twentyOutfit.src = "images/twenty-top.jpg";
        }
        else if (event.target === myPants) {
            event.preventDefault();
            //chagne image to highlight pants
            twentyOutfit.src = "images/twenty-pants.jpg";
        }
        else {
            event.preventDefault();
            //reset image back
            twentyOutfit.src = "images/2020.JPG";
        };
    };

    //taken from the Javascript scroll effects too; allows users to also see pieces of clothing through scrolling
    window.addEventListener("load", function() {

        //we're only scrolling the story text part
        story.addEventListener("scroll", function() {
        let pageTop = story.scrollTop;
        // console.log(pageTop);

        if (pageTop > 120 && pageTop < 600) {
            twentyOutfit.src = "images/twenty-top.jpg";
        }
        else if (pageTop > 600) {
            twentyOutfit.src = "images/twenty-pants.jpg";
        }
        else {
            twentyOutfit.src = "images/2020.JPG";
        }
        });
    }); //end of window load

   
}()); //close iife