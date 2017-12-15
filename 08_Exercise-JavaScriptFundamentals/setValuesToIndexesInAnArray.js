let array = ['34','53','23','3','5','22'];

function setValuesToIndexesInArray(array) {
    let length = Number(array[0]);
    let secondArray = new Array(length).fill(0);
    for (let i = 1; i < array.length; i++) {
        let tokens = array[i].split(' ');
        let index = Number(tokens[0]);
        let value = Number(tokens[2]);
        secondArray[index] = value;
    }
}

for (let num of secondArray) {
    console.log(num);
}
