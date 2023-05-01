function drgFToDegC(tempF){
    let tempC = (tempF - 32) * 5/9;
    console.log(tempC);
}

function drgCToDegF(tempC){
    let tempF = (tempC * 9/5) + 32;
    console.log(tempF);
}
drgFToDegC(98.8);
drgCToDegF(36);