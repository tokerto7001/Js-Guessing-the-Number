// Creating a new random number
const randomNumber = Math.ceil(Math.random()*100)

// Getting the input from the user
const insertion = document.querySelector("#insertedNumber")


// Catching the button
let button = document.querySelector("#btn")

// Calculating remaining number of attempts
const attempts = document.querySelector("#attempts")
let count = 5;
attempts.textContent = "Number of attempts:" + count
const reload = () => {
    location.reload()
}


const clickButton = (e) => {
    e.preventDefault();
    count -= 1
    attempts.textContent = "Number of attempts:" + count
    
    if(parseInt(insertion.value) > randomNumber){
        alert("Go down")
        
    }else if(parseInt(insertion.value) == randomNumber && count > 0){
        alert("Right there")
        document.body.innerHTML = "<div style='padding:70px'><h1 style='text-align:center'>CONGRATS</h1><div>"
    }else {
        alert("Go up")
    }
    insertion.value = null;
    if (count == 0) {
        alert("You have no options")
        document.body.innerHTML = "<div> <h1> You Lost </h1> </div>"
        let button = document.createElement("button")
        button.textContent = "Yeniden Dene"
        document.body.appendChild(button)
        button.addEventListener("click", reload)
        
    }
}
const hoverButton = () => {
    button.style.cursor = "pointer"
}

button.addEventListener("click",clickButton)
button.addEventListener("mouseover",hoverButton)



