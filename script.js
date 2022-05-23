function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('Houve um erro! Verifique os dados e tente novamente!')
    }
    else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked) {
           gênero = 'Homem'

        if( idade >=0 && idade < 10) {
        img.setAttribute('src', 'bebe-masculino.jpeg')
        }
        else if (idade < 21) {
            img.setAttribute('src', 'homem-jovem.jpeg')
        }

         else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'homem-adulto.jpeg')
         }

         else if ( idade > 50) {
            img.setAttribute('src', 'homem-idoso.jpeg')
         }
       }
       else if (fsex[1].checked) {
           gênero = 'Mulher'
           if( idade >=0 && idade < 10) {
            img.setAttribute('src', 'bebe-feminina.jpeg')
        }
        else if (idade < 21) {
            img.setAttribute('src', 'mulher-jovem.jpeg')
        }

         else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'mulher-adulta.jpeg')
         }

         else if ( idade > 50) {
            img.setAttribute('src', 'mulher-idosa.jpeg')
         }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}