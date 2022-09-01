function changeMenuLayout(){
    const btnCol = document.querySelector('.btn-group-vertical')
    btnCol.classList.remove('btn-group-vertical')
}

function changeListItems(){
    const itemsList = document.querySelector('.list-group')
    const listChildren = itemsList.children

    const outputList = Array.from(listChildren)
    outputList[0].classList.remove('active')
    
    const forthElement =  document.createElement('li')
    forthElement.classList.add('list-group-item')
    forthElement.classList.add('active')
    forthElement.innerText = 'Quarto item'
    
    const fifthElement =  document.createElement('li')
    fifthElement.classList.add('list-group-item')
    fifthElement.innerText = "Quinto item"
    
    itemsList.appendChild(forthElement)
    itemsList.appendChild(fifthElement)
}

function changeHeaderStyle(){
    const button = document.querySelector('.btn-primary')
    button.classList.add('btn-success')
    button.classList.remove('btn-primary')
    const container = document.querySelector('.jumbotron')
    container.classList.add('bg-secondary')
    container.classList.add('text-white')
    container.classList.add('text-right')
}

function changeCards(){
    const cards = document.querySelectorAll('.col-lg-3')
    const cardList = Array.from(cards)
    const carryHTML = []
    cardList.forEach(item=> carryHTML.push(item.innerHTML))
    cardList[0].innerHTML = carryHTML[3]
    cardList[1].innerHTML = carryHTML[0]
    cardList[2].innerHTML = carryHTML[2]
    cardList[3].innerHTML = carryHTML[1]

    const secondCardBnt =  cardList[1].querySelector('a')
    secondCardBnt.classList.add('btn-success')
    secondCardBnt.classList.remove('btn-primary')

}




changeListItems()
changeMenuLayout()
changeHeaderStyle()
changeCards()