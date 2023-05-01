let dd = 20 
let mm = 02

if (mm == 03) {
    if(dd >= 20){
        console.log(true);
    }else{
        console.log(false);
    }
} else if(mm == 04 || mm == 05){
    console.log(true);
} else if( mm == 06){
    if(dd <= 20){
        sconsole.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log(false);
}
