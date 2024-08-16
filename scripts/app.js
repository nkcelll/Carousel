import { personal } from "../data/employe.js";
import { eventDispaly } from "./events.js";
  

function display () {
  
  
 
  let index = 0
    
  const {img, name, profession, bio} = personal[index]

  localStorage.getItem('carousell');

  

  // if(savedReview) {
  //   index = personal.findIndex()
  // }

  
  const displayHTML = document.querySelector('.review-display')
  
  
  let html = 
              `   
                  <img class="hero1" src="${img}" alt="">
                  <h1 class="name">${name}</h1>
                  <h2 class="proffession-text">${profession}</h2>
                  <p class="bio-text">${bio}</p>
              `;

  displayHTML.innerHTML = html

  localStorage.setItem('carousell', personal[index])

  
  const btnElementArrows = document.querySelectorAll('.js-btn')
  

 

  // btnElementArrows.forEach((btn) => {
  //   btn.addEventListener('click', (event) => {
  //     const btnAction = event.currentTarget.dataset.action
      
  //     if (btnAction === 'prev') {
  //       (index - 1 + personal.length) % personal.length
        
  //     }else if (btnAction === 'next') {
  //       (index + 1) % personal.length
        
  //     }
  //     console.log(btnAction)
  //     display(btnAction)
  //   });
  // });

  eventDispaly(personal[index])
  
  

};
display()





