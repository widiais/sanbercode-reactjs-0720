// Soal 1
// ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var arrayPersertaObj={
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}

console.log(arrayPersertaObj.nama);


// Soal 2
/*
anda diberikan data-data buah seperti di bawah ini

1.nama: strawberry
  warna: merah
  ada bijinya: tidak
  harga: 9000 
2.nama: jeruk
  warna: oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
uraikan data tersebut menjadi array of object dan munculkan data pertama
*/

var dataBuah = [ 
    {nama: "stawberry", warna : "merah", adaBijinya: "tidak", harga: 9000},
    {nama : "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000},
    {nama: "semangka", warna : "hijau & merah", adaBijinya : "ada", harga : 10000 },
    {nama : "pisang", warna : "kuning", adaBijinya : "tidak", harga: 5000}
]

console.log(dataBuah[0]);

// Soal 3
//buatlah variable seperti di bawah ini

var dataFilm = [];
/*buatlah fungsi untuk menambahkan dataFilm tersebut
 yang itemnya object adalah object dengan property nama, durasi , genre, tahun*/

var object = {
    nama : "Spiderman",
    durasi : 90,
    genre : "action",
    tahun : 2000
}

function addFilm(object) {
    dataFilm.push(object);
    return dataFilm

}

console.log(addFilm(object));




 // Soal 4
 class Animal {
    constructor(name, legs, cold_blooded){
        this.name = "shaun"
        this.legs = 4
        this.cold_blooded = false
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
/*
Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal.
Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2,
hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal.
class Ape memiliki function yell() yang menampilkan “Auooo” dan 
class Frog memiliki function jump() yang akan menampilkan “hop hop”.
*/
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name, legs){
    super(name)
    this.legs = 2
    }
    yell(){
        return "Auooo";
    }
}
class Frog extends Animal {
    constructor(name, legs){
    super(name)
    this.legs = 4
    }
    jump(){
        return "hop hop";
    }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.yell()) // "Auooo"

var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop"

// Soal 5

class Clock {
    constructor({template}){
    var timer;
  
    function render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

    }
    
}

  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 

  