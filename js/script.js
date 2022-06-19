let images = ['plant1', 'plant2', 'plant3', 'plant4', 'plant5', 'plant6', 'plant7']




//EMBARALHA ARRAY
images.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

//SELECIONA AS IMAGENS
let imagesSelected = []
function selectImages() {
    for (let i = 0; i < (numberCards / 2); i++) {
        imagesSelected.push(images[i])
        imagesSelected.push(images[i])
    }
    imagesSelected.sort(comparador)
}

// DISTRIBUIR CARTAS
const container = document.querySelector('.container')

function dealCards() {
    container.innerHTML = ''
    for (let i = 0; i < imagesSelected.length; i++) {
            container.innerHTML += `
            <div onclick="select(this)" class="${i} ${imagesSelected[i]} card ">
            <img class = "front" src="./image/plantFront.png" alt="">
            <img class="back hidden" src="./image/${imagesSelected[i]}.gif">
            </div>
            `
    }
}

// VIRAR IMAGEM
let movementCounter = 0
let cardsTurned = 0
let totalCardsTurned = 0

let card1
let image1
let id1

let card2
let image2
let id2

function select(element) {
    let front = element.querySelector('.front');
    let verify = front.classList.contains('front hidden');

    function turn(element) {
        element.classList.add('turn');
        setTimeout(function (){
            element.querySelector('.back').classList.remove('hidden')
            element.querySelector('.front').classList.add('hidden')
        }, 250)
    }

    function turnoff(element) {
        element.classList.remove('turn');
        setTimeout(function (){
            element.querySelector('.back').classList.add('hidden')
            element.querySelector('.front').classList.remove('hidden')
        }, 250)
    }

    if (verify == false) {
        turn(element)
        movementCounter++
        test ()
    }
    

    // TESTA CORRESPONDENCIA

    function test () {
        
        if (cardsTurned == 1){
            card2 = element
            image2 = element.classList[1]
            id2 = element.classList[0]
            if(image1 == image2 && id1 !== id2) {
                totalCardsTurned += 2
                cardsTurned = 0
                setTimeout(endGame, 1000)
            } else { 
                cardsTurned = 0
                function turnOffCard1() {
                    turnoff (card1)
                }
                function turnOffCard2() {
                    turnoff (card2)
                }
                setTimeout(turnOffCard1, 1000)
                setTimeout(turnOffCard2, 1000)
            }
            
            
        } else if (cardsTurned == 0) {
            card1 = element
            image1 = element.classList[1]
            id1 = element.classList[0]
            cardsTurned++
            console.log (image1)
            
        }
    }
}
// VERIFICA FIM DO JOGO

function endGame() {
    if(imagesSelected.length == totalCardsTurned) {
        alert(`Você ganhou em ${movementCounter} jogadas!`)
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