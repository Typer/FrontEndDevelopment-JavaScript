let studentInfo = [
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
];

let index0 = studentInfo[0].split(' -> ');
let index1 = studentInfo[1].split(' -> ');
let index2 = studentInfo[2].split(' -> ');
let index3 = studentInfo[3].split(' -> ');
let index4 = studentInfo[4].split(' -> ');
let index5 = studentInfo[5].split(' -> ');

let object = {
    name: index0[1],
    surname: index1[1],
    age: index2[1],
    grade: index3[1],
    date: index4[1],
    town: index5[1]
}

let objectToJson = JSON.stringify(object);
console.log(objectToJson);
