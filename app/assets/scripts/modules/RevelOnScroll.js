import throttle from 'lodash/throttle';
import { debounce } from 'lodash';

class RevealOnScroll {

    constructor(els, thresholdPercent) {
        this.itemsToRevel = els;
        this.thresholdPercent = thresholdPercent;
        this.hideIntitally()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.browserHeight = window.innerHeight;
        this.events()
    }

    events() {
        window.addEventListener( 'scroll', this.scrollThrottle);
        window.addEventListener("resize", debounce(()=>{
            console.log("resize run")
            this.browserHeight = window.innerHeight
        }, 330) )
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
        let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
        if (scrollPercent < this.thresholdPercent) {
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