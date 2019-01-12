(
    function () {
        var view = document.querySelector('.wrapper > nav');
        var controller = {
            view: null,
            aTags: null,
            init: function (view) {
                this.view = view;
                this.initAnimation();
                this.bindEvents();
            },
            initAnimation: function () {
                function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                requestAnimationFrame(animate);
            },
            scrollToElement: function (element) {
                let top = element.offsetTop;
                let currentTop = window.scrollY;
                let targetTop = top - 115;
                let s = targetTop - currentTop;
                //路程
                var coords = {
                    y: currentTop
                };
                //起始位置
                var t = Math.abs((s / 100) * 300);
                if (t > 500) {
                    t = 500
                }
                var tween = new TWEEN.Tween(coords) //起始位置
                    .to({
                        y: targetTop
                    }, t) //结束位置和时间
                    .easing(TWEEN.Easing.Cubic.InOut) //缓动类型
                    .onUpdate(function () {
                        //coords.y已经变了
                        window.scrollTo(0, coords.y);
                    }).start();
            },
            bindEvents: function () {
                let aTags = view.querySelectorAll('.wrapper > nav > ul > li a');
                for (let i = 0; i < aTags.length; i++) {
                    aTags[i].onclick = (x) => {
                        x.preventDefault();
                        let a = x.currentTarget;
                        let href = a.getAttribute('href');
                        let element = document.querySelector(href);
                        this.scrollToElement(element);
                    }
                }
            }
        }
        controller.init(view);
        //有all 和没all的区别

        // function animate(time) {
        //     requestAnimationFrame(animate);
        //     TWEEN.update(time);
        // }
        // requestAnimationFrame(animate);
        // for (let i = 0; i < tags.length; i++) {
        //     tags[i].onclick = function (x) {
        //         //在这里使用 tags[i].  和x. 的本质区别是什么
        //         x.preventDefault();
        //         //获得点击元素的href属性值
        //         //为什么突然用tags[i]就不行了
        //         let anchor = this.hash;
        //         //查找出点击元素对应区块距离页面（而不是视口）顶部的距离
        //         let distance = (document.querySelector(anchor)).offsetTop;

        //         let currenttop = window.scrollY;
        //         let targettop = distance - 115;
        //         let distances = targettop - currenttop;
        //         let coords = {
        //             y: currenttop
        //         };
        //         var time = Math.abs((distances / 100) * 300) //时间
        //         if (time > 500) {
        //             time = 500
        //         }
        //         var tween = new TWEEN.Tween(coords)
        //             .to({
        //                 y: targettop
        //             }, time) //结束位置 和 时间
        //             .easing(TWEEN.Easing.Cubic.InOut)
        //             .onUpdate(function () {
        //                 window.scrollTo(0, coords.y)
        //             })
        //             .start();
        //         //window.scrollTo(0,distance-70);
        //         //because of the stick navbar,
        //         //here should scroll less than the distance where the divsion to the (0,0)
        //     }
        // }
    }
).call()