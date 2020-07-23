// Soal 1
/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
Jangan lupa tampilkan di console juga judul ‘LOOPING PERTAMA’ dan ‘LOOPING KEDUA’.”
*/
var i = 2;
console.log('LOOPING PERTAMA');
while(i < 22) { 
  console.log(i + ' - I love coding');
  i+=2; 
};

var i = 20;
console.log('LOOPING KEDUA');
while(i > 0) { 
  console.log(i + ' - I will become a frontend developer');
  i-=2; 
};

// Soal 2

/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:
SYARAT:
A. Jika angka ganjil maka tampilkan Santai
B. Jika angka genap maka tampilkan Berkualitas
C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
*/

for(var angka = 1; angka <= 20; angka++){
    if((angka%2)==1 && (angka%3)==0){
      console.log(angka + ' - I love Coding');
    } else if ((angka%2)===0) {
      console.log(angka + ' - Berkualitas');
    } else if (angka%2==1){
        console.log(angka+ ' - Santai')
    }
  };

// Soal 3
for (var i = 0; i < 7; i++) {
    var str = "#######"
    console.log(str.substring(0,i + 1))
}

// Soal 4
  
var kalimat="saya sangat senang belajar javascript"

//   ["saya", "sangat", "senang", "belajar", "javascript"]

var kata = kalimat.split(" ")
console.log(kata)

// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
var x;
for (x of daftarBuah) {
  console.log(x)
}