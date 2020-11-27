function birthdayCakeCandles(candles) {
    let count = 0;
    let sort = candles.sort((a,b) => b - a);
    for(let i = 0; i <= sort.length - 1; i++){
        if(sort[0] === sort[i]){
            count++;
        }
    }
    return count;
}

let payload = [];

// diferent value
let diferentValue = [10,90,26,34,78,77,90,90,90,87]

// same value
let sameValue = 1000;
let length = 100000;
for(let i = 1; i <= length; i++){
    payload.push(sameValue);
}
// custom value 
payload[5] = 999;

console.log(birthdayCakeCandles(diferentValue));