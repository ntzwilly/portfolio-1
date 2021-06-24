/**
 *    ==========================================================
 *    This is the code used to implement the modal popup
 *    that appears when we click on the button 'show details'
 *    of every project in the portfolio section.
 *    ==========================================================
 */
// Import the function modalGenerator from the file modal_generator
import modalGenerator from "./modal_generator.js";
// This is the function used to close the modal
function handleCloseModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  // Delete the node  'modalContent' when closing
  const modalContent = document.getElementsByClassName("modal-content");
  modalContent[0].remove();
}
// The first function will set a listener on the button and get
// the id name of the parent element to know what data to
// load on the modal.
function handleClickButtonPortfolio(e) {
  // Being here means that the 'See project' button was pressed
  // Open the modal
  const modal = document.getElementById("modal");
  if (modal.style.display === "grid") {
    handleCloseModal();
  } else {
    modal.style.display = "grid";
    // Get the id of the project from where the button was pressed
    modalGenerator(e.srcElement.id);
    const closeModal = document.getElementsByClassName("modal-close");
    closeModal[0].addEventListener("click", handleCloseModal);
  }
}
// This first function ensures that the document has being already created
document.addEventListener("DOMContentLoaded", () => {
  const buttonsPortfolio = document.getElementsByClassName("portfolio-btn");
  Array.from(buttonsPortfolio).forEach((btn) => {
    btn.addEventListener("click", handleClickButtonPortfolio);
  });
});
