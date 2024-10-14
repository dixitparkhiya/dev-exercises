function add(numbers){
    if(numbers==="") return 0;
    const numArr = numbers.split(",").map(Number);
    if(numArr.length === 1) return numArr[0];
}

function testEmptyString(){
    console.assert(add("")==0,"Test Failed empty string should return 0");
}

function testSingleNumber(){
    console.log(add("7"));
    console.assert(add("7")==7,"Test Failed ! If input is single number then output should be same number");
}

console.log("Working...")
testEmptyString()
testSingleNumber()