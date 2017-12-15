let students = [
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
];

let finalInfo = [];

for(let student of students){
    let studentObject = JSON.parse(student);
    finalInfo.push(studentObject);
}

for(let student of finalInfo){
    console.log(student.name);
    console.log(student.age);
    console.log(student.date);
}


