function add(numbers){
    if(numbers==="") return 0;
    let delimeters = /,|\n/; //default comma or newline 
    if(numbers.startsWith("//")){
        const temp = numbers.match(/^\/\/(.)\n/);
        delimeters = new RegExp(temp[1]);
        numbers = numbers.slice(4);
    }
    const numArr = numbers.split(delimeters).map(Number);
    if(numArr.filter(i=>i<0).length > 0 ){
        throw new Error("Negative Numbers not allowed");
    }
    if(numArr.length === 1) return numArr[0];
    return numArr.reduce((sum,num) => sum + num, 0);
}

function testEmptyString(){
    console.assert(add("")==0,"Test Failed empty string should return 0")
}

function testSingleNumber(){
    console.assert(add("7")==7,"Test Failed ! If input is single number then output should be same number")
}

function testAddTwoNumber(){
    console.assert(add("2,4")==6,"Test Failed ! 2+4 should be 6 ")
}

function testAddMultipleNumber(){
    // console.log(add("2,3,4,5"))
    console.assert(add("2,3,4,5")==14, "Test Failed ! Invalid Sum ")
}

function testNewLineDelimeter(){
    // console.log(add("2\n3,4"))
    console.assert(add("2\n3,4")==9, "Test Failed ! Invalid Sum ")
}

function testCustomDelimites(){
    console.assert(add("//~\n8~9")===17,`Test for Custom delimiters failed ${add("//~\n8~9")}`);
}

function testNegativeNums(){
    try{
        add("1,-1,2");
    }catch (e) {
        // console.log(e);
        console.assert(e.message==="Negative Numbers not allowed","Failed ! should show negs are not allowed")
    }
}


function runTests(){

    testEmptyString()
    testSingleNumber()
    testAddTwoNumber()
    testAddMultipleNumber()
    testNewLineDelimeter()
    testCustomDelimites()
    testNegativeNums()

    console.log("All Tests Passed ! ")
}

console.log("Working...")
runTests()