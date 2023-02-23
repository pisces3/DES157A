
//open IIFE
(function() {
    "use strict";
    console.log("reading js");

    const p = document.querySelector("#find-coords");
    let html = "";

        document.addEventListener("mousemove", reportPos);
        
        function reportPos(event) {
            const xPos = event.clientX;
            const yPos = event.clientY;
            html = `The mouse is ${xPos} pixels from the left and ${yPos} pixels from the top`;
            p.innerHTML = html;
        }

    const myTop = document.querySelector("area");
    myTop.addEventListener("click", function(){
        alert("You clicked the top");
    });
}()); //close iife