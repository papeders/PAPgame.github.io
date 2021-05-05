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
// I did a lot of reading and testing. I feel like I have an better understanding of objects in arrays.
//I still just need to figure out how to access keys! Any help would be appreciated. 
// let transformerName = document.getElementsByClassName("name");

    // showQuestion();
    // function showQuestion() {    
    //     for ( let i=0; i<transformers.length; i++){
    //         console.log(i, transformers[0]);
    //     }
    // }
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


//declare function for checking answers
    //compare user answer to actual answer
        //correct answer is key value pair in transformers variable (array of objects)
        //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    //using if else statement -- 
        //if correct add score move to next question
        //else dont add score and move to next question 
    //call show question function 

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