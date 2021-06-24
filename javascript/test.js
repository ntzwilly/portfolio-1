import * as data from './works_data.js'

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

function portfolioGenerator(portfolio) {
  //  console.log(portfolio);
   // Create the grid-container
   const gridContainer = elementGenerator('section', 'grid-container', null, null)
   
   //create image container and append it to the box;
   const imageItems = elementGenerator('div','image-items', null, null)
   gridContainer.appendChild(imageItems)
   const image = elementGenerator('img', 'project-image', null, null);
   image.src = portfolio.image
   image.alt = "portfolio_snapshoot"
   imageItems.appendChild(image)
   
   //create the text items container and append it to grid_container
   const textItems = elementGenerator('div','text-items', null, null)
   gridContainer.appendChild(textItems);

   //create text-items child
   const titleItem = elementGenerator('h1', 'title-item', portfolio.title, null)
   textItems.appendChild(titleItem)
   const navItem = elementGenerator('div', 'nav-item', null, null)
   textItems.appendChild(navItem)
  
  const flexList = elementGenerator('ul', 'flex-list', null, null);
  navItem.appendChild(flexList)
  // Create the breadcrumbs 'bread' and add the content 'text'
  // To do that iterate over the different parameters of the array bread
  portfolio.bread.forEach((b, index) => {
    let bread;
    let breadText;
    switch (index) {
      case 0:
      bread = elementGenerator('li', 'item1', null, null)
      breadText = elementGenerator('a', 'link1',portfolio.bread[0], null)
      bread.appendChild(breadText)
      break;
      case 1:
      bread = elementGenerator('li', 'counter', null, null)
      breadText = elementGenerator('img', null, null, null)
      breadText.src = "images/Counter.png"
      breadText.alt="counter"
      bread.appendChild(breadText)
      break;
      case 2:
      bread = elementGenerator('li', 'item3', null, null)
      breadText = elementGenerator('a',null, portfolio.bread[2], null)
      breadText.href = "#"
      bread.appendChild(breadText)
      break;
      case 3:
      bread = elementGenerator('li', 'counter', null, null)
      breadText = elementGenerator('img', null, null, null)
      breadText.src = "images/Counter.png"
      breadText.alt="counter"
      bread.appendChild(breadText)
      flexList.appendChild(bread)
      break;
      case 4:
      bread = elementGenerator('li', 'item5', null, null)
      breadText = elementGenerator('a', null, portfolio.bread[4], null)
      breadText.href = "#"
      bread.appendChild(breadText)
      break;
    } 
    flexList.appendChild(bread)
    console.log(flexList)
  });
  
   //create the bubbles

   
   const bubbles = elementGenerator('ul', null, null, null);
  // Iterate over the array bubbles to create each element 'bubble'
    portfolio.bubbles.forEach((b) => {
    const bubble = elementGenerator('li', null, null, null);
    // Create a text element 'bubbleText' and add it to 'bubble'
    const bubbleText = elementGenerator('a', 'btn-language', null, null);
    bubbleText.href = "#"
    bubble.appendChild(bubbleText);
    // Add the elements 'bubble' to the group 'bubbles'
    bubbles.appendChild(bubble);
  });

 

   //create the bubbles

   const textItemTwo = elementGenerator('div','text-item2', null, null)
   const paragraph = elementGenerator('p',null, portfolio.paragraph, null)
   textItemTwo.appendChild(paragraph);
   textItems.appendChild(textItemTwo)
   const flexLink = elementGenerator('div','flex-link',null,null)
   textItems.appendChild(flexLink)
   const uList = elementGenerator('ul',null,null,null)
   flexLink.appendChild(uList)
   const liLanguage = elementGenerator('li',null,null,null)
   uList.appendChild(liLanguage)
   const btnLanguageOne = elementGenerator('a','btn-language', 'html',null)
   btnLanguageOne.href = "#"
   liLanguage.appendChild(btnLanguageOne)
   const liLanguageTWo = elementGenerator('li',null,null,null)
   uList.appendChild(liLanguageTWo)
   const btnLanguageTwo = elementGenerator('a', 'btn-language language1', 'css',null)
   btnLanguageTwo.href = "#"
   liLanguageTWo.appendChild(btnLanguageTwo)
   const liLanguageThree = elementGenerator('li',null,null,null)
   uList.appendChild(liLanguageThree)
   const btnLanguageThree = elementGenerator('a', 'btn-language language1', 'javaScript',null)
   btnLanguageThree.href = "#"
   liLanguageThree.appendChild(btnLanguageThree)
   const btnDiv = elementGenerator('div',null,null,null)
   textItems.appendChild(btnDiv)
   const btnProject = elementGenerator('button', 'btn-project', 'See Project', 'btn--1')
   btnProject.type = "button"
   btnDiv.appendChild(btnProject)
   return gridContainer;
 }
 // Call the layout 'works' where the portfolio will be
 const works = document.getElementById('portfolio')
  
 // Iterate over every portfolio and add the to the wrapper 'ul'
 const portfolio = data.default
 portfolio.forEach((p) => {
   const generatedPortfolio = portfolioGenerator(p)
   console.log(generatedPortfolio)
  //  console.log(works)
   works.appendChild(generatedPortfolio)
 })

 