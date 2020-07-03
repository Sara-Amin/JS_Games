document.addEventListener('DOMContentLoaded', () => {
//Create cards array
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]
  var cardsChosenName = [], cardsChosenId = [], cardsWon = [], score = 0
    
   //Randomize cards
   cardArray.sort(() => 0.5 - Math.random()) //sort takes funct
    
   //Create board
   //const grid = document.getElementsByClassName("grid")
   const grid = document.getElementsByClassName('grid')[0] //getElementsByClassName() returns an array of elements while querySelector() return the first element only
   function createBoard() {
     for (let i = 0; i < cardArray.length; i++) {
       let card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       grid.appendChild(card)
     }
   }
  //Flip the card!
   function flipCard() {
     let cardId = this.getAttribute('data-id')
     if (cardsChosenId.includes(cardId)) {
        alert('You can\'t click the same card twice!')
     }else if(cardArray[cardId].img === 'images/white.png'){
        alert('This card has been won before. Choose another card.')
     }else{
        cardsChosenName.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        console.log('cardsChosenName is '+cardsChosenName.toString())
        console.log('cardsChosenId is '+cardsChosenId.toString())
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosenName.length === 2) {
            setTimeout(checkForMatch, 500)
        }
     }
   }

    //Check for match
    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        const cardOneName = cardsChosenName[0], cardTwoName = cardsChosenName[1], cardOneId = cardsChosenId[0], cardTwoId = cardsChosenId[1]
        if(cardOneName === cardTwoName){ 
            cards[cardOneId].setAttribute('src', 'images/white.png')
            cards[cardTwoId].setAttribute('src', 'images/white.png')
            cards[cardOneId].removeEventListener('click', flipCard)
            cards[cardTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardOneName)
            document.querySelector('#score').textContent = cardsWon.length
            if (cardsWon.length === cardArray.length/2){
                alert('Congratulations!! You won!')
            }
        }else{
            cards[cardOneId].setAttribute('src', 'images/blank.png')
            cards[cardTwoId].setAttribute('src', 'images/blank.png')
        }
        cardsChosenName.length = 0
        cardsChosenId.length = 0
    }
   createBoard()
})
