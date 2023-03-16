
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
    

    nineteenFit();
    twentyFit();
    twentyOneFit();
    twentyTwoFit();
    twentyThreeFit();
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
        console.log(targetID);
        const targetAnchor = document.querySelector(targetID);
        console.log(targetAnchor);

        //getBoundingClientRect() tells top property of any element in relation to window
        //floor = round; -150 = put element below header
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 150;
        console.log(originalTop);
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

    function nineteenFit() {
        const clickNineteen = document.querySelector("#nineteen");
        const nineteenOutfit = document.querySelector("#nineteen-outfit");
        const nineteenTop = document.querySelector("#nineteen-tops");
        const nineteenPants = document.querySelector("#nineteen-bottom");
        const nineteenMain = document.querySelector("#nineteen-mains");


        clickNineteen.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            nineteenFull.className = "showing";
            twentyFull.className = "hidden";
            twentyOneFull.className = "hidden";
            twentyTwoFull.className = "hidden";
            twentyThreeFull.className = "hidden";

        });

        clickNineteen.addEventListener("mouseover", function() {
            document.querySelector('#nineteen-preview').className = "showing";
        });

        clickNineteen.addEventListener("mouseout", function() {
            document.querySelector('#nineteen-preview').className = "hidden";
        });
        //when you click on any of these pieces of clothing, the handleClick which changes the images to highlight specific piece of clothing is called
        nineteenTop.addEventListener("click", handleNineteen);
        nineteenPants.addEventListener("click", handleNineteen);
        nineteenMain.addEventListener("click", handleNineteen);

        hideTags();

        function handleNineteen(event) {
            event.preventDefault();
            if (event.target === nineteenTop) {
                //change image to highlight top
                nineteenOutfit.src = "images/nineteen-top.jpg";
                //show bottom and full outfit tags; hide top tag
                nineteenTop.className = 'clothes-tag nav-link hidden';
                nineteenMain.className = 'clothes-tag nav-link showing';
                nineteenPants.className = 'clothes-tag nav-link showing';
            }
            else if (event.target === nineteenPants) {
                event.preventDefault();
                //chagne image to highlight pants
                nineteenOutfit.src = "images/nineteen-pants.jpg";
                //shows full outfit and top tags; hide bottom tags
                nineteenPants.className = 'clothes-tag nav-link hidden';
                nineteenMain.className = 'clothes-tag nav-link showing';
                nineteenTop.className = 'clothes-tag nav-link showing';
            }

            else if (event.target === nineteenMain) {
                event.preventDefault();
                //reset image back
                nineteenOutfit.src = "images/2019.JPG"
                //shows top and bottom tags; hide full outfit tag
                nineteenMain.className = 'clothes-tag nav-link hidden';
                nineteenTop.className = 'clothes-tag nav-link showing';
                nineteenPants.className = 'clothes-tag nav-link showing';
            };
        }


    }

    function twentyFit() {
        //declaring variable for all of my area maps of pieces of clothing
        const clickTwenty = document.querySelector("#twenty");
        const twentyOutfit = document.querySelector("#twenty-outfit");
        const myTop = document.querySelector("#twenty-top");
        const myPants = document.querySelector("#twenty-bottom");
        const resetOutfit = document.querySelector("#twenty-main");
        // go to main story full page
        clickTwenty.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            nineteenFull.className = "hidden";
            twentyFull.className = "showing";
            twentyOneFull.className = "hidden";
            twentyTwoFull.className = "hidden";
            twentyThreeFull.className = "hidden";
        });

        clickTwenty.addEventListener("mouseover", function() {
            document.querySelector('#twenty-preview').className = "showing";
        });

        clickTwenty.addEventListener("mouseout", function() {
            document.querySelector('#twenty-preview').className = "hidden";
        });
        //when you click on any of these pieces of clothing, the handleClick which changes the images to highlight specific piece of clothing is called
        myTop.addEventListener("click", handleClick);
        myPants.addEventListener("click", handleClick);
        resetOutfit.addEventListener("click", handleClick);
        

        function handleClick(event) {
            event.preventDefault();
            if (event.target === myTop) {
                //change image to highlight top
                twentyOutfit.src = "images/twenty-top.jpg";
                //show bottom and full outfit tags; hide top tag
                myTop.className = 'clothes-tag nav-link hidden';
                resetOutfit.className = 'clothes-tag nav-link showing';
                myPants.className = 'clothes-tag nav-link showing';
            }
            else if (event.target === myPants) {
                event.preventDefault();
                //chagne image to highlight pants
                twentyOutfit.src = "images/twenty-pants.jpg";
                //shows full outfit and top tags; hide bottom tags
                myPants.className = 'clothes-tag nav-link hidden';
                resetOutfit.className = 'clothes-tag nav-link showing';
                myTop.className = 'clothes-tag nav-link showing';
            }

            else if (event.target === resetOutfit) {
                event.preventDefault();
                //reset image back
                twentyOutfit.src = "images/2020.JPG";
                //shows top and bottom tags; hide full outfit tag
                resetOutfit.className = 'clothes-tag nav-link hidden';
                myTop.className = 'clothes-tag nav-link showing';
                myPants.className = 'clothes-tag nav-link showing';
            };
        }; //end handleClick function
    } //end of twenty fit

    function twentyOneFit() {
        const clickTwentyOne = document.querySelector("#twenty-one");

        clickTwentyOne.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            nineteenFull.className = "hidden";
            twentyFull.className = "hidden";
            twentyOneFull.className = "showing";
            twentyTwoFull.className = "hidden";
            twentyThreeFull.className = "hidden";
        });

        clickTwentyOne.addEventListener("mouseover", function() {
            document.querySelector('#twenty-one-preview').className = "showing";
        });

        clickTwentyOne.addEventListener("mouseout", function() {
            document.querySelector('#twenty-one-preview').className = "hidden";
        });
    }

    function twentyTwoFit() {
        const clickTwentyTwo = document.querySelector("#twenty-two");
        const twentyTwoOutfit = document.querySelector("#twenty-two-outfit");
        const myTwoTop = document.querySelector("#twenty-two-top");
        const myTwoPants = document.querySelector("#twenty-two-sbottom");
        const resetTwoOutfit = document.querySelector("#twenty-two-main");

        clickTwentyTwo.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            nineteenFull.className = "hidden";
            twentyFull.className = "hidden";
            twentyOneFull.className = "hidden";
            twentyTwoFull.className = "showing";
            twentyThreeFull.className = "hidden";

        });

        clickTwentyTwo.addEventListener("mouseover", function() {
            document.querySelector('#twenty-two-preview').className = "showing";
        });

        clickTwentyTwo.addEventListener("mouseout", function() {
            document.querySelector('#twenty-two-preview').className = "hidden";
        });

    }

    function twentyThreeFit() {
        const clickTwentyThree = document.querySelector("#twenty-three");

        clickTwentyThree.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            nineteenFull.className = "hidden";
            twentyFull.className = "hidden";
            twentyOneFull.className = "hidden";
            twentyTwoFull.className = "hidden";
            twentyThreeFull.className = "showing";
        });

        clickTwentyThree.addEventListener("mouseover", function() {
            document.querySelector('#twenty-three-preview').className = "showing";
        });

        clickTwentyThree.addEventListener("mouseout", function() {
            document.querySelector('#twenty-three-preview').className = "hidden";
        });

    }

    

   
}()); //close iife