//Open IIFE

(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("form");
    const nameOut = document.querySelector(".nameOut");
    const celebOut = document.querySelector(".celebOut");
    const locationOut = document.querySelector("#locationOut");
    const verbOut = document.querySelector("#verbOut");
    const lyricOut = document.querySelector("#lyricOut");
    const friendOut = document.querySelector("#friendOut");
    const expOut = document.querySelector("#expOut");
    const adjOut = document.querySelector("#adjOut");

    const img1 = "images/img1.jpeg";
    const img2 = "images/img2.jpeg";
    const img3 = "images/img3.jpeg";
    const img4 = "images/img4.jpeg";
    const img5 = "images/img5.jpeg";
    const img6 = "images/img6.jpeg";

    const imgArray = [img1, img2, img3, img4, img5, img6];
    const img = document.querySelector("#output-img");
        

    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const friendName = document.querySelector("#fname").value;
        const expression = document.querySelector("#expression").value;
        const celebrity = document.querySelectorAll("#celebrity").value;
        const location = document.querySelector("#location").value;
        const adjective = document.querySelector("#adjective").value;
        const songLyric = document.querySelector("#songLyric").value;
        const actionVerb = document.querySelector("#actionVerb").value;

        nameOut.innerHTML = name;
        celebOut.innerHTML = celebrity;
        locationOut.innerHTML = location;
        verbOut.innerHTML = actionVerb;
        lyricOut.innerHTML = songLyric;
        friendOut.innerHTML = friendName;
        expOut.innerHTML = expression;
        adjOut.innerHTML = adjective;

        document.querySelector("#output-page").className = "showing";
        document.querySelector("#input-page").className = "hidden";
        document.querySelector("header").className = "hidden";

    });

    document.querySelector("#createPost").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#input-page").className = "showing";
    });

    document.querySelector("#next").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#second-set").className = "showing";
        document.querySelector("#share").className = "showing";
        document.querySelector("#first-set").className = "hidden";

        generateRandomImg(imgArray);
    });

    document.querySelector("#prev").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#second-set").className = "hidden";
        document.querySelector("#first-set").className = "showing";
    });

    function generateRandomImg(imgArray) {
        let randomIndex = Math.floor(Math.random() * imgArray.length);
        img.setAttribute("src", imgArray[randomIndex]);
    }

}());