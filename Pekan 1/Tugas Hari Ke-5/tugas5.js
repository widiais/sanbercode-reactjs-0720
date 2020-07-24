// Soal 1

function halo(){
    return('Halo Sanbers!')
};
 
console.log(halo()); // "Halo Sanbers!" 

// Soal 2

function kalikan(){
    return num1 * num2
};

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali); // 48

// Soal 3

function introduce(name, age, address, hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, ' + 'alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
};
 
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan) ;
// Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 