var billAmountInput = document.querySelector("#bill-amount");
var cashGivenInput = document.querySelector("#cash-given");
var checkRegister = document.querySelector("#check-bill");
var message = document.querySelector("#message");
var notes = document.querySelectorAll(".notes");

var notesAvailable = [2000, 500, 100, 20, 5, 1];

function displayMessage(msg){
    message.style.display = "block";
    message.innerText=msg;
}

function hideMessage(){
    message.style.display = null;
    message.innerText="";
}

function calculateChange(bill, cash){
    /*set all no_of_notes fields to blank for subsequent reruns 
    (to handle scenarios where no change has to be returned 
    or when the cash given is less than bill amount)*/
    for(var i = 0; i <notesAvailable.length; i++){
        notes[i].innerText = '';
    }

    var amountToBeReturned = cash - bill;
    if(amountToBeReturned === 0){
        displayMessage("No change to be returned");
    }else if(amountToBeReturned < 0){
        //when cash given is less than bill amount
        displayMessage("You wanna try your hands at washing plates mate?");
    }
    else{
        for(var i = 0; i <notesAvailable.length; i++){
            displayMessage("The number of notes to be returned are displayed in the table below");
            notes[i].innerText = Math.trunc(amountToBeReturned / notesAvailable[i]);
            amountToBeReturned %= notesAvailable[i];
        }
    } 
}

function validateBillAmount(){
    var cashGiven = cashGivenInput.value;
    var billAmount = billAmountInput.value;
    hideMessage();
    

    if (isNaN(billAmount) || isNaN(cashGiven)){
        msg = "Please enter valid number values as bill and cash amounts";
        displayMessage(msg);
    } else{ 
        if(billAmount <= 0 || cashGiven <= 0){
            msg = "Please enter a number greater than 0 for bill and cash-given fields ";
            displayMessage(msg);
        }else{
            calculateChange(billAmount, cashGiven);
        }
    } 
}

checkRegister.addEventListener("click", validateBillAmount);

