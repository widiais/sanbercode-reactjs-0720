// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// output : saya Senang belajar JAVASCRIPT

console.log(
    kataPertama,
    kataKedua.charAt(0).toUpperCase()+kataKedua.slice(1),
    kataKetiga,
    kataKeempat.toUpperCase()
    );

// Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output
console.log(parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14)
var kataKetiga = kalimat.substring(15, 18)
var kataKeempat = kalimat.substring(19, 24)
var kataKelima = kalimat.substring(25, 31)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

/*
selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu
Kata Keempat: keren
Kata Kelima: sekali
*/

// Soal 4

var nilai = 60;

/*
pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi
nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E 
*/
if(nilai>=80){
    console.log('A')
} else if (nilai >= 70 && nilai < 80){
    console.log('B')
} else if (nilai >= 60 && nilai < 70){
    console.log('C')
} else if (nilai >= 50 && nilai < 60){
    console.log('D')
} else {
    console.log('E')
};


// Soal 5

var tanggal = 22;
var bulan = 10;
var tahun = 1988;

/* ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, 
lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)*/


switch (bulan) {
    case 1:
        bulan = " Januari ";
    break;
    case 2:
        bulan = " Februari ";
    break;
    case 3:
        bulan = " Maret ";
    break;
    case 4:
        bulan = " April ";
    break;
    case 5:
        bulan = " Mei ";
    break;
    case 6:
        bulan = " Juni ";
    break;
    case 7:
        bulan = " Juli ";
    break;
    case 8:
        bulan = " agustus ";
    break;
    case 9:
        bulan = " September ";
    break;
    case 10:
        bulan = " Oktober ";
    break;
    case 11:
        bulan = " November ";
    break;
    case 12:
        bulan = " Desember ";
  };

  console.log(tanggal+bulan+tahun)