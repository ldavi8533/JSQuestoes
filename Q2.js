// Qs 2

var h = window.prompt('Qual o valor da série harmonica')
k = 1
var soma = 0
for(x = 0; x < h; x++){
    var div = 1/k
    k ++
    soma = soma + div
}
document.write(soma + '<br />')