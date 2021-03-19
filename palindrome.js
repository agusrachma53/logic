const dataString = 'sator';
for(let i = 0; i < dataString.length / 2; i++){
    if(dataString[i] != dataString[dataString.length - 1 - i]){
        console.log(false);
    }else{
        console.log(true)
    }
}