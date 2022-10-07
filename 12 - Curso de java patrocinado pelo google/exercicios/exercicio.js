

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
  

  

    msg.innerHTML = `Agora são ${hora} horas .`
 
    if( hora >= 0 && hora < 12){
       img.src= 'manha.jpg'
       window.document.body.style.background = '#ffdd68'
       
     
       

    }else if(hora >= 12 && hora < 18){
        img.src= 'tarde.jpg'
        window.document.body.style.background = '#d19096'

        }else{
        img.src = 'noite.jpg'
        window.document.body.style.background = '#1100fa'  }
}
