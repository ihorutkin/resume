var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer", "Frontend Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

let navbar = document.querySelector('.nav')
console.log(navbar)
let elem = navbar.querySelectorAll('a')
console.log(elem)

for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', function(event){
        let elem1 = elem[0]
        let elem2 = event.target
        if(elem2.className === 'active'){
        }
        else if(elem2.className != 'active'){
            for(let j = 0; j < elem.length; j++){
                elem[j].classList.remove('active')
            }
            elem2.classList.toggle('active')
        }
    })
}