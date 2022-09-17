/* 
    使用插件的js
*/


// 打字效果
var typed = new Typed('.auto-typing-effect', {
    strings: [
        "好好学习，天天向上",
        "Study hard and make progress every day",
        "不积跬步，无以至千里",
        "Short step, not even thousands of miles",
        "不积小流，无以成江海",
        "Not small streams, beyond into the sea"
    ],
    typeSpeed: 150,//打字速度
    backSpeed: 70,//回退速度
    loop: true,//循环打字
})

// 滑动效果

function splitScroll() {
    let controller2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.left-body',
        triggerHook: 0
    })
        .setPin(".left-body")
        .addTo(controller2);
}
splitScroll();