let menuBurger = document.querySelector('.menu-bar')
let headerSm = document.querySelector('.header__nav-sm')

menuBurger.addEventListener('click', function() {
	this.classList.toggle("change")
	headerSm.classList.toggle('active')
})