let strn = 'Negative';
let strp = 'Positive';

function  productOfThreeNumbers(x,y,z){
    if((x*y*z)<0){
        return 1;
    }

    return 0;
}

if(productOfThreeNumbers(2,3,-1)==1){
    console.log(strn);
}else{
    console.log(strp);
}
