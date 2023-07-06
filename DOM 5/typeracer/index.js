let title = document.querySelector("#title")
let inp = document.querySelector("#inp")
let count = document.querySelector("#count")
let btn = document.querySelector("#btn")
let content = title.innerText
let wordCount = 0;
let range = new Range()

inp.addEventListener("input", (e)=>{
    const span = document.createElement("span")
    span.style.fontWeight = "bold"
    if(e.target.value === title.innerText.slice(0, e.target.value.length)){
        if(wordCount >= e.target.value.length){
            wordCount = e.target.value.length;
        }
        span.style.color = "green";
        wordCount++;
        count.innerText = wordCount;
    }   else span.style.color = "red"
    title.innerText = content;
    range.setStart(title.firstChild, 0);
    range.setEnd(title.firstChild, e.target.value.length)
    range.surroundContents(span)
});

let time = document.querySelector("#time")
let t = 60
inp.addEventListener("focus", (e)=>{
    
    setInterval(()=>{
      --t;
      time.innerText = t  
    }, 1000) 
    if (t=== 0) {
        clearInterval()
        inp.disabled = true;
        alert("Vaqt tamom bo'ldi")
    }
    
})

btn.addEventListener("click", (e) => {
    location.reload()
})

