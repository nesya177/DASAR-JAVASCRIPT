let a=2;
let b=4;
let c;
console.log("Masukkan Nilai A:" +2) ;
console.log("Masukkan Nilai B:" +4) ;

if(b===0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);