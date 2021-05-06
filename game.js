const transformers = [
    {
        transformer: "Optimus Prime" , 
        faction: "Autobot" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Arcee" , 
        faction: "Autobot" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Megatron" , 
        faction: "Decepticon" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Starscream" , 
        faction: "Decepticon" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Ironhide" , 
        faction: "Autobot" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Soundwave" , 
        faction: "Decepticon" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Bumblebee" , 
        faction: "Autobot" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Laserbeak" , 
        faction: "Decepticon" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Bonecrusher" , 
        faction: "Decepticon" ,
        cybertron: ["Autobot", "Decepticon"]
    },
    {
        transformer: "Ratchet" , 
        faction: "Autobot" ,
        cybertron: ["Autobot", "Decepticon"]
    },
]
let transformerName = document.querySelector(".name");
let f = 0;
let finishedOptimus = false
let score = document.querySelector(".score");
let currentScore = 0;

showQuestion();
displayScore()

function addScore(){
    currentScore++;
}
function displayScore(){
    score.textContent = `${currentScore}/${transformers.length}`
}

function showQuestion() { 
    if (finishedOptimus){
        f+=1 
    }
    if (f >= transformers.length){
        transformerName.innerHTML = "Good Game!";
        alert("Game Over! You played well, just rememember:\r\nSometimes even the wisest of man or machine can make an error.\r\n-Optimus Prime")
    } else {
    transformerName.innerHTML = transformers[f].transformer;   
}
} 

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", checkAnswer)
function checkAnswer(){  
    let selectedValue = "";
    const rbs = document.querySelectorAll('input[name="transformer"]')
    for (const rb of rbs){
        if (rb.checked){
            selectedValue = rb.value;
            break;
        }
    }
    console.log(f)
    if(f <10 && selectedValue == transformers[f].faction){
    addScore();
    displayScore();
    finishedOptimus = true
    } else {
        (f <10 && selectedValue != transformers[f].faction)
        alert("Not quite! On to the next...")

    }
    showQuestion();
}







// { 
//     if (finishedOptimus){
//         f+=1 
//     }
//     if (f >= transformers.length){
//         transformerName = "Good Game!"
//     } else {
//     transformerName.innerHTML = transformers[f].transformer;   
// }
// }





// if( f === 0){
    //     f+=1
    // }
 //compare user answer to actual answer
//declare function for checking answers  

     // for ( let i=0; i<transformers.length; i++){      
    // }
  // console.log(selectedValue)
    // console.log(transformers[0].faction)
        //correct answer is key value pair in transformers variable (array of objects)
        //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    //using if else statement -- 
        //if correct add score move to next question
        //else dont add score and move to next question 
    //call show question function 
// let selectedValue = ""
// submitButton.onclick = function (){

//     alert(selectedValue);
// }




    // ============= Code graveyard
// console.log(transformers[t].faction)
// console.log(transformers[f].transformer);
    //console.log(transformers[0])
        // for( let transformer of transformers){
        //     console.log(transformer);
        // }
//             let transformer = transformers[i].transformer;
//             if (transformerName <0){
//         document.write(transformer);
//             }else

//     }
// }

// The folowing code populated the names, but not in the div. 
// Instead it populated to the left below my container. 
//     showQuestion();
//     function showQuestion() {    
//             for ( let i=0; i<transformers.length; i++){
//             let transformer = transformers[i].transformer;
//             document.write(transformer);
//         populate transformerName
//     }
// }
// console.log("I'm here.");




// RANDOM CODE.
// for (let i=0; i>transformers.length; i++){
// let transformer = transformers[i].transformer
// showQuestion();
// const showQuestion = function() {
//     transformerName.innerText = transformer;
// }
// }

// const startQuiz = document.getElementsByClassName("startGame");
// startQuiz.addEventListener("click", showQuestion);

// let transformerName = document.getElementsByClassName("name");
// const changeTransformerName = function(name){
//     document.body.style.innerText = transformer
// }

//     showQuestion();
//     function showQuestion() {    
//         for ( let i=0; i<transformers.length; i++){
//             let transformer = transformers[i].transformer;
//         transformerName.write(transformer);

//     }
// }
// transformers.forEach(function(element){
//     console.log(element)
// })
// const showProps = function(transformer, faction){
//     for (let transformers in transformer) {
//         console.log(`${faction}.${transformers} = ${transformer[faction]}`)
//     }
// }
// showProps(transformers)
// console.log(transformers)