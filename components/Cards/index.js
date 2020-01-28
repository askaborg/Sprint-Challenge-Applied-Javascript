// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(newsFeed) {
    const cardDiv = document.createElement('div')
    const cardDiv2Headline = document.createElement('div')
    cardDiv2Headline.textContent = newsFeed.headline
    const cardDiv3Author = document.createElement('div')
    const cardDiv4ImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    cardImg.src = newsFeed.authorPhoto;
    const cardSpan = document.createElement('span')
    cardSpan.textContent = "By " + newsFeed.authorName

    cardDiv.classList.add("card")
    cardDiv2Headline.classList.add('headline')
    cardDiv4ImgContainer.classList.add('img-container')
    cardDiv3Author.classList.add('author')

    cardDiv.appendChild(cardDiv2Headline)
    cardDiv.appendChild(cardDiv3Author)
    cardDiv3Author.appendChild(cardDiv4ImgContainer)
    cardDiv4ImgContainer.appendChild(cardImg)
    cardDiv3Author.appendChild(cardSpan)

    return cardDiv
}

const cardInsert = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(responseAritcles => {    
    const articlesList = Object.values(responseAritcles.data.articles)
    console.log('articlesList', articlesList)
    
    for(i=0; i<articlesList.length; i++) {
        articlesList[i].forEach((item) => {
        const newCard = createCard(item)      
        cardInsert.appendChild(newCard)
        })
    }
})

.catch(errorArticles => document.querySelector('.cards-container').textContent = errorArticles)
