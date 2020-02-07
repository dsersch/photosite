const nav = document.querySelector('nav');
const header = document.querySelector('header');
const scrollOptions = {
    rootMargin: '-90% 0px 0px 0px'
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry.target)
        if (!entry.isIntersecting) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    })
}, scrollOptions)

observer.observe(header);