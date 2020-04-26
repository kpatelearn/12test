const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");

submit.addEventListener("click", response);

greetingList = ["Hello", "Hi", "Hey there", "Yo"];

greeting = Math.floor(Math.random() * greetingList.length);

function response() {
    while(botChat.textContent == "What is your name?") {
        user.style.color = "blue";
        botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
        userInput.value = null;
    } 
    
    while(botChat.textContent == "Do you like chocolate? Y or N") {
        user.style.color = "blue";
        if (userInput.value == "Y") {
            botChat.innerHTML = "Excellent!";
        }
        else if (userInput.value == "N") {
            botChat.textContent = "Pity";
        }
        else {
            botChat.textContent = "Please type Y or N.";
            setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
        }
    }
}




