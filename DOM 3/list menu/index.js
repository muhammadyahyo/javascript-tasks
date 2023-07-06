import data from './mock.js'

let info = data;

let div = document.querySelector("#section")
let ul = document.querySelector("#ul")

let displayData =(info) => {
    
    info.forEach((vl,i) => {
        let li = document.createElement("li")
        let h = document.createElement("h2")
        let p = document.createElement("p")
        let div1 = document.createElement("div")
        let btn = document.createElement("button")
        btn.innerText = "X"
        btn.style.cssText = `
            width: 30px;
            height: 30px;
            padding: 5px;
        `
        btn.onclick =()=> change(vl.id)

        h.append(vl.h1)
        p.append(vl.p)

        div1.append(h)
        div1.append(p)

        li.append(div1)
        li.append(btn)

        li.style.cssText = `
            display: flex;
            border: 1px solid black;
            background-color: gray;
            margin: 10px 0;
        `

        ul.append(li)
        div.append(ul)
    });

}

displayData(info)

function change(n){
    console.log(n);
    info = info.filter((vl, i) => vl.id !== n)
    ul.innerHTML = ""
    displayData(info)
}