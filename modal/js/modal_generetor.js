import * as data from './works_data.js'
const portfolio = data.default;
// console.log(portfolio)

function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName)
  if (className) {
    element.className = className
  }
  if (content) {
    element.textContent = content
  }
  if (idName) {
    element.id = idName
  }
  return element

}

function modalGenerator(portfolio){

  const modalBg = elementGenerator('div','modal-bg',null,null)
  const modal = elementGenerator('div', 'modal', null, null)
  modalBg.appendChild(modal)
  const modalTitle = elementGenerator('h1','modal-title',null,null)
  modal.appendChild(modalTitle)
  const modalList = elementGenerator('ul', 'modal-list', null, null)
  modal.appendChild(modalList);
  const elementOne = elementGenerator('li', 'element-1', null, null)
  const dotOne = elementGenerator('li', 'circle', null, null)
  const elementTwo = elementGenerator('li', 'element-2', null, null)
  const dotTwo = elementGenerator('li', 'circle', null, null)
  const elementThree = elementGenerator('li', 'element-3', null, null)
  modalList.appendChild(elementOne)
  modalList.appendChild(dotOne)
  modalList.appendChild(elementTwo)
  modalList.appendChild(dotTwo)
  modalList.appendChild(elementThree)
  const image = elementGenerator('img', 'modal-image', null, null)
  image.src="img/Snapshoot_Portfolio3.png"
  image.alt="project-image"
  modal.appendChild(image)
  const modalFlex = elementGenerator('div', 'modal-flex', null, null)
  const paragraph = elementGenerator('p', null, null, null)
  modalFlex.appendChild(paragraph)
  modal.appendChild(modalFlex)
  const modalFlexLeft = elementGenerator('div', 'modal-flex-left', null, null)
  modalFlex.appendChild(modalFlexLeft)
  const modalLanguage = elementGenerator('ul', 'modal-language', null, null)
  const ListOne = elementGenerator('li', null, null, null)
  const LinkOne = elementGenerator('a', null, 'html', null)
  LinkOne.href = "#"
  ListOne.appendChild(LinkOne)
  modalLanguage.appendChild(ListOne)
  modalFlexLeft.appendChild(modalLanguage)
  const listTwo = elementGenerator('li', null, null, null)
  const linkTwo = elementGenerator('a', 'list-center', 'css', null)
  linkTwo.href = "#"
  listTwo.appendChild(linkTwo)
  modalLanguage.appendChild(listTwo)
  const listThree = elementGenerator('li', null, null, null)
  const linkThree = elementGenerator('a', null, 'javascript', null)
  linkThree.href = "#"
  listThree.appendChild(linkThree)
  modalLanguage.appendChild(listThree)

  const modalLanguageTwo = elementGenerator('ul', 'modal-language visible', null, null)
  const ListFour = elementGenerator('li', null, null, null)
  const LinkFour = elementGenerator('a', null, 'github', null)
  LinkFour.href = "#"
  ListFour.appendChild(LinkFour)
  modalLanguageTwo.appendChild(ListFour)
  modalFlexLeft.appendChild(modalLanguageTwo)
  const listFive = elementGenerator('li', null, null, null)
  const linkFive = elementGenerator('a', 'list-center', 'ruby', null)
  linkFive.href = "#"
  listFive.appendChild(linkFive)
  modalLanguageTwo.appendChild(listFive)
  const listSix = elementGenerator('li', null, null, null)
  const linkSix = elementGenerator('a', null, 'Bootstraps', null)
  linkSix.href = "#"
  listSix.appendChild(linkSix)
  modalLanguageTwo.appendChild(listSix)
  const line = elementGenerator('hr', 'modal-line', null, null)
  modalFlexLeft.appendChild(line)
  const modalBtnDiv = elementGenerator('div', 'modal-btn-div', null, null)
  modalFlexLeft.appendChild(modalBtnDiv)
  const modalBtnOne = elementGenerator('button', 'modal-btn btn--1', null, null)
  const modalBtnTwo = elementGenerator('button', 'modal-btn btn--2', null, null)
  modalBtnDiv.appendChild(modalBtnOne)
  modalBtnDiv.appendChild(modalBtnTwo)
  console.log(modalBg)

  return modalBg;
  
}

modalGenerator(portfolio);



//    // Call the layout 'works' where the portfolio will be
//  const works = document.getElementById('portfolio')
  
//  //  Iterate over every portfolio and add the to the wrapper 'ul'
//   const portfolio = data.default
//   portfolio.forEach((p) => {
//     const generatedPortfolio = portfolioGenerator(p)
//     console.log(generatedPortfolio)
//    //  console.log(works)
//     works.appendChild(generatedPortfolio)
//   })

