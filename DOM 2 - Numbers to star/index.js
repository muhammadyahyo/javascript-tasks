const body = document.querySelector("#body")
const div = document.createElement("div")
div.style.cssText = `
    width: 500px;
    height: 500px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;

`
let num = [];

for (let i = 1; i <= 100; i++) {
    num.push(i)
    
}

const click = (arr)=>{
  num.map(e => {
    const button = document.createElement('button')
    button.innerHTML = `${e}`
    button.style.cssText = `
			width: 50px;
			height: 50px;
		`;
    div.append(button)
    button.setAttribute("onclick", `clicked(${e})`)

})  

body.append(div)
}

function clicked(e){
    num = num.map(v => {
        if(v % e === 0){
            return "*"
        } else return v
    })
    div.innerHTML = ""
    click(num)
}

click(num)


