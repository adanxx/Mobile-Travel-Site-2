class MobileMenu {

    constructor(){
       this.menuIcon = document.querySelector('.site-header__menu-icon');
       this.menuContent = document.querySelector('.site-header__menu-contant');
       this.siteHeader = document.querySelector(".site-header");
       this.events();
    }

    events(){
       this.menuIcon.addEventListener('click', ()=> this.toggleTheMenu())
    }

    toggleTheMenu(){
        this.menuContent.classList.toggle("site-header__menu-contant--is-visible");
        this.siteHeader.classList.toggle("site-header__is-expanded");
        this.menuIcon.classList.toggle('site-header__menu_icon--close-x')
    }
}

export default MobileMenu;