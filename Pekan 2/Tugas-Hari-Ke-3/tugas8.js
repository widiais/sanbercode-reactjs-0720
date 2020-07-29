// soal 1
const phi = 3.14
let hitungLuas = r => {
    l = phi * r * r
    console.log(l)
}

hitungLuas(14);

let hitungKeliling = r => {
    k=  2 * phi * r
    console.log(k)
}

hitungKeliling(14)

// Soal 2
let kalimat = ""

const kata1 ='saya'
const kata2 = 'adalah'
const kata3 = 'seorang'
const kata4 = 'frontend'
const kata5 = 'developer'

kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;

console.log(kalimat)

// soal 3

class Book {
    constructor (name, totalPage, price){
        this.name = name;
        this.totalPage = page;
        this.price  = price;
    }
}

class Book {
    constructor (name, totalPage, price){
        this.name = name;
        this.page = totalPage;
        this.price  = price;
    }
};

myBook = new Book("titanic", 100, 100000);

class Comic extends Book {
    constructor (name, totalPage, price, isColorful){
        super(name);
        this.page = totalPage;
        this.price = price;
        this.color = isColorful
    }
}

myComic = new Comic ("naruto", 500, 20000, true)

console.log(myComic)