let field = document.querySelector("#field")
let ball = document.querySelector("#ball")

field.addEventListener("click", (e)=> {
    let fieldCoords = field.getBoundingClientRect();

    console.log(fieldCoords);
   
    let ballCoords = {
      top: e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;


    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    
})
