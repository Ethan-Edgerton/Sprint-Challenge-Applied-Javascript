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

//const articleArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];

const cardContainer = document.querySelector(`.cards-container`)

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        const bootstrapArticle = response.data.articles.bootstrap;
         bootstrapArticle.forEach(article => {
             cardContainer.appendChild(createArticle(article))
             console.log(article)
        });
        const javascriptArticle = response.data.articles.javascript
            javascriptArticle.forEach(article => {
                cardContainer.appendChild(createArticle(article))
            })
        const jqueryArticle = response.data.articles.jquery
            jqueryArticle.forEach(article => {
                cardContainer.appendChild(createArticle(article))
            })
        const nodeArticle = response.data.articles.node
            nodeArticle.forEach(article => {
                cardContainer.appendChild(createArticle(article))
            })
        const technologyArticle = response.data.articles.technology
            technologyArticle.forEach(article => {
                cardContainer.appendChild(createArticle(article))
            })
    })

function createArticle (data) {

    //Elements 
    const card = document.createElement(`div`)
    const headline = document.createElement(`div`)
    const author = document.createElement(`div`)
    const imgContainer = document.createElement(`div`)
    const image = document.createElement(`img`)
    const authorName = document.createElement(`span`)

    //Structure
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorName)
    imgContainer.appendChild(image)

    //classes attr src
    card.classList.add(`card`)
    headline.classList.add(`headline`)
    author.classList.add(`author`)
    imgContainer.classList.add(`img-container`)
    image.src = data.authorPhoto;

   // Content
   headline.textContent = data.headline;
   authorName.textContent = `By ${data.authorName}`

   return card;
}