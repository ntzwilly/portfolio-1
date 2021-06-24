import * as data from './works_data.js'





// //  /**
//   *  Element Generator
//   *  This function will assist in the creation of different
//   *  elements. In the case of some parameters not existing
//   *  it should receive null.
//   *  ie: elementGenerator('div', 'main', null, null)
//   */
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
   // Create the box
   const box = elementGenerator('section', 'box', null, null)
   // Create the img and add it to the box
   const boxImg = elementGenerator('div', portfolio.image, null, null)
   box.appendChild(boxImg)
   // Create the main block 'Text'
   const boxText = elementGenerator('div', 'box__text', null, null)
   // Create the section 'Text' and add an element 'title'
   const text = elementGenerator('div', 'text', null, null)
   const textTitle = elementGenerator(
     'h2',
     'text__title',
     portfolio.textTitle,
     null
   )
   text.appendChild(textTitle)
   // Create the breadcrumb group 'textBread'
   const textBread = elementGenerator('div', 'text__breadcrumb', null, null)
   // Create the breadcrumbs 'bread' and add the content 'text'
   // To do that iterate over the different parameters of the array bread
   portfolio.bread.forEach((b, index) => {
     let bread
     let breadText
     // For the first bread there is a dedicated class
     if (index === 0) {
       bread = elementGenerator('div', 'breadcrumb-1', null, null)
       breadText = elementGenerator('h5', 'breadcrumb-text-1', b, null)
       bread.appendChild(breadText)
     } else {
       bread = elementGenerator('div', 'breadcrumb', null, null)
       breadText = elementGenerator('h6', 'breadcrumb-text', b, null)
       bread.appendChild(breadText)
     }
     // Add the bread to the bread group
     textBread.appendChild(bread)
     // Create a dot and add it to the bread group for the 2 first 'bread'
     if (index !== 2) {
       const dot = elementGenerator('div', 'dot', null, null)
       textBread.appendChild(dot)
     }
   })
   // Add the breadcrumb group to the section 'text'
   text.appendChild(textBread)
   // Add the section 'text' to the block 'boxText'
   boxText.appendChild(text)
   // Create a parraf element 'boxParraf' and add it to the block 'boxText'
   const boxParraf = elementGenerator('p', 'box__parraf', portfolio.parraf, null)
   boxText.appendChild(boxParraf)
   // Create a group 'bubbles'
   const bubbles = elementGenerator('ul', 'box__bubbles', null, null)
   // Iterate over the array bubbles to create each element 'bubble'
   portfolio.bubbles.forEach((b) => {
     const bubble = elementGenerator('li', 'bubble', null, null)
     // Create a text element 'bubbleText' and add it to 'bubble'
     const bubbleText = elementGenerator('h5', 'bubble-text', b, null)
     bubble.appendChild(bubbleText)
     // Add the elements 'bubble' to the group 'bubbles'
     bubbles.appendChild(bubble)
   })
   // Add the group 'bubbles' to the block 'boxText'
   boxText.appendChild(bubbles)
   // Create the division 'boxAction'
   const boxAction = elementGenerator('div', 'box__action', null, null)
   // Create a button 'button' and add it to the division'boxAction'
   const btn = elementGenerator(
     'button',
     'c-b-normal-button portfolio-btn',
     'See Project',
     portfolio.buttonId
   )
   btn.type = 'button'
   boxAction.appendChild(btn)
   // Add the division 'boxAction' to the block 'boxText'
   boxText.appendChild(boxAction)
   // Add the block 'boxText' to the main block 'box'
   box.appendChild(boxText)
   // Create a wrapper 'li' and add the main block 'box'
   const li = elementGenerator('li', null, null, null)
   li.appendChild(box)
   return li
 }
 // Call the layout 'works' where the portfolio will be
 const works = document.getElementById('works')
 // Create a wrapper 'ul' and add in it the generated portfolios
 const ul = elementGenerator('ul', null, null, null)
 // Iterate over every portfolio and add the to the wrapper 'ul'
 const portfolio = data.default
 portfolio.forEach((p) => {
   const generatedPortfolio = portfolioGenerator(p)
   ul.appendChild(generatedPortfolio)
 })
 // Add the wrapper containning the portfolios to the layout 'works'
//  works.appendChild(ul)


const image = elementGenerator('img','project-image', null, null);
image.src="images/Snapshoot_Portfolio.png";
image.alt="portfolio_snapshoot";
const imageContainer = elementGenerator('div', 'image-items', null, null);
imageContainer.appendChild(image);

const imageCounter = elementGenerator('img',null, null, null);
const counter = elementGenerator('li', 'counter', null, null)
imageCounter.src="images/Counter.png" 
imageCounter.alt="counter"
counter.appendChild(imageCounter);

