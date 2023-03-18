var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var img6 = document.getElementById("img6")

function trocarFundo(btn) {
    var imgSelecionada = document.querySelector(".aparecer")
    var btnSelecionado = document.querySelector(".selecionado")
    
    btnSelecionado.classList.remove("selecionado")
    btn.classList.add("selecionado")

    imgSelecionada.classList.remove("aparecer")
    console.log(btn.id)
    if (btn.id == "btn1") {
        img1.classList.add("aparecer")
    } else if (btn.id == "btn2") {
        img2.classList.add("aparecer")
    } else if (btn.id == "btn3") {
        img3.classList.add("aparecer")
    } else if (btn.id == "btn4") {
        img4.classList.add("aparecer")
    } else if (btn.id == "btn5") {
        img5.classList.add("aparecer")
    } else if (btn.id == "btn6") {
        img6.classList.add("aparecer")
    }
}