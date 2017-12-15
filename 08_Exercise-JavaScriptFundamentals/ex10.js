// let array = ['add 3','add 5','remove 1','add 2'];
let array = ['add 3','add 5','remove 2','remove 0', 'add 7'];
let result = [ ];

function removeElements(arr){
    for(let i=0; i<arr.length; i++){
        let currentIndex = arr[i].split(' ');
        if(currentIndex[0] === 'add'){
            result.push(currentIndex[1]);
        }else{
            // result.splice(currentIndex[1]);
            delete result[currentIndex[1]];
        }
    }

    return result;
}



for(let arr of removeElements(array)){
    console.log(arr);
}