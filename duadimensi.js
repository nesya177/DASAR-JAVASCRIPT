let siswa=[
    ['1','Adi','Malang'],
    ['2','Budi','Sidoarjo'],
    ['3','Dea','Surabaya']

];

console.log('\t No \t Nama Siswa \t Asal');
console.log('--- \t ------- \t----');
for(let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        console.log(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            console.log(' \t ');
            
        }
    }
    console.log();
}