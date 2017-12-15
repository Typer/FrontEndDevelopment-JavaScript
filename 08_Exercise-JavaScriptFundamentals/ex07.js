// let array = ['3','6','5','4','Stop','10','12'];
let array = ['Line 1','Line 2','Line 3','Stop','Line 1','Line 1'];

function printLines(arrays){
    for(let i=0; i<arrays.length; i++){
        let str = arrays[i].split(" ");
        if(str[0] == "Stop"){
            break;
        }
        console.log(arrays[i]);
    }
}

printLines(array);