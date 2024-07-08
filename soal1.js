function calculateSquareRoot(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
}

// Contoh penggunaan
let input = 5; // Ganti dengan angka yang ingin diuji
let result = calculateSquareRoot(input);
console.log(result);
