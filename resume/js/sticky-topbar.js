!function(){
    window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky')
        }
    })
}.call();
