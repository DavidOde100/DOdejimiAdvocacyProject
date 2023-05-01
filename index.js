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
  const name = person.name;
  const hometown = person.hometown; 

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

   event.preventDefault();

  toggleModal(person);
}

// ValidateForm
const validateForm = () => {
  let containsErrors= false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  const email = document.getElementById('email');
  
  let person = {
    name: petitionInputs[0].value, 
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  }
  else {
    email.classList.remove('error');
  }
  
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    containsErrors = false;
    }
    toggleModal(person);
  }
}

signNowButton.addEventListener('click', validateForm);

// toggle modal
const toggleModal = (person) => {
  modal = document.getElementById("thanks-modal");
  modalContent = document.getElementById("thanks-content-modal");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent :)`;
  
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}

const closeModalBtn = document.querySelector('#close-modal-btn');

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);
