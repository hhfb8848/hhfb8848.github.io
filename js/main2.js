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

// 粒子背景
particlesJS("particles-js", {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#3399FF"
        },
        shape: {
            type: "edge",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#3399FF",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 125,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 60,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
