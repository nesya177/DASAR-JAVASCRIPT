class Aritmatika{
    static tambah(a,b){
        return a+b;
    }
}

//membaca data a dan b
let a=3;
let b=4
console.log("Masukkan Nilai a:" +3) ;
console.log("Masukkan Nilai b:" +4) ;
//memanggil metode statis
console.log(`${a}+${b}=${Aritmatika.tambah(a,b)}`);