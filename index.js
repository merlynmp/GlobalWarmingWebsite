const animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transtionDelay: 0,
  transitionDuration: '2s',
  transitionProporty: 'all',
  transitionTimingFunction: 'ease'
};

let themeButton = document.getElementById("theme-button");

const toggleDarkMode = (event) => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


const button = document.getElementById("sign-now-button");
const signNowButton = document.getElementById("sign-petition");
const addsign = document.querySelector('.signatures');

const addSignature = (person) => {

   event.preventDefault();

  //const signatures = signNowButton.elements;
  
    //const name = signatures[0].value;
    //const location = signatures[1].value;

    const add ='🖊️ ' + person.name + ' from ' + person.hometown + " supports this.";
    const p = document.createElement('p');
    p.innerText = add;
 addsign.appendChild(p);

  toggleModal(person);
    
}

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

   let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  if(person.name.length < 2) {
    containsErrors = true;
    petitionInputs[0].classList.add('error');
  }
  else {
    petitionInputs[0].classList.remove('error');
  }

  if(person.hometown.length < 2) {
    containsErrors = true;
    petitionInputs[1].classList.add('error');
  }
  else {
    petitionInputs[1].classList.remove('error');
  }

  if(person.email.length < 2) {
    containsErrors = true;
    petitionInputs[2].classList.add('error');
  }
  else {
    petitionInputs[2].classList.remove('error');
  }
  

  //for(let i = 0; i < petitionInputs.length - 1; i++) {
    //if(petitionInputs[i].value.length < 2) {
      //containsErrors = true;
      //petitionInputs[i].classList.add('error');
    //}
    //else {
     // petitionInputs[i].classList.remove('error');
    //}
 // }

  
if(containsErrors == false) {
  addSignature(person);
  for(let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
  }
  containsErrors = false;
}
  
}

signNowButton.addEventListener("click", validateForm);

let revealableContainers = document.querySelectorAll("div.revealable");

const reveal = (event) => {
  event.preventDefault();
  
  for(let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    }
    else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener("scroll", reveal);




const toggleModal = (person) => {
  
let modal = document.getElementById("thanks-modal");
let modalContent = document.getElementById("thanks-modal-content");
modal.style.display = "flex";
  
  const sen = "Thank you " + person.name + " for signing! " + person.hometown + " is awesome!";
  const p = document.createElement('p');
    p.innerText = sen;
 modalContent.appendChild(p);

  let intervalId = setInterval(scaleImage, 300);

setTimeout(() => {
modal.style.display = "none";
}, 6000,intervalId)

  
  //clearInterval(intervalId);
}

let scaleFactor = 1;
let modalImage = document.getElementById("mimg");



const scaleImage = () => {
  if (scaleFactor === 1) {
  scaleFactor = 0.8;
      modalImage.style.transform = "scale(0.8)";
} else {
  scaleFactor = 1;
      modalImage.style.transform = "scale(1)";
}
}




// signNowButton.addEventListener("click", validateForm);

//signNowButton.addEventListener('submit', addSignature);




