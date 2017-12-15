let array = [
    'key value',
    'key eulav',
    'test tset'
]

// let array = [
//     '3 bla',
//     '3 alb'
// ]

let finalArray = [];

for(let item of array){
    let splittedItem = item.split(' ');
    finalArray[splittedItem[0]] = splittedItem[1];

}

// let input= 'key';
// for(let item of finalArray){
//     if(finalArray = item){
//          console.log(finalArray[item]);
//     }
// }

console.log(finalArray['test']);