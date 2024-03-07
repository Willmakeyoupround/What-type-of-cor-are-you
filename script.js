let submitButton = document.querySelector(".submit");
let Questions = document.querySelector(".questions");
let dodgeDemon = document.querySelector(".dodgeDemon");
let body = document.querySelector(".body");
let Fortnight = document.querySelector("Fortnight");



submitButton.onclick = function() {
    let presentage = document.querySelector(".presentage").value;
    let answer = document.querySelector(".Roblox").value;
    console.log("hello");
    let comment = document.querySelector(".comment");
        console.log("hello2");
    let stuff = document.querySelector(".stuff");
        console.log("hello3");
    let CadillacEscalade = document.querySelector(".CadillacEscalade").value;
        console.log("hello4");
    let result = document.querySelector(".result");
           console.log("hello5");
    console.log(Number(presentage));
    console.log(Number(presentage) < 50);
    console.log(answer);
    if (Number(presentage) <= 50 && answer === "Roblox") {
        result.innerHTML=" Your battery is " + presentage + " and your faovrite game is " + answer + " so your a Cadillac Escalade! " ;
        console.log("sup2");
    } else if (presentage >= 51 && answer === "Roblox") {
        console.log("sup");
       result.innerHTML = " Your battery is " + presentage + " and your favorite game is " + answer + " so your a Dodge demon! ";
    } else if (presentage <= 50 && answer === "Fortnite") {
        console.log("sup3");
       result.innerHTML=" Your battery is " + presentage + " and your favorite game is " + answer + " so your an old Honda Civic! ";
    } else if (presentage >= 51 && answer === "Fortnite") {
    result.innerHTML=" Your battery is " + presentage + " and your favorite game is " + answer + " so your an old Toyota Camry! ";
    }
    

 };