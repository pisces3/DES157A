
//open IIFE
(function() {
    "use strict";
    console.log("reading js");

    const story = document.querySelectorAll(".story"); //need to fix .story for others
    const navLinks = document.querySelectorAll(".nav-link"); //targets all pieces of clothing to be clicked

    const nineteenFull = document.querySelector('#nineteen-full');
    const twentyFull = document.querySelector('#twenty-full');
    const twentyOneFull = document.querySelector('#twenty-one-full');
    const twentyTwoFull = document.querySelector('#twenty-two-full');
    const twentyThreeFull = document.querySelector('#twenty-three-full');

    const hideTagButton = document.querySelectorAll('.hide-tags');
    const tags = document.querySelectorAll('.clothes-tag');

    outfitFit(
        "#nineteen",
        "#nineteen-outfit",
        "#nineteen-tops",
        "#nineteen-bottom",
        "#nineteen-mains",
        "#nineteen-preview",
        "#nineteen-full",
        "2019",
        "nineteen-top",
        "nineteen-pants"
      );
      
    outfitFit(
        "#twenty",
        "#twenty-outfit",
        "#twenty-top",
        "#twenty-bottom",
        "#twenty-main",
        "#twenty-preview",
        "#twenty-full",
        "2020",
        "twenty-top",
        "twenty-pants"
    );

    outfitFit(
        "#twenty-one",
        "#twenty-one-outfit",
        "#twenty-one-suit",
        "#twenty-one-shoes",
        "#twenty-one-main",
        "#twenty-one-preview",
        "#twenty-one-full",
        "2021",
        "twenty-one-suit",
        "twenty-one-shoe"
    );

    outfitFit(
        "#twenty-two",
        "#twenty-two-outfit",
        "#twenty-two-jacket",
        "#twenty-two-bottom",
        "#twenty-two-main",
        "#twenty-two-preview",
        "#twenty-two-full",
        "2022",
        "twenty-two-jacket",
        "twenty-two-pants"
    );

    function hideOthers() {
        nineteenFull.className = "hidden";
        twentyFull.className = "hidden";
        twentyOneFull.className = "hidden";
        twentyTwoFull.className = "hidden";
        twentyThreeFull.className = "hidden";
    }
      
    function outfitFit(clickId, outfitId, topId, pantsId, mainId, previewId, fullId, fullPic, topPic, bottomPic) {
        const clickElement = document.querySelector(clickId);
        const outfitElement = document.querySelector(outfitId);
        const topElement = document.querySelector(topId);
        const pantsElement = document.querySelector(pantsId);
        const mainElement = document.querySelector(mainId);
      
        clickElement.addEventListener("click", function(e) {
          e.preventDefault();
          hidePreview();
          hideOthers();
          document.querySelector(fullId).className = "showing";
        });
      
        clickElement.addEventListener("mouseover", function() {
          document.querySelector(previewId).className = "showing";
        });
      
        clickElement.addEventListener("mouseout", function() {
          document.querySelector(previewId).className = "hidden";
        });
      
        topElement.addEventListener("click", handleClick);
        pantsElement.addEventListener("click", handleClick);
        mainElement.addEventListener("click", handleClick);
      
        function handleClick(event) {
          event.preventDefault();
      
          if (event.target === topElement) {
            outfitElement.src = `images/${topPic}.jpg`;
            topElement.className = "clothes-tag nav-link hidden";
            mainElement.className = "clothes-tag nav-link showing";
            pantsElement.className = "clothes-tag nav-link showing";
          } else if (event.target === pantsElement) {
            outfitElement.src = `images/${bottomPic}.jpg`;
            pantsElement.className = "clothes-tag nav-link hidden";
            mainElement.className = "clothes-tag nav-link showing";
            topElement.className = "clothes-tag nav-link showing";
          } else if (event.target === mainElement) {
            outfitElement.src = `images/${fullPic}.jpg`;
            console.log(`${fullPic}`);
            mainElement.className = "clothes-tag nav-link hidden";
            topElement.className = "clothes-tag nav-link showing";
            pantsElement.className = "clothes-tag nav-link showing";
          }
        }
      }
      

    function hideTags() {
        for (let i = 0; i < hideTagButton.length; i++) {
            hideTagButton[i].addEventListener('click', function() {
                console.log('clicking hide tag');
                for (let j = 0; j < tags.length; j++) {
                    tags[j].className = 'clothes-tag nav-link hidden';
                }
            });
        }
    };
      //go back to landing page
    document.querySelector(".back-button").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#header").className = "showing";
        document.querySelector("#overview").className = "showing";
        document.querySelector("main").className = "hidden";
    });

    document.querySelector(".overlay").addEventListener("click", function(e) {
        document.querySelector('#user-test').className = "showing";
    });
    
    document.querySelector(".exit").addEventListener("click", function(e) {
        document.querySelector('#user-test').className = "hidden";
    });

    //from Javascript scroll effects slides
    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener("click", smoothScroll); //when you click on a piece of clothing, it will call smooth scroll function which shows the story
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetID = event.target.getAttribute("href"); //the id are in the href
        // console.log(targetID);
        const targetAnchor = document.querySelector(targetID);
        // console.log(targetAnchor);

        //getBoundingClientRect() tells top property of any element in relation to window
        //floor = round; -150 = put element below header
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 150;
        // console.log(originalTop);
        //smooth scroll magic
        for (let i = 0; i < story.length; i++) {
            story[i].scrollBy({top: originalTop, left:0, behavior:"smooth" });
          };
    };

    function hidePreview() {
        document.querySelector("#header").className = "hidden";
        document.querySelector("#overview").className = "hidden";
        document.querySelector('main').className = "showing";
    }

    

   
}()); //close iife