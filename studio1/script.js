//Open IIFE

(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("form");
    const errorMessage = document.querySelectorAll(".error");


    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const secondForm = document.querySelector("#second-set");
        const formData = secondForm.querySelectorAll("input[type=text]");
        if (validateForm(formData, errorMessage[1])) {
            generateRandomImg();
            submitForm();       
        }
        else {
            showSecondForm();
        }
        
    });

  

    document.querySelector("#createPost").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#input-page").className = "showing";
        document.querySelector("#landing-page").className = "hidden";
    });

    document.querySelector("#next").addEventListener("click", function(e){
        e.preventDefault();
        const firstForm = document.querySelector("#first-set");
        const formData = firstForm.querySelectorAll("input[type=text]");
        if (validateForm(formData, errorMessage[0])) {
            showSecondForm();  
        }
        else {
            showFirstForm();
        }
    });

    document.querySelector("#prev").addEventListener("click", function(e){
        e.preventDefault();
        showFirstForm(); 
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            showFirstForm();
        };
        if (e.key === "ArrowRight") {
            showSecondForm();
        };
        // if (e.key === "Enter") {
        //     submitForm();
        // };
        
    });

    function generateRandomImg() {
        const img1 = "images/img1.jpeg";
        const img2 = "images/img2.jpeg";
        const img3 = "images/img3.jpeg";
        const img4 = "images/img4.jpeg";
        const img5 = "images/img5.jpeg";
        const img6 = "images/img6.jpeg";

        const imgArray = [img1, img2, img3, img4, img5, img6];
        const img = document.querySelector("#output-img");

        let randomIndex = Math.floor(Math.random() * imgArray.length);
        img.setAttribute("src", imgArray[randomIndex]);
    };

    function submitForm() {
        const name = document.querySelector("#name").value;
        const friendName = document.querySelector("#friends-name").value;
        const expression = document.querySelector("#expression").value;
        const celebrity = document.querySelector("#celebrity").value;
        const location = document.querySelector("#location").value;
        const adjective = document.querySelector("#adjective").value;
        const songLyric = document.querySelector("#songLyric").value;
        const actionVerb = document.querySelector("#actionVerb").value;

        const nameOut1 = document.querySelector("#nameOut1");
        const nameOut2 = document.querySelector("#nameOut2");
        const celebOut1 = document.querySelector("#celebOut1");
        const celebOut2 = document.querySelector("#celebOut2");
        const locationOut = document.querySelector("#locationOut");
        const verbOut = document.querySelector("#verbOut");
        const lyricOut = document.querySelector("#lyricOut");
        const friendOut = document.querySelector("#friendOut");
        const expOut = document.querySelector("#expOut");
        const adjOut = document.querySelector("#adjOut");


        document.querySelector("#name").style.fontWeight = "700";
        // document.querySelector("#friends-name").value;
        // document.querySelector("#expression").value;
        // document.querySelector("#celebrity").value;
        // document.querySelector("#location").value;
        // document.querySelector("#adjective").value;
        // document.querySelector("#songLyric").value;
        // document.querySelector("#actionVerb").value;


        nameOut1.innerHTML = `@${name}`;
        nameOut2.innerHTML = `@${name}`;
        celebOut1.innerHTML = `@${celebrity}`;
        celebOut2.innerHTML = `Liked by ${celebrity} and others`;
        locationOut.innerHTML = location;
        verbOut.innerHTML = `Currently ${actionVerb} about life`;
        lyricOut.innerHTML =  `#${songLyric}`;
        friendOut.innerHTML = `@${friendName}`;
        expOut.innerHTML = `${expression}!`;
        adjOut.innerHTML = `You're ${adjective} sweetie`;

        // document.querySelector("#name").style.color = "magenta";

        document.querySelector("#output-page").className = "showing";
        document.querySelector("#input-page").className = "hidden";
        document.querySelector("#landing-page").className = "hidden";
    };

    // myForm.addEventListener("input[type=text]", function() {
    //     document.querySelector("#name").style.color = "magenta";
    // });
    

    function showFirstForm() {
        document.querySelector("#second-set").className = "hidden";
        document.querySelector("#first-set").className = "showing";
    };
    function showSecondForm() {
        document.querySelector("#second-set").className = "showing";
        document.querySelector("#first-set").className = "hidden";
    };

    function validateForm(formData, whichButton) {
        for (let i = 0; i < formData.length; i++) {
            if (formData[i].value == "") {
                const emptyField = formData[i].id;
                const errorText = `Please fill out ${emptyField}`;
                whichButton.innerHTML = errorText;
                whichButton.style.color = "white";
                document.querySelector(`#${emptyField}`).focus();
                return false;
            }
        }
        return true;
    }
    
    // function showErrors(formData, emptyFields) {
    //     const errorId = formData[emptyFields[0]].id;
    //     const errorText = `Please fill out this fields ${errorId}`;
    //     madlib.innerHTML = errorText;
    //     document.querySelector(`#${errorId}`).focus();
    // }

}());