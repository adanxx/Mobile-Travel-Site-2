import'../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevelOnScroll';

new MobileMenu();
let revelOnScroll = new RevealOnScroll();

if(module.hot){
    module.hot.accept();
}

