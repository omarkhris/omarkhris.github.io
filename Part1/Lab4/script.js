function findMax(v1, v2){
    if(v1>v2)
    return v1;
    else return v2;
}



function expectedOutput(value, expected){
    if(value === expected)
    return "TEST SUCCEEDED";
    else return "Falied, Expected " + expected + "found " + value ;
}


console.log( "Expected output of max(20,10) is 20 " + expectedOutput(findMax(10,20),20));

// console.log(maxOfThree(10,20,55));

console.log("Expected output of maxOfThree(5,4,44) is 44 " + expectedOfThree(maxOfThree(5,4,44), 44));

console.log("Expected output of maxOfThree(55,4,44) is 55 " + expectedOfThree(maxOfThree(55, 4, 44), 55));

console.log("Expected output of maxOfThree(55,4,44) is 55 " + expectedOfThree(maxOfThree(55,4,44), 4));



function maxOfThree(v1, v2, v3){
    var v = findMax(v1,v2);
    if(v > v3)
    return v;
    else
    return v3;
}

function expectedOfThree(value, expected){
    if(value === expected)
    return "TEST SUCCEEDED";
    else return "Falied , Expected " + expected + " found " + value;
}