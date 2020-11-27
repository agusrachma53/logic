

    /*

    NOTE
    =============================
    * Fungsi ini di peruntukan untuk menjumlahkan value dala array
    * Value tersebut akan di jumlahkan keseluruhan dengan tidak mengikut sertakan 
    * setiap value 
    * exp : [ 1, 2, 3, 4, 5 ] = Jumlahkan [ 2, 3, 4, 5 ] tanpa mengikut
    * sertakan angka 1, hal ini berlaku untuk semua value 

    */


    let arr = [7,69,2,221,8974]
    let arrRes = [];
    for(let i = 0; i <= arr.length - 1; i++){
        let sum = 0;
         for(let j = 0; j <= arr.length - 1; j++){
             if(arr[i] !== arr[j]){
                sum = sum + arr[j];
             }
         }
         arrRes.push(sum);
    }
    let sort = arrRes.sort();
    console.log(sort)
    console.log(`${sort[0]} ${sort[sort.length - 1]}`)