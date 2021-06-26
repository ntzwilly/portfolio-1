/**
 *    Local Storage Function
 *    This is the code needed to store locally the variables
 *    and parameters used in the creation of this project
 *
 */

// Every change that happens in the input fields will be stored into 'data' and when
// the submit button is pressed, 'data' will be stored, always in the case that its values
// are different from the ones stored in localStorage.
const data = { name: null, email: null, message: null }

// This function will check that the browser has a localStorage system and if it exists
// it would use it
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

// Every change that occurs in the fomr input fields will be parsed into the variabl 'data'
function parseIt(v, index) {
  let name
  let email
  let message
  switch (index) {
    case 0:
      name = v
      data.name = name
      break
    case 1:
      email = v
      data.email = email
      break
    case 2:
      message = v
      data.message = message
      break
    default:
      break
  }
}

// Create event listeners for every input field, so they detect any change and if submitted
// the changes will be stored.
const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

const elements = [nameInput, email, message]
elements.forEach((e, index) => {
  e.addEventListener('change', (event) => {
    parseIt(event.target.value, index)
  })
})

// This function checks what is inside localStorage and if it doesn't match the object that
// we want to store, then store it.
function storeIt() {
  if (storageAvailable('localStorage')) {
    const storedJson = localStorage.getItem('jsonObj')
    const jsonObj = JSON.stringify(data)
    if (storedJson !== jsonObj) {
      localStorage.setItem('jsonObj', jsonObj)
    }
  }
}

// This function will retrieve the object stored in localStorage and populate the form fields with
// those values.
function retrieveIt() {
  const storedJson = localStorage.getItem('jsonObj')
  const values = []
  JSON.parse(storedJson, (key, value) => {
    values.push(value)
  })

  values.forEach((v, index) => {
    switch (index) {
      case 0:
        document.getElementById('name').value = v
        break
      case 1:
        document.getElementById('email').value = v
        break
      case 2:
        document.getElementById('message').value = v
        break
      default:
        break
    }
  })
}
// The retrieve function must to be called everytime the code runs
retrieveIt()

export default storeIt
