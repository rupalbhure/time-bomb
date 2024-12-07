let diffuserEl = document.getElementById("diffuser");

let timerEl = document.getElementById("timer");

let myImgEl = document.getElementById("myImg");

let counter = 10;

let intervalId = setInterval(() => {

    counter = counter - 1;
    
    timerEl.textContent = counter;

    if(counter === 0){

        clearInterval(intervalId);

        myImgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BoBGJ-mttq-KYXqA8hQkMPAfczwpeq78mg&s";
   
        timerEl.style.display = "none";

     }
    
}, 1000);



function onDiffuseBomb(){


    let userVal = diffuserEl.value;

   if(userVal === "diffuse" && counter > 0){

        clearInterval(intervalId);

        myImgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo9eCywcTzJSlPd6Rp4IrNjFIR0x9DqAE4Q&s";
   
        timerEl.style.display = "none";

   }
   else{

        clearInterval(intervalId);

        myImgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BoBGJ-mttq-KYXqA8hQkMPAfczwpeq78mg&s";
   
        timerEl.style.display = "none";

   }






}