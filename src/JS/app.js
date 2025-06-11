let atual = 0
const totalSlides = 2
const wrapper = document.getElementById("wrapper")

function proximo(){
    if(atual < totalSlides ){
        atual++
        atualiza()
    }
}

function antes(){
    if(atual > 0){
        atual--
        atualiza()
    }
}

function atualiza(){
    const largura = document.querySelector(".noticia").offsetWidth
    wrapper.style.transform = `translate(-${atual * largura}px)`
}