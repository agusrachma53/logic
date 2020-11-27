

/*

NOTE
=============================
* Fungsi ini di peruntukan untuk menjumlahkan value dala array
* Value tersebut akan di jumlahkan keseluruhan dengan tidak mengikut sertakan 
* setiap value 
* exp : [ 1, 2, 3, 4, 5 ] = Jumlahkan [ 2, 3, 4, 5 ] tanpa mengikut
* sertakan angka 1, hal ini berlaku untuk semua value 
* exp : [5, 5, 5, 5, 5] = 20 || karena perhitungan nya selalu menghilangkan 1 angka

*/

let arr = [5, 5, 5, 5, 5]
let arrRes = [];
for (let i = 0; i <= arr.length - 1; i++) {
    let allEqual = arr => arr.every(v => v === arr[0])
    let sum = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
        if (allEqual(arr) === true) {
            if (j < arr.length - 1) {
                sum = sum + arr[j];
            }
        } else {
            if (arr[i] !== arr[j]) {
                sum = sum + arr[j];
            }
        }
    }
    arrRes.push(sum);
}
let sort = arrRes.sort();
console.log(sort)
console.log(`${sort[0]} ${sort[sort.length - 1]}`)