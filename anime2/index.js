const animebtn = document.getElementById("animebtn");
console.log(animebtn);

// animebtn.onclick = (function () {
//     // anime({
//     //     targets: '#animeSample',
//     //     translateX: 250
//     //   });
//     // anime({
//     //     targets: '#animeSample',
//     //     translateX: 500,
//     //     left: '240px',
//     //     backgroundColor: '#FFF',
//     //     borderRadius: ['0%', '80%'],
//     //     easing: 'easeInOutQuad'
//     // });
//     // anime({
//     //     targets: '#animeSample',
//     //     translateX: 500,
//     //     scale: 2,
//     //     rotate: '5turn'
//     // });
//     anime({
//         targets: '#animeSample',
//         translateX: 500,
//         scale: 2,
//         rotate: '5turn'
//     });
// });

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 500,
//         duration: 2000
//     });
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 500,
//         translateY: 500,
//         duration: 2000,
//     })
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 300,
//         delay: 1000
//     });
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 300,
//         endDelay: 1000,
//         direction: 'alternate'
//     })
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 600,
//         easing: 'easeInOutExpo'
//     })
// };

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: {
//             value: 300,
//             duration: 800
//         },
//         rotate: {
//             value: 360,
//             duration: 800,
//             easing: 'easeInOutSine'
//         },
//         scale: {
//             value: 5,
//             duration: 800,
//             delay: 800,
//             easing: 'easeInOutQuart'
//         },
//         delay: 500
//     });
// }
// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 400,
//         loop: 20,
//         direction: 'alternate',
//         easing: 'easeInOutSine'
//     });
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: 300,
//         autoplay: true,
//         easing: 'easeInOutSine'
//     });
// }
// animebtn.onclick = function () {
//     anime({
//         targets: 'animeSample',
//         width: '100 %',
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         loop: true
//     });
// }
// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: [100, 300],
//         delay: 500,
//         direction: 'alternate',
//         loop: true
//     });
// }
// animebtn.onclick = (e => {
//     anime({
//         targets: '#animeSample',
//         keyframes: [{
//                 translateY: -40
//             },
//             {
//                 translateX: 250
//             },
//             {
//                 translateY: 40
//             },
//             {
//                 translateX: 0
//             },
//             {
//                 translateY: 0
//             }
//         ],
//         duration: 4000,
//         easing: 'easeOutElastic(1,.8)',
//         loop: true
//     });
// })
// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         translateX: [{
//                 value: 300,
//                 duration: 1000,
//                 delay: 500
//             },
//             {
//                 value: 0,
//                 duration: 1000,
//                 delay: 500
//             }
//         ],
//         translateY: [{
//                 value: -40,
//                 duration: 1000,
//                 delay: 500
//             },
//             {
//                 value: 0,
//                 duration: 1000,
//                 delay: 500
//             }
//         ],
//         scaleX: [{
//                 value: 4,
//                 duration: 100,
//                 delay: 500,
//                 easing: 'easeOutExpo'
//             },
//             {
//                 value: 1,
//                 duration: 900
//             },
//             {
//                 value: 4,
//                 duration: 100,
//                 delay: 500,
//                 easing: 'easeOutExpo'
//             },
//             {
//                 value: 1,
//                 duration: 900
//             }
//         ],
//         scaleY: [{
//                 value: [1.75, 1],
//                 duration: 500
//             },
//             {
//                 value: 2,
//                 duration: 50,
//                 delay: 1000,
//                 easing: 'easeOutExpo'
//             },
//             {
//                 value: 1,
//                 duration: 50,
//             }, {
//                 value: 2,
//                 duration: 100s,
//                 delay: 1000,
//                 easing: 'easeOutExpo'
//             }, {
//                 value: 3,
//                 duration: 450
//             }
//         ],
//         easing: 'easeOutElastic(1,.8)',
//         loop: true

//     });
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         points: [{
//                 value: [
//                     '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//                     '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
//                 ]
//             }, {
//                 value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369'
//             }, {
//                 value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'
//             },
//             {
//                 value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369'
//             }
//         ],
//         easing: 'easeOutQuad',
//         duration: 2000,
//         loop: true
//     });
// }

// animebtn.onclick = function () {
//     anime({
//         targets: '#animeSample',
//         keyframes: [{
//                 translateY: -30,
//                 skew: -30
//             },
//             {
//                 translateX: 250,
//                 skew: 30
//             },
//             {
//                 translateY: 60,
//                 skew: -30
//             },
//             {
//                 translateX: 0,
//                 skew: 30
//             }
//             // {
//             //     translateY: 0,
//             //     skew: -10
//             // }
//         ],
//         duration: 2000,
//         easing: 'easeOutCirc(0,.9)',
//         loop: true
//     });
// }

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 5000,
//     easing: "linear"
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1500,
//     translateX: 200,
//     rotate: [-180, 0, 180]
//   });
// };

// animebtn.onclick = e => {
//   anime({
//     targets: "#animeSample",
//     duration: 800,
//     easing: "easeOutCirc",
//     scale: [0, 1],
//     rotate: [-180, 0, 180],
//     opacity: {
//       value: 1,
//       easing: "linear",
//       duration: 100
//     }
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 500,
//     easing: "easeOutQuad",
//     rotate: [35, 0],
//     opacity: {
//       value: 3,
//       easing: "linear",
//       duration: 100
//     }
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1500,
//     easing: "easeOutQuad",
//     rotate: [20, 10],
//     opacity: {
//       value: 4,
//       easing: "easeInExpo",
//       duration: 100
//     }
//   });
// };

// animebtn.onclick = e => {
//   anime({
//     targets: "#animeSample",
//     translateX: 250,
//     duration: 3000,
//     loop: 4
//   });
// };

// animebtn.onclick = e => {
//   anime({
//     targets: "#animeSample",
//     translateX: 450,
//     duration: 400,
//     easing: "easeInExpo",
//     loop: true
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1000,
//     easing: "easeOutQuad",
//     rotate: [0, 360],
//     loop: 10,
//     value: 300
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 500,
//     easing: "easeInOutQuint",
//     rotate: [0, 360],
//     loop: 10,
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1500,
//     easing: "easeInCirc",
//     rotate: [0, 360, 0],
//     loop: 5
//   });
// };

// animebtn.onclick = function() {
//   var animeEl = document.querySelector("#animeSample");
//   animeEl.style.transform = "translateX(60px)";
//   anime({
//     targets: "#animeSample",
//     rotate: {
//       value: "+=2turn", // 0 * 2 = '2turn'
//       duration: 1800,
//       easing: "easeInOutSine"
//     },
//     loop: 4
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1500,
//     easing: "easeInCirc",
//     rotate: [0, 360, 0],
//     loop: 5
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 400,
//     borderRadius: ["0%", "50%", "0%"],
//     easing: "easeInOutQuad",
//     opacity: [1, 0.1, 1],
//     loop: 5
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 500,
//     borderRadius: ["0%", "50%", "0%"],
//     easing: "easeInSine",
//     opacity: [1, 0.1, 1]
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 500,
//     borderRadius: ["0%", "50%", "0%"],
//     easing: "easeInOutQuad",
//     opacity: [1, 0.5, 1],
//     loop: 6
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 800,
//     translateX: 200,
//     rotate: [-180, 0, 180],
//     easing: "easeInSine"
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 400,
//     translateX: 200,
//     rotate: [-180, 0, 180],
//     easing: "easeInSine"
//   });
// };
// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample2",
//     duration: 300,
//     translateX: 300,
//     rotate: [-180, 0, 180],
//     easing: "easeInSine"
//   });
// };

// animebtn.onclick = function() {
//   anime({
//     targets: "#animeSample",
//     duration: 1200,
//     borderRadius: ["0%", "50%", "0%"],
//     easing: "easeInOutCubic",
//     opacity: [1, 0.2, 1],
//     loop: 6
//   });
// };

// var animeTimeline = anime.timeline({
//   easing: "easeInSine",
//   duration: 750
// });
// animeTimeline
//   .add({
//     targets: "#animeSample",
//     translateX: 250
//   })
//   .add({
//     targets: "#animeSample2",
//     translateX: 250
//   });

// var animeT = anime.timeline({
//   duration: 500,
//   loop: 6,
//   easing: "easeInOutCubic",
//     opacity: [1, 0.2, 1]

// });
// animeT
//   .add({
//     targets: "#animeSample",
//     translateX: 300
//   })
//   .add({
//     targets: "#animeSample2",
//     translateX: 300
//   });

// var animeT = anime.timeline({
//   duration: 3000,
//   loop: true,
//   easing: "easeInOutCubic",
//   keyframes: [
//     { translateY: -40 },
//     { translateX: 250 },
//     { translateY: 40 },
//     { translateX: 0 },
//     { translateY: 0 }
//   ]
// });
// animeT
//   .add({
//     targets: "#animeSample"
//   })
//   .add({
//     targets: "#animeSample2"
//   });

// animebtn.onclick = function() {
//   var animeT = anime.timeline({
//     duration: 3000,
//     loop: true
//   });
//   animeT
//     .add({
//       targets: "#animeSample",
//       translateX: 250
//     })
//     .add({
//       targets: "#animeSample2",
//       translateX: 150
//     });
// };

animebtn.onclick = function() {
  var animeT = anime.timeline({
    duration: 2000,
    loop: true
  });
  animeT
    .add({
      targets: "#animeSample",
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 }
      ]
    })
    .add({
      targets: "#animeSample2",
      translateX: [
        { value: 150, duration: 800, delay: 300 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 }
      ]
    });
};
