function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('Menghitung Sisi Miring Segitiga Siku-Siku');
let a=3;
let b=4;
console.log("Masukkan Nilai alas:" +3) ;
console.log("Masukkan Nilai tinggi:" +4) ;

var c=hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);