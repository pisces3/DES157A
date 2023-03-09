
//open IIFE
(function() {
    "use strict";
    console.log("reading js");

    const story = document.querySelector(".story"); //need to fix .story for others
    const navLinks = document.querySelectorAll(".nav-link"); //targets all pieces of clothing to be clicked

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
        story.scrollBy({top: originalTop, left:0, behavior:"smooth" });
    };

    function hidePreview() {
        document.querySelector("#header").className = "hidden";
        document.querySelector("#overview").className = "hidden";
        document.querySelector('main').className = "showing";
    }

    function nineteenFit() {
        const clickNineteen = document.querySelector("#nineteen");

        clickNineteen.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            document.querySelector('#nineteen-full').className = "showing"; //need to fix this still

        });

        clickNineteen.addEventListener("mouseover", function() {
            document.querySelector('#nineteen-preview').className = "showing";
        });

        clickNineteen.addEventListener("mouseout", function() {
            document.querySelector('#nineteen-preview').className = "hidden";
        });

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
            document.querySelector('#twenty-full').className = "showing";
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
                document.querySelector('#twenty-top').className = 'clothes-tag nav-link hidden';
                document.querySelector('#twenty-main').className = 'clothes-tag nav-link showing';
                document.querySelector('#twenty-bottom').className = 'clothes-tag nav-link showing';
            }
            else if (event.target === myPants) {
                event.preventDefault();
                //chagne image to highlight pants
                twentyOutfit.src = "images/twenty-pants.jpg";
                //shows full outfit and top tags; hide bottom tags
                document.querySelector('#twenty-bottom').className = 'clothes-tag nav-link hidden';
                document.querySelector('#twenty-main').className = 'clothes-tag nav-link showing';
                document.querySelector('#twenty-top').className = 'clothes-tag nav-link showing';
            }

            else if (event.target === resetOutfit) {
                event.preventDefault();
                //reset image back
                twentyOutfit.src = "images/2020.JPG";
                //shows top and bottom tags; hide full outfit tag
                document.querySelector('#twenty-main').className = 'clothes-tag nav-link hidden';
                document.querySelector('#twenty-top').className = 'clothes-tag nav-link showing';
                document.querySelector('#twenty-bottom').className = 'clothes-tag nav-link showing';
            };
        }; //end handleClick function
    } //end of twenty fit

    function twentyOneFit() {
        const clickTwentyOne = document.querySelector("#twenty-one");

        clickTwentyOne.addEventListener("click", function(e){
            e.preventDefault();
            hidePreview();
            document.querySelector('#twenty-one-full').className = "showing"; //need to fix this still
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
            document.querySelector('#twenty-two-full').className = "showing"; //need to fix this still

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
            document.querySelector('#twenty-three-full').className = "showing"; //need to fix this still
        });

        clickTwentyThree.addEventListener("mouseover", function() {
            document.querySelector('#twenty-three-preview').className = "showing";
        });

        clickTwentyThree.addEventListener("mouseout", function() {
            document.querySelector('#twenty-three-preview').className = "hidden";
        });

    }

    

   
}()); //close iife