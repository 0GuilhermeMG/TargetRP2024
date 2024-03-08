function reverse(str){
    return str.split('').reverse().join('');
}

let str = prompt("Informe sua string");

console.log("String normal: ", str);
console.log("String ao contrário: ", reverse(str));