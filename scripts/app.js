import { personal } from "../data/employe.js";
// import { eventDispaly } from "./events.js";
  

let index = 0

function display () {
    
  const {img, name, profession, bio} = personal[index]

  let displayHTML = document.querySelector('.review-display')
  
  let html = 
              `   
                  <img class="hero1" src="${img}" alt="">
                  <h1 class="name">${name}</h1>
                  <h2 class="proffession-text">${profession}</h2>
                  <p class="bio-text">${bio}</p>
              `;

  displayHTML.innerHTML = html
};


function eventDispaly() {
  const btnElementArrows = document.querySelectorAll('.js-btn')

  btnElementArrows.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const btnAction = event.currentTarget.dataset.action
      
      if (btnAction === 'prev') {
        index = (index - 1 + personal.length) % personal.length
        
      }else if (btnAction === 'next') {
        // index = (index + 1) % personal.length
        index = (index + 1) % personal.length
      }
      display()
    });
  });
}

display()
eventDispaly(); 






