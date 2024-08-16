import { personal } from "../data/employe.js";

export function eventDispaly() {
    let index = 0
  
    
  
    const btnElementArrows = document.querySelectorAll('.js-btn')
  
    btnElementArrows.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const btnAction = event.currentTarget.dataset.action
        
        if (btnAction === 'prev') {
          eventDispaly((index - 1 + personal.length) % personal.length)
          
        }else if (btnAction === 'next') {
          eventDispaly((index + 1) % personal.length)
          
        }
        console.log(btnAction)
        
      });
    });
  }