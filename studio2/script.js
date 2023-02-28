
//open IIFE
(function() {
    "use strict";
    console.log("reading js");

    document.querySelector(".back-button").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#header").className = "showing";
        document.querySelector("#overview").className = "showing";
        document.querySelector("main").className = "hidden";
    });

    const clickTwenty = document.querySelector("#twenty");
    clickTwenty.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#header").className = "hidden";
        document.querySelector("#overview").className = "hidden";
        document.querySelector("main").className = "showing";
    });

    function handleClick(event) {
        if (event.target === myTop) {
            clickTop();
        }
        else if (event.target === myPants) {
            clickPants();
        }
        else {
            clickOut();
        };
    };
    
    const twentyOutfit = document.querySelector("#twenty-outfit");
    const myTop = document.querySelector("#twenty-top");
    const myPants = document.querySelector("#twenty-bottom");

    let title = document.querySelector(".text h1");
    let location = document.querySelectorAll(".text h2")[0];
    let date = document.querySelectorAll(".text h2")[1];
    let firstPara = document.querySelectorAll(".text p")[0];
    let secondPara = document.querySelectorAll(".text p")[1];

    myTop.addEventListener("click", clickTop);
    myPants.addEventListener("click", clickPants);
    twentyOutfit.addEventListener("click", clickOut);

    function clickTop(event) {
        event.preventDefault();
        console.log("clicked the top");

        //change image to highlight the top
        twentyOutfit.src = "images/twenty-top.jpg";

        //change text
        title.innerHTML = "COLLUSION square neck top";
        location.innerHTML = "ASOS";
        date.innerHTML = "May 2020";
        firstPara.innerHTML = "This was very first purchase on the ASOS website. I bought it for $24. This was one of those impulsive online shopping purchases. I convinced my dad to buy this for me because there was free shipping and at that time, ASOS rarely does free shipping."
        secondPara.innerHTML = "This top is perfect for the summer! It’s one of my favorite tops and I always pair it with high waisted wide leg jeans or colorful pants like this one! I had a phase where I would just buy square neck puff sleeve tops because I think they fit me very well. ";
    }

    function clickPants(event) {
        event.preventDefault();
        console.log("clicked the bottom");

        //chagne image to highlight pants
        twentyOutfit.src = "images/twenty-pants.jpg";

        
        //change text
        title.innerHTML = "Yellow Plaid Pants";
        location.innerHTML = "Forever 21 at Davis, CA";
        date.innerHTML = "Late 2018";
        firstPara.innerHTML = "When I was first building my wardrobe, I would always shop at Forever 21 because they have cheap and trendy clothes. I bought this at the Forever 21 right next to Old Teahouse at the University Mall (RIP F21, you will be missed). I remember the store they had over there was soo big that I think one whole room was just shoes and accessories. I love shopping there because it’s so close to home and there was not a lot of people. "
        secondPara.innerHTML = "I still wear this pants today and still one of my faves <3 They’re really comfy and suit with everything. If I’m feeling more a summer vibe, I would pair it with puff shoulder light colored tops. If I’m feeling a little cool, I would pair it with a black turtleneck and leather jacket. If I’m feeling like a college student, I would pair it with a comfy sweatshirt.";
    }

    function clickOut(event) {
        event.preventDefault();
        console.log("Clicked outside");
        twentyOutfit.src = "images/2020.JPG";
    }
   
}()); //close iife