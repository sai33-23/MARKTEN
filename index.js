const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturned);

        }else{
            showMessage("The cash proided should alleast be equal to the bill amount")
        }

    }else{
        showMessage("invalid bill amount")
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned%=availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

// function hideMessage(){
//     message.style.display = "none";
// }

function showMessage() {
    message.style.display = "none";
    amountToBeReturned%=availableNotes[i]
}


function hideMessage(msg){
message.style.display = "block";
}
    message.innerText = msg;

// console.log(cashGiven.value)