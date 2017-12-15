let students = [
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
];

    let finalInfo = [];

for(let student of students){
    let studentInfo = student.split(' -> ');
    let studentObject = {
        name: studentInfo[0],
        age: studentInfo[1],
        grade: studentInfo[2]
    }
    finalInfo.push(studentObject);
}

for(let student of finalInfo){
    console.log('Name: ' + student.name);
    console.log('Age: ' + student.age);
    console.log('Grade: ' + student.grade);
}