// function sum(n) {
//     var v = function(x) {
//       return sum(n + x);
//     };
  
//     v.valueOf = v.toString = function() {
//       return n;
//     };
  
//     return v;
//   }
  
//   console.log(+sum(1)(2)(3)(4));
// sum(1)(2);

// function sum(a) {

//     let currentSum = a;
  
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
  
//     f.toString = function() {
//       return currentSum;
//     };
  
//     return f;
//   }

//   console.log(sum(1)(2)(3)(4));
function add(a) {
    let curry = (b) => {
      a += b
      console.log(+curry);
      return curry
    }

    curry.toString = () => a
    return curry
  }

  console.log(+add("1")("2")(3)(4))


 
