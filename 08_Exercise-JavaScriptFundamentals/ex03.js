let n = 3;
let x = 4;

function multiplyOrDivideNumbers(numN, numX){
    if(x>=n){
        return x*n;
    }
    return n/x;
}

console.log(multiplyOrDivideNumbers(n, x));