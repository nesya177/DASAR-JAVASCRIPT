class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }

    cetakPropert(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tinggi\t:${this.tingi}`);
    }
}
class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);
        this.warna=w;
    }

    cetakPropert(){
        super.cetakPropert();
        console.log(`warna\t:${this.warna}`);
    }
}
//membaca data alas dan tinggi
let a=3;
console.log("Masukkan Nilai alas:" +a) ;
let t=4;
console.log("Masukkan Nilai tinggi:" +t) ;
let obj=new SegitigaWarna(a,t,'merah');
obj.cetakPropert;

//memanggil metode luas
console.log(`luas\t${obj.luas()}`);