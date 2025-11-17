const columns = document.querySelectorAll('.column');
const addButtons = document.querySelectorAll('.add-btn');
let draggedCard = null;

//adiciona evento aos botões para criar o card
addButtons.forEach(btn =>{
    btn.addEventListener('click', () => {
        const text = prompt('Digite um titulo para o card: ')
        if(text){
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = text;
            makeDraggable(card);
            btn.parentNode.insertBefore(card, btn);//adiciona antes do botão

        }
    });
});
//função para deixar o card arrastável
function makeDraggable(card){
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
    card.setAttribute('draggable', 'true')
}
function dragStart(e){ //iniciar a opção de arrastar
    draggedCard = this
    setTimeout(() => (this.style.display = 'none'), 0)
}
function dragEnd(e){ //finalizar a opção de arrastar
    this.style.display = 'block'
    draggedCard = null
}
//eventos nas colunas
columns.forEach(col => {
    col.addEventListener('dragover', dragOver);
    col.addEventListener('dragenter', dragEnter);
    col.addEventListener('dragleave', dragLeave)
    col.addEventListener('drop', drop)
})
function dragOver(e){e.preventDefault()}
function dragEnter(e){this.classList.add('highlight')}
function dragLeave(e){this.classList.remove('highlight')}
function drop(e){
    this.classList.remove('highlight')
    this.insertBefore(draggedCard, this.querySelector('.add-btn'))
}