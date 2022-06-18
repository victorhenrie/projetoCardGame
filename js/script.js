let images = ['plant1', 'plant2', 'plant3', 'plant4', 'plant5', 'plant6', 'plant7']




//EMBARALHA ARRAY
images.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

//SELECIONAR AS IMAGENS
let imagesSelected = []
function selectImages() {
    for (let i = 0; i < (numberCards/2); i++) {
        imagesSelected.push(images[i])
        imagesSelected.push(images[i])
    }
}

// DISTRIBUIR CARTAS
const container = document.querySelector('.container')

function dealCards() {
    imagesSelected.sort(comparador)
    index = 0
    while (index < imagesSelected.length) {
        container.innerHTML += `
        <div onclick="select(this)" class="card">
        <img class = "front" src="./image/plantFront.png" alt="">
        <img class="back hidden" src="./image/${imagesSelected[index]}.gif">
        </div>
    `
    index ++
    }
}

// VIRAR IMAGEM

function select (element) {
    let front = element.querySelector('.front');
    let back = element.querySelector('.back');
    var verify = front.classList.contains('front');
    if (verify) {
        element.classList.toggle('turn');
        back.classList.remove('hidden')
        front.classList.add('hidden')
    }

}

//SELECIONA O NUMERO DE CARTAS
let numberCards
let numberCardsVerify = true

while (numberCardsVerify) {
    if(numberCards < 4 || numberCards > 14 || numberCards%2 !== 0) {
        numberCards = prompt ('Escola um número par entre 4 e 14')
    }
    else {
        numberCardsVerify = false
        selectImages()
        dealCards()
    }
}

