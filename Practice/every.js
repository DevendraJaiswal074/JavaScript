let arr = [2,45,4,4];

function checkvalue(arrs){
    return arrs%2==0;
}

let result = arr.every(checkvalue);
console.log(result);