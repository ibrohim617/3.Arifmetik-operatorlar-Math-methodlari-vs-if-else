let random = Math.random()
let random1 = Math.round(random*30)
let random2 = Math.round(random1/3)
alert('sizga hozir random sonlar chiqishni boshlidi😉')
alert('random orqali chiqqan son; ' +random1)
confirm("biz random sonni 2 ga kopaytirmoqchi va bo'lmoqchimiz !")
alert('random orqali chiqqan son ' 
    +( random1 ) +' edi \n biz uni 2 ga kopaytirib '
     +( random1*2 ) +' sonini chiqazdik \n va shu sonni 2 ga bolib ' 
     +( random1/2 ) +' sonini chiqazdik\n va bu sonni 3 ga bolib '
     + ( random2 ) +' sonini chiqazdik')