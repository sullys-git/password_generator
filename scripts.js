const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.getElementById("generate-password-btn")
let password1Display = document.getElementById("password1-display")
let password2Display = document.getElementById("password2-display")

password1 = ""
generatePasswordBtn.addEventListener("click", function(){
    let password1 = ""
    let password2 = ""
    for( let i = 0; i < 15; i ++ ) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    password1Display.textContent = password1
    password2Display.textContent = password2
})
