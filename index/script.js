let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add('show-anim');

        }
        else{
            sec.classList.remove('show-anim')
        }
    })
}


window.sr = scrollReveal({ reset: true});

sr.reveal('.sec-5', { duration: 1000});