// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headerContainer = document.querySelector(`.header-container`)
headerContainer.appendChild(Header())

function Header() {

//Elements
const header = document.createElement(`div`)
const dateSpan = document.createElement(`span`)
const h1 = document.createElement(`h1`)
const tempSpan = document.createElement(`span`)

//Structure
header.appendChild(dateSpan)
header.appendChild(h1)
header.appendChild(tempSpan)

//Classes
header.classList.add(`header`)
dateSpan.classList.add(`date`)
tempSpan.classList.add(`temp`)

//SetContent hard code
//dateSpan.textContent = `SMARCH 28, 2019`
//h1.textContent = `Lambda Times`
//tempSpan.textContent = `98°`

const headerContent = {
    temp: `98°`,
    header: `Lambda Times`,
    date: `SMARCH 28, 2019`
}

//SetContent object keys
dateSpan.textContent = headerContent.date
h1.textContent = headerContent.header
tempSpan.textContent = headerContent.temp


return header;

}
