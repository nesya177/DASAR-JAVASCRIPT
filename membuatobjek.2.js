
class Segitiga{
    //konstruktor
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }

    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }
}

//membaca data alas dan tinggi
let a=3;
let t=4;
console.log("Masukkan Nilai Alas:" +a) ;
console.log("Masukkan Nilai Tinggi:" +t) ;

//membuat objek dari kelas Segitiga
let obj=new Segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas}`);