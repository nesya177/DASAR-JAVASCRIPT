var readline=require('readline-sync');
var ruang =parseInt(readline.question("Masukkan No Ruangan : "));
var kelas;

switch(ruang){
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
    case 7: 
    case 8: kelas = "Rekayasa Perangkat Lunak" ; break;
    case 9: 
    case 10: 
    case 11: 
    case 12: 
    case 13: 
    case 14: kelas = "Teknik Komputer Jaringan" ; break;
    default:{
        console.log(`Tidak termasuk cluster kelas X`)
    }
}

console.log(`Kelas ${kelas} adalah Ruang ${ruang}`);