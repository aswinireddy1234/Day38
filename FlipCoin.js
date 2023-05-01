let headCount = 0;
let tailCount = 0;

while(headCount < 11 && tailCount < 11){
    let n = Math.floor(Math.random() * 10) % 2;
    if (n == 0) {
        headCount++;
    } else {
        tailCount++;
    }
}
console.log("headCount = ",headCount);
console.log("tailCount = ",tailCount);