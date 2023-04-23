const navbar = document.querySelector('.nav')
const navBtn = document.querySelector('.nav-btn')
const scrollBtn = document.querySelector('.scroll-btn')


// скрытие/показ кнопки прокрутки
window.addEventListener('scroll', showScrollButton)
function showScrollButton() {
    if (window.scrollY > 500) scrollBtn.style.animation = 'appearance 1s forwards'   
    else if(getComputedStyle(scrollBtn).getPropertyValue('opacity') > 0)  scrollBtn.style.animation = 'disappearance 1s forwards'
}


// скрытие навбара
document.addEventListener('click', (event) => {
	const withinBoundaries = event.composedPath().includes(navbar) || event.composedPath().includes(navBtn)
	if (!withinBoundaries) {
		navbar.classList.remove('open')
	}
})

// анимация для навбара
navBtn.onclick = () => {
    navbar.style.display = 'block'
    navbar.classList.toggle('open')
}

// анимации для продуктов
const products = document.querySelectorAll('.product')
Array.from(products).forEach(el => {
    el.addEventListener('mouseover', () => el.querySelector('.product-btn-container').style.animation = 'translate-btn-in .5s forwards ease-out')
    el.addEventListener('mouseout', () => el.querySelector('.product-btn-container').style.animation = 'translate-btn-out .5s forwards ease-out')
})