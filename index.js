const body = document.getElementById('body');
const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Toggle Light Mode';
  } else {
    themeButton.textContent = 'Toggle Dark Mode';
  }
});


// Petition Form
const petitionForm = document.getElementById('sign-petition');
const signaturesContainer = document.querySelector('.signatures');
const signNowButton = document.getElementById('sign-now-button');
let count = 3;

//add Signature
const addSignature = (person) => {
  const name = petitionForm.elements['name'].value;
  const hometown = petitionForm.elements['hometown'].value;

  const newSignature = document.createElement('p');
  newSignature.textContent= `🖊️${name} form ${hometown} supports this.`;

  signaturesContainer.appendChild(newSignature);

  petitionForm.reset();

  const oldCount = document.getElementById('kounter');
  oldCount.remove();
  count++;
  const newCount = document.createElement('p');
  newCount.id = 'kounter';
  newCount.textContent = `🖊️ ${count}people have signed this petition and support this cause.`;
  signaturesContainer.appendChild(newCount);
};

// ValidateForm
const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value, 
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.hometown.length < 2 || person.email.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    containsErrors = false;
    toggleModal(person);
  }
}

signNowButton.addEventListener('click', validateForm);

/*
// Select the form and relevant DOM elements
const petitionForm = document.getElementById("petition-form");
const petitionInputs = document.querySelectorAll(".petition-input");
const signaturesList = document.getElementById("signatures-list");
const modal = document.getElementById("thanks-modal");
const modalContent = document.getElementById("thanks-content-modal");
const modalImage = document.querySelector(".modal-img");

// Initialize global variables
let signatures = [];

// Validate form and create person object
function validateForm(event) {
  event.preventDefault();

  let isFormValid = true;

  // Check each input field is not empty
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value === "") {
      isFormValid = false;
      petitionInputs[i].classList.add("invalid");
    } else {
      petitionInputs[i].classList.remove("invalid");
    }
  }

  // If form is valid, create person object and call addSignature function
  if (isFormValid) {
    const person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[1].value,
      email: petitionInputs[2].value,
    };

    addSignature(person);
    toggleModal(person);
    petitionForm.reset();
  }
}

// Add signature to list
function addSignature(person) {
  signatures.push(person);

  const newSignature = document.createElement("li");
  newSignature.textContent = `🖊️ ${person.name} supports this cause.`;
  signaturesList.appendChild(newSignature);
}

// Show modal and thank user
function toggleModal(person) {
  let scaleFactor = 1;

  function scaleImage() {
    if (scaleFactor === 1) {
      scaleFactor = 0.8;
    } else {
      scaleFactor = 1;
    }

    modalImage.style.transform = `scale(${scaleFactor})`;
  }

  const intervalId = setInterval(scaleImage, 500);

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}! Las Vegas represent!`;

  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
  }, 4000);
}

// Event listeners
petitionForm.addEventListener("submit", validateForm);

for (let i = 0; i < petitionInputs.length; i++) {
  petitionInputs[i].addEventListener("input", () => {
    petitionInputs[i].classList.remove("invalid");
  });
}
*/
