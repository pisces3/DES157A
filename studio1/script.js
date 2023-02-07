//Open IIFE

(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("form");

    myForm.addEventListener("submit", function(e) {
        e.preventDefault();

    });
}());