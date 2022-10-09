import throttle from 'lodash/throttle';

class RevealOnScroll {

    constructor() {
        this.itemsToRevel = document.querySelectorAll('.feature-item');
        this.hideIntitally()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events()
    }

    events() {
        window.addEventListener( 'scroll', this.scrollThrottle);
    }

    calcCaller(){
        // console.log('run scroll')
        this.itemsToRevel.forEach(el => {
           if(el.isRevealed == false){
            this.calculateIfScrolledTo(el);
           }
        })
    }

    calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add('reveal-item--is-visible')
            el.isRevealed = true;
            if(el.isLastItem == true){
                console.log('lastItem '+el.isLastItem)
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }

    }

    hideIntitally() {
        this.itemsToRevel.forEach(element => { 
            element.classList.add('reveal-item')
            element.isRevealed = false;
      })
    
      this.itemsToRevel[this.itemsToRevel.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;