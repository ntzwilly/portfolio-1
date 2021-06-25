import portfolio, * as data from "./works_data.js";

function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) {
    element.className = className;
  }
  if (content) {
    element.textContent = content;
  }
  if (idName) {
    element.id = idName;
  }
  return element;
}

function modalGenerator(id) {
  let portfolio;
  let portfolioId;
  if (id === "btn--1") {
    portfolioId = "portfolio-1";
  }
  if (id === "btn--2") {
    portfolioId = "portfolio-2";
  }
  if (id === "btn--3") {
    portfolioId = "portfolio-3";
  }
  if (id === "btn--4") {
    portfolioId = "portfolio-4";
  }

  data.default.forEach((p) => {
    if (p.id === portfolioId) {
      portfolio = p;
    }
  });

  const modalContainer = document.getElementById("modal-container");
  console.log(modalContainer);
  const modalClose = elementGenerator(
    "img",
    "modal-close",
    null,
    "modal-close"
  );
  modalClose.src = "./images/close-modal.svg";
  const modalContent = elementGenerator(
    "div",
    "modal-content",
    null,
    "modal-content"
  );
  modalContainer.appendChild(modalContent);
  const modalTitle = elementGenerator(
    "h1",
    "modal-title",
    portfolio.title,
    null
  );
  modalContent.appendChild(modalTitle);
  const modalList = elementGenerator("ul", "modal-list", null, null);
  modalContent.appendChild(modalList);
  modalContent.appendChild(modalClose);
  const elementOne = elementGenerator(
    "li",
    "element-1",
    portfolio.bread[0],
    null
  );
  const dotOne = elementGenerator("li", "circle", null, null);
  const elementTwo = elementGenerator(
    "li",
    "element-2",
    portfolio.bread[1],
    null
  );
  const dotTwo = elementGenerator("li", "circle", null, null);
  const elementThree = elementGenerator(
    "li",
    "element-3",
    portfolio.bread[2],
    null
  );
  modalList.appendChild(elementOne);
  modalList.appendChild(dotOne);
  modalList.appendChild(elementTwo);
  modalList.appendChild(dotTwo);
  modalList.appendChild(elementThree);
  const image = elementGenerator("img", "modal-image", null, null);
  image.src = portfolio.image;
  image.alt = "project-image";
  modalContent.appendChild(image);
  const modalFlex = elementGenerator("div", "modal-flex", null, null);
  const paragraph = elementGenerator("p", null, null, null);
  modalFlex.appendChild(paragraph);
  modalContent.appendChild(modalFlex);
  const modalFlexLeft = elementGenerator("div", "modal-flex-left", null, null);
  modalFlex.appendChild(modalFlexLeft);
  const modalLanguage = elementGenerator("ul", "modal-language", null, null);
  const ListOne = elementGenerator("li", null, null, null);
  const LinkOne = elementGenerator("a", null, "html", null);
  LinkOne.href = "#";
  ListOne.appendChild(LinkOne);
  modalLanguage.appendChild(ListOne);
  modalFlexLeft.appendChild(modalLanguage);
  const listTwo = elementGenerator("li", null, null, null);
  const linkTwo = elementGenerator("a", "list-center", "css", null);
  linkTwo.href = "#";
  listTwo.appendChild(linkTwo);
  modalLanguage.appendChild(listTwo);
  const listThree = elementGenerator("li", null, null, null);
  const linkThree = elementGenerator("a", null, "javascript", null);
  linkThree.href = "#";
  listThree.appendChild(linkThree);
  modalLanguage.appendChild(listThree);

  const modalLanguageTwo = elementGenerator(
    "ul",
    "modal-language visible",
    null,
    null
  );
  const ListFour = elementGenerator("li", null, null, null);
  const LinkFour = elementGenerator("a", null, "github", null);
  LinkFour.href = "#";
  ListFour.appendChild(LinkFour);
  modalLanguageTwo.appendChild(ListFour);
  modalFlexLeft.appendChild(modalLanguageTwo);
  const listFive = elementGenerator("li", null, null, null);
  const linkFive = elementGenerator("a", "list-center", "ruby", null);
  linkFive.href = "#";
  listFive.appendChild(linkFive);
  modalLanguageTwo.appendChild(listFive);
  const listSix = elementGenerator("li", null, null, null);
  const linkSix = elementGenerator("a", null, "Bootstraps", null);
  linkSix.href = "#";
  listSix.appendChild(linkSix);
  modalLanguageTwo.appendChild(listSix);
  const line = elementGenerator("hr", "modal-line", null, null);
  modalFlexLeft.appendChild(line);
  const modalBtnDiv = elementGenerator("div", "modal-btn-div", null, null);
  modalFlexLeft.appendChild(modalBtnDiv);
  const modalBtnOne = elementGenerator(
    "button",
    "modal-btn btn--1",
    "See Project",
    null
  );
  const modalBtnTwo = elementGenerator(
    "button",
    "modal-btn btn--2",
    "See Source",
    null
  );
  modalBtnDiv.appendChild(modalBtnOne);
  modalBtnDiv.appendChild(modalBtnTwo);
  line.appendChild(modalBtnDiv);
  modalContent.appendChild(line);
  modalContainer.appendChild(modalContent);
  console.log(modalContainer);
}

export default modalGenerator;
