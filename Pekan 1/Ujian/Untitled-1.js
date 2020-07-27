// Hitung luas persegi

function hitungPersegi (panjang, lebar) {
    return panjang * lebar
  }
  
panjang = 5
lebar= 10
var luasPersegi = hitungPersegi(panjang, lebar);
console.log(luasPersegi) ;

// Hitung luas Segitiga

function hitungSegitiga (alas, tinggi) {
    return 0.5 * alas * tinggi
}
alas = 10
tinggi= 10
var luasSegitiga = hitungSegitiga(alas, tinggi);
console.log(luasSegitiga) ;

// Hitung luas lingkaran
function hitunglingkaran(jari2) {
    return 3.14 * jari2 * jari2
} 

jari2 = 14
var luasLingkaran = hitunglingkaran(jari2)
console.log(luasLingkaran)