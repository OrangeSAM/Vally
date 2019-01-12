!function(){
    var view=document.querySelector('header');
    var controller={
        view:null,
        init:function(view){
            this.view=view;
            this.bindEvents()
        },
        bindEvents:function(){
            window.addEventListener('scroll', (x) =>{
                if (window.scrollY > 0) {
                    this.active();
                } else {
                    this.deactivate();
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky');
        },
        deactivate:function() {
            this.view.classList.remove('sticky');
        },
    }
    controller.init(view);
}.call();
