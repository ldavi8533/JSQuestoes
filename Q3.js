//  Qs 3
var data = new Date()
        var mes = data.getMonth()

       switch (data.getMonth()){
        case 0:
            mes = 'janeiro' 
            break
        case 1:
            mes = 'fevereiro'
            break
        case 2:
            mes = 'março'
            break
        case 3:
            mes = 'abril'
            break
        case 4:
            mes = 'maio'
            break
        case 5:
            mes = 'junho'
            break
        case 6:
            mes = 'julho'
            break
        case 7:
            mes = 'agosto'
            break
        case 8:
            mes = 'setembro'
            break
        case 9:
            mes = 'outubro'
            break
        case 10:
            mes = 'novembro'
            break
        case 11:
            mes = 'dezembro'
            break
       }
       document.write(data.getDate() + '/' + mes + '/'+ data.getFullYear())