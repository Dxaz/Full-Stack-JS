// 1. Create a funciton name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
function showCallFunc(fn) {
    const value = 10;
    fn(10);
}
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func
function fn(value){
    console.log(`Value is: ${value}`);
}

showCallFunc(fn)