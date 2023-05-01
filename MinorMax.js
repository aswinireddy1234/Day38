let ArrayOfValues = new Array();
for(let i = 0; i < 5; i++) {
    ArrayOfValues.push(Math.floor(Math.random() * 1000));
}
console.log((ArrayOfValues.sort()).toString());
let min = ArrayOfValues[0], max = 0;
for(let i = 0; i < ArrayOfValues.length; i++) {
    if(ArrayOfValues[i] > max) {
        max = ArrayOfValues[i];
    }
    else if (ArrayOfValues[i] < min) {
        min = ArrayOfValues[i];
    }
}
console.log("Min = "+min+", Max = "+max);