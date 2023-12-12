const header = document.querySelector('header');
const stop = document.querySelector('.start-pic')

const sectionOneOptions = {
    rootMargin: " -100px 0px 0px 0px"

};

const stopOneObserver = new IntersectionObserver
(function(
    entries,
    stopOneObserver
){
    entries.forEach(entry => {
    if(!entry.isIntersecting){
        header.classList.add('nav-scrolled');
    }else{
        header.classList.remove('nav-scrolled');
    }
    });
},
sectionOneOptions);

stopOneObserver.observe(stop);