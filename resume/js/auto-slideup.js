! function () {
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }
    findClosestAndRemoveOffset();
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset();
    })

    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        //为1的原因，specialTags[0]需要和specialTags[1]比较
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                    window.scrollY)) {
                minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove('offset');
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]');
        console.log(a);
        //let li=a.parentNode;
        //let brothersAndMe=a.parentNode.children;
        let li = a.parentNode;
        //console.log(li);
        let brothersAndMe = li.parentNode.children;
        for (let q = 0; q < brothersAndMe.length; q++) {
            brothersAndMe[q].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
}.call()