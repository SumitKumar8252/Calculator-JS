const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars =  ["%", "x", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on buttons clicked.
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        // If output has %, replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if(btnValue === "AC"){
        output =""
    }else if(btnValue === "DEL"){
        // If DEL button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    } else {
        // If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Added event listner to buttons,call calculate() on click 
buttons.forEach((button) => {
    // Buttons click listner calls calculate() with dataset value as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});