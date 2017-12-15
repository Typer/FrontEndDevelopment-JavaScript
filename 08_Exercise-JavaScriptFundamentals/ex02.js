let numbers = ['34','53','23','3','5','22'];

function multiplyTwoNumbers(num01, num02) {
    let first = parseInt(num01);
    let second = parseInt(num02);
    return first * second;
}

console.log(multiplyTwoNumbers(numbers[2], numbers[3]));