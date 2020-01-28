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

function Header() {

    const headerDiv = document.createElement('div')
    const headerSpanDate = document.createElement('span')
    headerSpanDate.textContent = 'SMARCH 28, 2019'
    const headerH1 = document.createElement('h1')
    headerH1.textContent = 'Lambda Times'
    const headerSpanTemp = document.createElement('span')
    headerSpanTemp.textContent = '98' + '\xB0'

    headerDiv.appendChild(headerSpanDate)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(headerSpanTemp)

    headerDiv.classList.add('header')
    headerSpanDate.classList.add('date')
    headerSpanTemp.classList.add('temp')

    return headerDiv
}

const newHeader = document.querySelector('.header-container')
newHeader.appendChild(Header())

