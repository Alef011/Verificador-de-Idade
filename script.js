function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if(fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados novamente.')
  } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if(fsex[0].checked) {
       genero = 'Homem'
       if(idade >= 0 && idade < 10) {
         img.setAttribute('src', 'menino.png')
       } else if (idade < 21) {
         img.setAttribute('src', 'jovemm.png')
       } else if (idade < 50) {
          img.setAttribute('src', 'adulto.png')
       } else {
          img.setAttribute('src', 'idoso.png')
       }
     } else if (fsex[1].checked) {
       genero = 'Mulher'
       if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'menina.png')
       } else if(idade < 21){
         img.setAttribute('src', 'jovem.png')
       } else if (idade < 50) {
         img.setAttribute('src', 'adulta.png')
       } else {
         img.setAttribute('src', 'idosa.png')
       }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Tu é: ${genero} com a idade de: ${idade}`
     res.appendChild(img)
  }
}