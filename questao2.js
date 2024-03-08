function isFibonacci(n) {
    if (n === 0 || n === 1) {
        return true;
    }

    
    let a = 0;
    let b = 1;
    let c = a + b;

    
    while (c <= n) {
        if (c === n) {
            return true;
        }
        
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

function main() {
    let number = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

    if (isFibonacci(number)) {
        alert(number + " pertence à sequência de Fibonacci.");
    } else {
        alert(number + " não pertence à sequência de Fibonacci.");
    }
}

main();
