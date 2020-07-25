function PB(a,b){
    var c=a/b;
    return (c>=0)? Math.floor(c): Math.ceil(c);
}

console.log(`${a}/${b}=${PB(a,b)}`);