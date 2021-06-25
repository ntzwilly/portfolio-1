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
  // console.log(portfolio);
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
      
     
      const bread1 = elementGenerator('li', 'item1', null, null)
      const breadText1 = elementGenerator('a', 'link1',portfolio.bread[0], null)
      bread1.appendChild(breadText1)
      
      const bread2 = elementGenerator('li', 'counter', null, null)
      const breadText2 = elementGenerator('img', null, null, null)
      breadText2.src = "images/Counter.png"
      breadText2.alt="counter"
      bread2.appendChild(breadText2)
      
      const bread3 = elementGenerator('li', 'item3', null, null)
      const breadText3 = elementGenerator('a',null, portfolio.bread[1], null)
      breadText3.href = "#"
      bread3.appendChild(breadText3)
      
      const bread4 = elementGenerator('li', 'counter', null, null)
      const breadText4 = elementGenerator('img', null, null, null)
      breadText4.src = "images/Counter.png"
      breadText4.alt="counter"
      bread4.appendChild(breadText4)
      flexList.appendChild(bread4)
      
      const bread5 = elementGenerator('li', 'item5', null, null)
      const breadText5 = elementGenerator('a', null, portfolio.bread[2], null)
      breadText5.href = "#"
      bread5.appendChild(breadText5)
     
    
    
    flexList.appendChild(bread1)
    flexList.appendChild(bread2)
    flexList.appendChild(bread3)
    flexList.appendChild(bread4)
    flexList.appendChild(bread5)
  
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
   const btnProject = elementGenerator('button', 'btn-project', 'See Project', portfolio.buttonId)
   btnProject.type = "button"
   btnDiv.appendChild(btnProject)
   return gridContainer;
 }
 // Call the layout 'works' where the portfolio will be
 const works = document.getElementById('portfolio')
  
//  Iterate over every portfolio and add the to the wrapper 'ul'
 const portfolio = data.default
 portfolio.forEach((p) => {
   const generatedPortfolio = portfolioGenerator(p)
   console.log(generatedPortfolio)
  //  console.log(works)
   works.appendChild(generatedPortfolio)
 })

 