const menu = document.getElementById('main-menu')

const colors = {
    Lorem: 'red',
    Dolor: 'green'
}

const generateCard = (properties) => {
    let card = document.createElement('div')
    card.className = 'card'

    if (properties.imageSource) {
        let foodImage = document.createElement('img')
        foodImage.className = 'card__image'
        foodImage.src = properties.imageSource
        card.appendChild(foodImage)
    }

    let contentContainer = document.createElement('div')
    contentContainer.className = 'card__content'

    card.appendChild(contentContainer)

    let foodName = document.createElement('h3')
    foodName.textContent = properties.name
    let foodDescription = document.createElement('p')
    foodDescription.textContent = properties.description

    let tagContainer = document.createElement('div')
    tagContainer.className = 'card__tag-container'

    contentContainer.append(foodName, foodDescription, tagContainer)

    for (tag in properties.tags) {
        let tagElement = document.createElement('p')
        tagElement.textContent = properties.tags[tag]
        tagElement.className = 'card__tag'
        if (colors[properties.tags[tag]]) {
            tagElement.className += ' card__tag--' + colors[properties.tags[tag]]
        }
        tagContainer.appendChild(tagElement)
    }

    menu.appendChild(card)

}

let generateCards = (cardList) => {
    for (card in cardList) {
        generateCard(cardList[card])
    }
}


// Example code:
generateCards([
    {
        name: 'Test',
        description: 'Lorem Ipsum Dolor Sit Amet',
        imageSource: 'autisme.png',
        tags: [
            'Lorem',
            'Ipsum',
            'Dolor'
        ]
    },
    {
        name: 'Test',
        description: 'Lorem Ipsum Dolor Sit Amet',
        imageSource: 'vodka.jpg',
        tags: [
            'Lorem',
            'Ipsum',
            'Dolor'
        ]
    }
])