// 1-ex
// let str1 = "webbrain academy"
// let str2 = "acsa"
// function check(str1, str2){
//     if( str1.includes(str2) && (str1.length === str2.length)){
//         console.log("0");
//     }
//     else if(str1.includes(str2)){
//         console.log("1");
//     }
//     else console.log("-1");
// }
// check(str1, str2)



// 2-ex



// 3-ex
// let str = "webbrain academy"

// function truncate(str, n){
//     console.log(str.slice(0,n));

// }

// truncate(str, 5)

// 4-ex
// let str = "$1200"
// function getCurrency(str){
//     if(str.startsWith("$")){
//         console.log(str.slice(1));
//     }
//     else if(str.endsWith("$")){
//         console.log(str.slice(0, -1));
//     }
// }
// getCurrency(str)

// 5-ex
let str = "webbrain academy"

function capitilize(str){
    let a = str.split(" ")
    let str1 = ''
    for(let i = 0; i < a.length; i++){
        a[i] = a[i][0].toUpperCase() + a[i].slice(1)
        str1 = a[i-1]+ " "+ a[i]
    }
   
    console.log(str1);
}

capitilize(str)



// 1-hw
// let str = "33 576 2020"

// if(str.includes("+998")){
//     console.log(str);
// }
// else {
//     console.log(str.padStart(str.length+4 , "+998"));
// }

// 2-hw

// let str = "+998 33 576 2020"

// let a = str.split(" ")
// let b = {
//     country: a[0],
//     region: a[1],
//     city: a[2],
//     code: a[3]
// }
// console.log(b);





