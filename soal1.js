function calculateSquareRoot(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
}
let input = 16; // Ganti dengan angka yang ingin diuji
let result = calculateSquareRoot(input);
console.log(result);





//const prompt = require('prompt-sync')({sigint: true});
//Input angka yg ingin di uji
//const angka = prompt('Input angka:');
//const validAngka= 'angka'
//if(angka < 0 ){
//    console.log("Tidak bisa input bilangan negatif")}

//if (angka % 2 !== 0){
 //   console.log("Tidak bisa input bilangan ganjil")

//}