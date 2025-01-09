window.addEventListener('scroll', function() {
    
    let header = document.querySelector('header');
    if (window.scrollY > 50) {  //jeśli strona jest przewinięta o więcej niż 50px
        
        header.classList.add('scrolled');  //dodaj klasę 'scrolled'
    } else {
        header.classList.remove('scrolled');  //usuń klasę 'scrolled'
    }
    
});