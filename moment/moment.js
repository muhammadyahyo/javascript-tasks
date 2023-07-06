function moment(){
    return {
        format(val){
            let date = new Date()
            let month = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

            if(val === 'LT'){
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes} ${ampm}`;

                return strTime;
            }

            else if(val === "LTS"){
                let hours = date.getHours();
                let minutes = date.getMinutes();   
                let seconds = date.getSeconds() 
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
                // console.log(seconds);
                return strTime;
            }

            else if(val === "L"){
                return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
            }

            // else if( val === 'l'){

            // }
            else if(val === "LL"){
                return `${month[ date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
            }
            else if(val === "ll"){
                return `${month[ date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`
            }

            else if(val === "LLL"){
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes} ${ampm}`;
                return `${month[ date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}  ${strTime}`

            }
            else if(val === "lll"){
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes} ${ampm}`;
                return `${month[ date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${strTime}`

            }

            else if(val === "LLLL"){
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes} ${ampm}`;
                return `${days[date.getDay()]}, ${month[ date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${strTime}`

            }
            else if(val === "llll"){
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'PM' : 'AM';

                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                const strTime = `${hours}:${minutes} ${ampm}`;
                return `${days[date.getDay()].slice(0,3)}, ${month[ date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${strTime}`

            }
        }
    }
}

// moment().format()
// console.log( moment().format('LT'))    // 12:13 PM
// console.log(moment().format('LTS'));   // 12:35:35 PM
// console.log( moment().format('L'))     // 05/16/2023
// console.log( moment().format('l'))    // 5/16/2023
// console.log(  moment().format('LL'))    // May 16, 2023
// console.log( moment().format('ll'))    // May 16, 2023
// console.log( moment().format('LLL'))   // May 16, 2023 12:13 PM
// console.log( moment().format('lll'))   // May 16, 2023 12:13 PM
// console.log( moment().format('LLLL'))  // Tuesday, May 16, 2023 12:13 PM
// console.log( moment().format('llll'))  // Tue, May 16, 2023 12:13 PM