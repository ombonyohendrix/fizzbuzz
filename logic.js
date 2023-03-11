for (i = 1; i<=100; i++) {
    let outPut = "";

    if (i % 3 === 0) {
        outPut += "Fizz";
    }
    if (i % 5 === 0) {
        outPut += "Buzz";
    }
    if(i % 3 ===0 && i % 5 ===0){
        outPut += "FizzBuzz";
    }
    console.log(outPut || i);
}