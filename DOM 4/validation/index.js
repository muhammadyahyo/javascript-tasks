const form = document.forms
console.log(form.g12.elements);


let selectLang = form.g12.languages;
let pswInput = form.g12.password;
let pswValue;
let strength = document.querySelector("#spanPassword")
strength.style.cssText = `
    display: block;
    border-radius: 10px;
    margin-top: 5px;
    transition:  linear 0.5s;
`


let inputValidation =(value) => {
    if(value.length === 0){
        return { message : "", backgroundColor: "white", width: "0%", height: "5px"}
    }
    else if(value.length >= 1 && value.length < 4) {
        return { message : "Ishonchsiz", backgroundColor: "red", width: "25%", height: "5px"}
    } else if(value.length >= 4 && value.length < 8){
        return { message : "O'rta ishonchli", backgroundColor: "yellow", width: "50%", height: "5px"}
    }
    else {
        return { message : "Ishonchli", backgroundColor: "green", width: "100%", height: "5px"}
    }
}

pswInput.addEventListener("input", ({target: {value}}) => {
    strength.style.backgroundColor = inputValidation(value).backgroundColor
    strength.style.width = inputValidation(value).width
    strength.style.height = inputValidation(value).height
    pswValue = value.length;
})


// Submit 
const submitBtn = document.querySelector("#submitForm")

let userValue = form.g12.users.value
form.g12.users.addEventListener("input" , ({target: {value}}) => {
    userValue = value;
})

form.g12.addEventListener("submit", (e)=>{
    // e.preventDefault()
    if(pswValue >=8){
        form.g12.action = `https://jsonplaceholder.typicode.com/users/${userValue}`
    }
    else {
        e.preventDefault()  
        alert("Eng kamida 8ta simvol kiriting")
    }
})















const greeting = document.querySelector("#greeting")

const sayHello = (value) =>{
    switch(value) {
        case "uz": return "Assalomu alaykum";
        case "ru": return "Privet";
        case "eng": return "Hello";
        default: return "Assalomu alaykum";
    }

}

greeting.innerText = sayHello(selectLang.value)

selectLang.addEventListener("input", ({target: {value}}) => {
    greeting.innerText = sayHello(value)

})