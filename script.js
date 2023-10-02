let inputSlider = document.getElementById("inputSlider");
let sliderValue  = document.getElementById("sliderValue");
let passBox  = document.getElementById("passBox");
let lowerCase  = document.getElementById("lowercase");
let upperCase  = document.getElementById("uppercase");
let numbers  = document.getElementById("numbers");
let symbols  = document.getElementById("symbols");
let genBtn  = document.getElementById("genButton");
let copyIcon  = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;/*showing default input slider value which is 8 */
// changing text content of  slider value when we move sider;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener("click",()=>{
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz"; 
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*<>?";
//function to generate password
function generatePassword(){
    
    let genPassword="";

    let allChars ="";
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    
    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    //loop to iterate on sellector bar to run loop again & again upto desired password length
    while(i<= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }

    
    return genPassword;
}

copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText ="check";
        copyIcon.title="Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";
        }, 3000);
    }
    
})
