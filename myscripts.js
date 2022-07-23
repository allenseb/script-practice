let bodyText = ""
let firstName = ""
let lastName = ""
let userPrompt = "Your full name is: "

// Create two inputs
// on button click add first name and second name to the end of userPrompt
// display final userPrompt with fullname to the user

// html 2 inputs, 1 button, 1 label for userPrompt

// function doStuff() {
//     //document.getElementById("title").innerHTML = "fuck you and your money"
//     bodyText += document.getElementById("namingBox").value
//     document.getElementById("title").innerHTML = bodyText

// }

function doStuff() {
    firstName = document.getElementById("firstNameInput").value
    
    lastName = document.getElementById("lastNameInput").value
    
    userPrompt = "Your full name is " + firstName + " " + lastName
    document.getElementById("userPrompt").innerHTML = userPrompt
}