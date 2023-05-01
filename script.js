
// Animation 
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: '0s',
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers = document.querySelectorAll('.revealable');
const windowHeight = window.innerHeight;


const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
};

window.addEventListener('scroll', reveal);

const reduceMotionButton = document.getElementById('reduceMotion');

// Add an event listener to the button
reduceMotionButton.addEventListener('click', reduceMotion);

// Define the reduceMotion function
function reduceMotion() {
  // Change the animation object properties as desired
  animation.transition = 'none';
  animation.revealDistance = 50;
  animation.opacity = 0.8;

  // Loop through the revealable containers and update their styles
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = animation.transition;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transform = `translateY(${animation.revealDistance}px)`;
    revealableContainers[i].style.opacity = animation.opacity;
  }
}



