let valores = [8,1,3,6,2,7] 

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

key = valores.indexOf(7)

console.log(`A chave do 7 é ${key}`)

valores.sort()
console.log('Organizou')

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

key = valores.indexOf(7)

console.log(`A chave do 7 é ${key}`)