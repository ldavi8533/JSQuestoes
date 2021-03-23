// Qs 10


const numeros = [1, 2, 3, 4, 5, 6] 
    novoArray = numeros.map(e => 2 ** e)
    document.write(novoArray)

    document.write('<br />')

    var somatoria = numeros.reduce((s, v) => s + v)
    document.write(somatoria)

    document.write('<br />')

    var indices = numeros.filter((e, i) => !(i & 1))
    document.write(indices)


    // obs: a ordem esta A,  C & B