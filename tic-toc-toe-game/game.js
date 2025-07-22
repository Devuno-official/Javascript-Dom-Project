let boxes = document.querySelectorAll('.bcell');
let btn = document.getElementById('reset-button');
let winX = document.getElementById('win-x');
 ;
let player = true; // true for X, false for O

const parttens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

  boxes.forEach(box => {
         box.addEventListener("click",function (){
            if(box.classList.contains("played")) return; // Prevent further clicks 
            if(player){
                box.innerText ="X";
                player = false;
            }else{
                box.innerText ="O";
                player = true;
            }
            box.classList.add("played"); // Mark as played
            winingpartten();
    });
});
 

function winner(p1){
    winX.innerText = `${p1}`;
    if(p1 === "X") {
       player = true; // Reset player to X
    }else {
       player = false; // Reset player to O
    }
}


  function winingpartten(){
    for(let partten of parttens){
     let p1 = boxes[partten[0]].innerText;
     let p2 = boxes[partten[1]].innerText;
     let p3 = boxes[partten[2]].innerText;
     if (p1 != "" && p2 != "" && p3 != "") {
            if(p1 === p2 && p2 === p3){
                winner(p1);
                 
            }
       }

    }    
}


btn.addEventListener("click",function (){
    boxes.forEach(box =>{
         box.classList.remove("played");
         box.innerText = "";
    });
    winX.innerText = " ";
    player = true; // Reset player to X
});
