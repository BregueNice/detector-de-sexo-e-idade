function verificar() {
    var datapc = new Date()
    var ano = datapc.getFullYear()
    var data = document.getElementById('dataN')
    var res = document.getElementById('res')
    if (data.value.length == 0 || data.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(data.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', './assets/foto-adulto-m.png')
            } else {
                img.setAttribute('src', './assets/foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', './assets/foto-adulto-f.png')
            } else {
                img.setAttribute('src', './assets/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}