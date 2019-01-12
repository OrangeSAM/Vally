(
    function () {
        let tags = document.querySelectorAll('.wrapper > nav > ul >li a');
        //有all 和没all的区别

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        for (let i = 0; i < tags.length; i++) {
            tags[i].onclick = function (x) {
                //在这里使用 tags[i].  和x. 的本质区别是什么
                x.preventDefault();
                //获得点击元素的href属性值
                //为什么突然用tags[i]就不行了
                let anchor = this.hash;
                //查找出点击元素对应区块距离页面（而不是视口）顶部的距离
                let distance = (document.querySelector(anchor)).offsetTop;

                let currenttop = window.scrollY;
                let targettop = distance - 115;
                let distances = targettop - currenttop;
                let coords = {
                    y: currenttop
                };
                var time = Math.abs((distances / 100) * 300) //时间
                if (time > 500) {
                    time = 500
                }
                var tween = new TWEEN.Tween(coords)
                    .to({
                        y: targettop
                    }, time) //结束位置 和 时间
                    .easing(TWEEN.Easing.Cubic.InOut)
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y)
                    })
                    .start();
                //window.scrollTo(0,distance-70);
                //because of the stick navbar,
                //here should scroll less than the distance where the divsion to the (0,0)
            }
        }
    }
).call()