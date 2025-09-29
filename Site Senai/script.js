let slideIndex = 1
showDivs(slideIndex)
function plusDivs(n){showDivs(slideIndex += n)} //setas
function currentDiv(n){showDivs(slideIndex = n)}
function showDivs(n){
    let i
    let slides = document.getElementsByClassName('slide')
    let dots = document.getElementsByClassName('dot')
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    } //esconder slides
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active')
    } //remove a cor dos pontos
    slides[slideIndex -1].style.display = 'block'
    dots[slideIndex -1].classList.add('active')
}