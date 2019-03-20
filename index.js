// const animebtn = document.getElementById("animebtn");
// console.log(animebtn);

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

// animebtn.onclick = function() {
//   var animeT = anime.timeline({
//     duration: 2000,
//     loop: true
//   });
//   animeT
//     .add({
//       targets: "#animeSample",
//       translateX: [
//         { value: 250, duration: 1000, delay: 500 },
//         { value: 0, duration: 1000, delay: 500 }
//       ],
//       translateY: [
//         { value: -40, duration: 500 },
//         { value: 40, duration: 500, delay: 1000 },
//         { value: 0, duration: 500, delay: 1000 }
//       ],
//       scaleX: [
//         { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//         { value: 1, duration: 900 },
//         { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//         { value: 1, duration: 900 }
//       ],
//       scaleY: [
//         { value: [1.75, 1], duration: 500 },
//         { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
//         { value: 1, duration: 450 },
//         { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
//         { value: 1, duration: 450 }
//       ]
//     })
//     .add({
//       targets: "#animeSample2",
//       translateX: [
//         { value: 150, duration: 800, delay: 300 },
//         { value: 0, duration: 1000, delay: 500 }
//       ],
//       translateY: [
//         { value: -40, duration: 500 },
//         { value: 40, duration: 500, delay: 1000 },
//         { value: 0, duration: 500, delay: 1000 }
//       ],
//       scaleX: [
//         { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//         { value: 1, duration: 900 },
//         { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//         { value: 1, duration: 900 }
//       ],
//       scaleY: [
//         { value: [1.75, 1], duration: 500 },
//         { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
//         { value: 1, duration: 450 },
//         { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
//         { value: 1, duration: 450 }
//       ]
//     });
// };

// animebtn.onclick = function() {
//   var path = anime.path("#animeSample path");
//   anime({
//     targets: "#animeSample",
//     translateX: path("x"),
//     translateY: path("y"),
//     rotate: path("angle"),
//     easing: "linear",
//     duration: 2000,
//     loop: true
//   });
// };

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", () => {
//   return anime({
//     targets: "#animeSample",
//     duration: 2000,
//     translateX: 250
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({ targets: "#animeSample", duration: 2000, loop: true })
//     .add({
//       translateX: 250
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       duration: 3000,
//       loop: true
//     })
//     .add({
//       targets: "#animeSample",
//       translateX: 250,
//       easing: "easeOutExpo"
//     })
//     .add({
//       targets: "#animeSample2",
//       translateX: 250,
//       easing: "easeInExpo"
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", () => {
//   return anime
//     .timeline({
//       duration: 200,
//       loop: true
//     })
//     .add({
//       targets: "#animeSample",
//       rotate: [0, 360],
//       easing: "easeInExpo"
//     })
//     .add({
//       targets: "#animeSample2",
//       rotate: [-360, 0],
//       easing: "easeInExpo"
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       loop: true
//     })
//     .add({
//       targets: "#animeSample",
//       duration: 250,
//       opacity: [1, 0.5, 1],
//       rotate: [0, 360]
//     })
//     .add({
//       targets: "#animeSample2",
//       duration: 200,
//       opacity: [0.5, 1]
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       loop: true,
//       duration: 250
//     })
//     .add({
//       targets: "#animeSample",
//       rotate: [-360, 0],
//       easing: "easeInOutCubic"
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", () => {
//   return anime
//     .timeline({
//       loop: true,
//       opacity: [1, 0.3, 1]
//     })
//     .add({
//       targets: "#animeSample",
//       duration: 250
//     })
//     .add({
//       targets: "#animeSample2",
//       duration: 400
//     });
// });

// const btn = document.querySelector('#animebtn');
// btn.addEventListener('click', function () {
//     return anime.timeline({
//         loop: true,
//         opacity:[1,0.5,1]
//     })
//         .add({
//             targets: '#animeSample',

//     })
// })

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       targets: ".items",
//       easing: "easeInOutCubic",
//       duration: 2000
//     })
//     .add({
//       translateX: function(el, i, len) {
//         const angle = (360 / len) * i;
//         const radian = Math.PI / 180;
//         return Math.sin(angle * radian) * 30;
//       },
//       translateY: function(el, i, len) {
//         const angle = (360 / len) * i;
//         const radian = Math.PI / 180;
//         return Math.cos(angle * radian) * 30;
//       }
//     });
// });

//  ------------  RepeatRotate ------------------

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     scale: function(el, i) {
//       return [1 - i * 0.5, 1 + i * 0.5];
//     }
//     // rotateZ: function(el, i) {
//     //   const deg = 20;
//     //   return [0 - i * deg, 45 + i * deg];
//     // }
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     scale: function(el, i) {
//       return [1 - i * 0.5, 0 + i * 0.5];
//     }
//     // rotateZ: function(el, i) {
//     //   const deg = 20;
//     //   return [0 - i * deg, 45 + i * deg];
//     // }
//   });
// });

// ----------- RepeatScale ------------------
// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     scale: function(el, i) {
//       return [0, 1 + i * 0.5];
//     }
//     // rotateZ: function(el, i) {
//     //   const deg = 20;
//     //   return [0 - i * deg, 45 + i * deg];
//     // }
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     translateX: function(el, i) {
//       const deg = 30;
//       return [0 - i * deg, 1 + i * deg];
//     }
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       targets: ".items",
//       loop: true
//     })
//     .add({
//       direction: "alternate",
//       easing: "easeInSine",
//       duration: 3000,
//       translateX: function(el, i) {
//         const deg = 30;
//         return [0 - i * deg, 1 + i * deg];
//       }
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     translateX: function(el, i) {
//       const deg = 30;
//       return [0 - i * deg, 1 + i * deg];
//     }
//   });
// });

// --------- RepeatMove -------------
// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 2000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInSine",
//     // skewY: 45,
//     translateX: function(el, i) {
//       const dis = 40;
//       return [0 - i * dis, 1 + i * dis];
//     },
//     rotateZ: [-45, 45]
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 4000,
//     loop: true,
//     direction: "alternate",
//     rotateZ: [-180, 180],
//     rotateY: function(el, i) {
//       return [0, 90 + i * 10];
//     }
//   });
// });

// ---------- Z-axisRotate ---------------
// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     duration: 2000,
//     direction: "alternate",
//     loop: true,
//     easing: "easeInSine",
//     rotateX: function(el, i) {
//       return [Math.random() * -180, Math.random() * 180];
//     },
//     rotateY: function(el, i) {
//       return [Math.random() * -180, Math.random() * 180];
//     },
//     rotateZ: function(el, i) {
//       return [Math.random() * -180, Math.random() * 180];
//     }
//   });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime({
//     targets: ".items",
//     loop: true,
//     direction: "alternate",
//     duration: 1000,
//     easing: "easeInSine",
//     scale: 0.8,
//     opacity: [1, 0]
//   });
// });

// ---------- LineWeight ------------------
// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   return anime
//     .timeline({
//       targets: ".items",
//       loop: true,
//       direction: "alternate",
//       duration: 1000,
//       easing: "easeInSine",
//       scale: [0.8, 1]
//     })
//     .add({
//       targets: ".items1",
//       loop: true,
//       direction: "alternate",
//       duration: 1000,
//       easing: "easeInSine",
//       scale: [1.1, 1]
//     });
// });

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   var tl = "";
//   return (tl += anime.timeline({
//     loop: true,
//     easing: "easeOutQuart"
//   }));
//   tl.add({
//     width: "100%",
//     targets: ".black"
//   });
//   tl.add({
//     targets: ".white",
//     width: ["0%", "100%"]
//   });
// });

// const tl = anime.timeline({
//   loop: true,
//   easing: "easeOutQuart"
// });
// tl.add({
//   width: "100%",
//   targets: ".black"
// }).add({
//   targets: ".white",
//   width: ["0%", "100%"]
// });

// anime
//   .timeline({
//     loop: true,
//     easing: "easeInOutQuad"
//   })
//   .add({
//     width: "100%",
//     targets: ".black"
//   })
//   .add({
//     targets: ".white",
//     width: ["0%", "100%"]
//   });

// ---------- Trim Line ----------
// anime
//   .timeline({
//     loop: true,
//     easing: "easeInOutCirc"
//   })
//   .add({
//     targets: ".black",
//     width: "100%"
//   })
//   .add({
//     targets: ".white",
//     width: ["0%", "100%"]
//   });

// ------------- Text（できなかった） ---------------------
// var big = document.getElementById("textBig");
// var small = document.querySelector("#textSmall");
// big.textContent = ["A", "B", "C", "D"];
// small.textContent = ["a", "b", "c", "d"];
// console.log(small);

// anime
//   .timeline({
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutCirc"
//   })
//   .add({
//     targets: big,

//   });

// var item = document.querySelector(".items");
// console.log(item);

// const btn = document.querySelector("#animebtn");
// btn.addEventListener("click", function() {
//   anime({
//     targets: "#wrapper",
//     easing: "easeInBack",
//     loop: true,
//     duration: 3000,
//     direction: "alternate",
//     rotateZ: [0, 90, 180, 90, 200, 360, 180]
//   });
// });

// anime({
//   targets: "#wrapper",
//   easing: "easeInOutQuad",
//   loop: true,
//   duration: 1800,
//   direction: "alternate"
//   //   rotateZ: [-90, 90]
// });

// anime
//   .timeline({
//     targets: ".items1",
//     translateX: [200, -200],
//     duration: 2500,
//     easing: "linear",
//     loop: true
//   })
//   .add({
//     targets: ".items2",
//     translateX: [-200, 200],
//     duration: 2500,
//     easing: "linear"
//   });

// -------- Grid ---------------
// anime({
//   targets: ".square1",
//   scale: [1, 2],
//   duration: 1000,
//   easing: "easeInOutCubic",
//   direction: "alternate",
//   loop: true
// });

// anime({
//   targets: ".square1",
//   easing: "easeInCirc",
//   direction: "alternate",
//   loop: true,
//   duration: function() {
//     return anime.random(500, 3000);
//   },
//   translateX: function() {
//     return anime.random(-10, 200);
//   },
//   translateY: function() {
//     return anime.random(-10, 200);
//   },
//   rotate: function() {
//     return anime.random(-360, 360);
//   },
//   scale: function() {
//     return anime.random(0.5, 2.2);
//   },
//   borderRadius: function() {
//     return ["0%", "50%", "0%"];
//   }
// });

// anime
//   .timeline({
//     duration: 900,
//     loop: true
//   })
//   .add({
//     targets: ".items1",
//     // scale: [0, 1],
//     easing: "easeOutQuart"
//   })
//   .add({
//     targets: ".items2",
//     // scale: [0, 1],
//     easing: "easeOutCubic",
//     delay: 300
//   });

// anime({
//   targets: ".items1,.items2,.items3,.items4",
//   loop: true,
//   duration: 20,
//   easing: "easeInOutCubic",
//   direction: "alternate",
//   opacity: function() {
//     return anime.random(0.6, 1);
//   },
//   scale: function() {
//     return anime.random(0.9, 1);
//   }
// });

// anime({
//   targets: ".items1",
//   loop: true,
//   duration: 1000,
//   delay: 1000,
//   filter: ["blur(0px)", "blur(30px)"],
//   direction: "alternate",
//   easing: "easeOutExpo"
// });

// anime({
//   targets: ".items1",
//   clipPath: ["circle(0px at center)", "circle(100px at center)"],
//   loop: true,
//   easing: "easeInOutCubic"
// });

// anime({
//   targets: ".items1",
//   boxShadow: [
//     {
//       value: ["10px -10px 10px 0 currentColor", "10px 10px 20px 0 currentColor"]
//     },
//     { value: "-10px 10px 30px 0 currentColor" },
//     { value: "-10px -10px 20px 0 currentColor" },
//     { value: "10px -10px 10px 0 currentColor" }
//   ],
//   loop: true
// });

// anime({
//   targets: ".items1",
//   loop: true,
//   duration: 4500,
//   filter: ["blur(0px)", "blur(25px)"],
//   direction: "alternate",
//   easing: "easeInExpo"
// });

//----------- プチシェリー ---------------
// anime({
//     targets: ".items1",
//     duration: 5000,
//     loop: true,
//     direction: "alternate",
//     easing: "linear",
//     borderColor: ["#EEDFAA", "#FFC7CD"],
//     scale: function () {
//         loop:1,
//         return [0,1]
//     },
//     rotateX: function (el, i) {
//         return [0, Math.random() * -180, Math.random() * 180];
//     },
//     rotateY: function (el, i) {
//         return [0, Math.random() * -180, Math.random() * 180];
//     },
//     rotateZ: function (el, i) {
//         return [0, Math.random() * -180, Math.random() * 180];
//     }
// });
// anime({
//     targets: ".items2",
//     duration: 4500,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInExpo",
//     filter: ["blur(5px)", "blur(25px)"]
// });

// ----- ビターオレンジ -----
// anime
//     .timeline({
//         duration: 2000,
//         loop: true
//     })
//     .add({
//         targets: ".items1",
//         scale: [0, 1],
//         easing: "easeOutQuart"
//     })
//     .add({
//         targets: ".items2",
//         scale: [0, 1.2],
//         easing: "easeOutCubic",
//         delay: 100
//     });

// anime({
//     targets: '.items1',
//     loop: true,
//     duration: 2500,
//     delay: [100, 500],
//     translateX: [0, 28, 0, 50, 0],
//     easing: "easeOutExpo"
// })
// anime({
//     targets: '.items2',
//     loop: true,
//     duration: 2500,
//     delay: [100, 500],
//     translateX: [0, -28, 0, -50, 0],
//     easing: "easeOutExpo"
// })

// anime({
//     duration: 2000,
//     easing: 'linear',
//     loop: true,
//     targets: '.items2,.items3,.items4,.items5',
//     keyframes: [{
//             translateX: 150
//         },
//         {
//             translateY: 150
//         },
//         {
//             translateX: 0
//         },
//         {
//             translateY: 0
//         }
//     ],
// })

// anime({
//     targets: '.items1',
//     duration: 2000,
//     loop: true,
//     filter: ['saturate(0%)', 'saturate(50%)'],
//     direction: 'alternate',
//     easing: 'easeOutQuint'
// })

// anime({
//     targets: '.items2',
//     filter: ['blur(10%)', 'blur(30%)'],

//     translateY: function () {
//         return anime.random(-200, 100);
//     },

//     translateX: function () {
//         return anime.random(50, 200);
//     },
//     translateY: function () {
//         return anime.random(100, 300);
//     },
//     translateX: function () {
//         return anime.random(-100, -500);
//     },
//     loop: true,
//     duration: 10000,
//     easing: 'linear'
// })

// anime.timeline({
//         targets: ".items1",
//         duration: 2000,
//         delay: function (el, i) {
//             return i * 200
//         },
//         loop: true,
//         direction: 'alternate',
//         easing: "easeInCubic",
//         rotateX: function (el, i) {
//             return [90, -90];
//         },
//         rotateY: function (el, i) {
//             return [90, -90];
//         },
//         rotateZ: function (el, i) {
//             return [180, -180];
//         },
//         backgroundColor: ['#FFF76D', '#FFD6D6', '#8EEFAF'],
//         scale: [0.8, 2, 0.8],
//         opacity: [0, 3, 0],
//         filter: ["blur(3px)", "blur(2px)", "blur(2px)"],

//     })
//     .add({
//         targets: '.items2',
//         duration: 2000,
//         direction: "alternate",
//         loop: true,
//         easing: "easeInSine",
//         rotateX: function (el, i) {
//             return [Math.random() * -180, Math.random() * 180];
//         },
//         rotateY: function (el, i) {
//             return [Math.random() * -180, Math.random() * 180];
//         },
//         rotateZ: function (el, i) {
//             return [Math.random() * -180, Math.random() * 180];
//         },
//         scale: [0, 2, 0]
//     })

// anime
//   .timeline({
//     direction: 'alternate',
//     loop: true
//   })
//   .add({
//     targets: '.items',
//     duration: 2000,
//     easing: 'easeOutQuad',
//     delay: function(el, i) {
//       return 200 * i;
//     },
//     translateX: function(el, i) {
//       return [
//         countW * (i % 4) + itemsWidth * (i % 4),
//         wrapperWidth / 2 - itemsWidth / 2
//       ];
//     },
//     translateY: function(el, i) {
//       return [countH * ~~(i / 4), wrapperHeight / 2 - itemsHeight / 2];
//     },
//     rotateX: [0, 720],
//     rorateY: [0, 360],
//     scale: [1, 3, 2],
//     backgroundColor: ['#FF9898', '#FFD6D6'],
//   })
//   .add({
//     targets: '.items',
//     filter: ['blur(0px)', 'blur(2px)', 'blur(1px)'],
//     scale: [1, 4, 1],
//     easing: 'easeOutQuad',
//     duration: 2000,
//     delay: function(el, i) {
//       return i * 200;
//     },
//     rotateX: function(el, i) {
//       return [-360, 360];
//     },
//     rotateY: function(el, i) {
//       return [180, -180];
//     },
//     backgroundColor: ['#FFD6D6', '#FF9898'],
//   });

// anime
//   .timeline({
//     direction: 'alternate',
//     loop: true
//   })
//   .add({
//     targets: '.items',
//     duration: 3000,
//     easing: 'easeInOutSine',
//     delay: function(el, i) {
//       return 250 * i;
//     },
//     translateX: function(el, i) {
//       return [
//         countW * (i % 4) + itemsWidth * (i % 4),
//         wrapperWidth / 2 - itemsWidth / 2
//       ];
//     },
//     translateY: function(el, i) {
//       return [countH * ~~(i / 4), wrapperHeight / 2 - itemsHeight / 2];
//     },
//     rotateX: [0, 900],
//     rorateY: [0, 900],
//     scale: [1, 4, 2, 1],
//     backgroundColor: ['#FFD6D6', '#FF9898']
//   });

// anime
//   .timeline({})
//   .add({
//     targets: '.items',
//     duration: 900,
//     easing: 'easeInSine',
//     delay: function(el, i) {
//       return 300 * i;
//     },
//     translateX: function(el, i) {
//       return [
//         countW * (i % 4) + itemsWidth * (i % 4),
//         wrapperWidth / 2 - itemsWidth / 2
//       ];
//     },
//     translateY: function(el, i) {
//       return [countH * ~~(i / 4), wrapperHeight / 2 - itemsHeight / 2];
//     },
//     // rotateX: [180, 360],
//     // rorateY: [180, 360],
//     scale: [1, 3],
//     backgroundColor: ['#FFCCCC', '#FFFCA7', '#FFCCCC']
//   })
//   .add({
//     targets: '.items',
//     delay: function(el, i) {
//       return 100 * i;
//     },
//     duration: 3000,
//     direction: 'alternate',
//     loop: true,
//     easing: 'easeOutCubic',
//     rotateX: function(el, i) {
//       return [0, 180];
//     },
//     rotateY: function(el, i) {
//       return [0, 180];
//     },
//     rotateZ: function(el, i) {
//       return [-90, 90];
//     },
//     backgroundColor: ['#FFCCCC', '#FFFCA7', '#C4DA9F', '#FFFCA7'],
//     filter: ['blur(0px)', 'blur(10px)'],
//     scale: [2, 4, 2]
//   })
//   .add({
//     targets: '.items',
//     duration: 1200,
//     easing: 'easeInQuart',
//     filter: ['blur(8px)', 'blur(0px)'],
//     scale: [3, 0],
//     opacity: [1, 0],
//     backgroundColor: ['#FFFCA7', '#FFCCCC']
//   });

const wrapper = document.querySelector('#wrapper');
wrapper.insertAdjacentHTML('afterbegin', htmlCreater('items', 8));
const items = document.querySelector('.items');
const wrapperWidth = wrapper.clientWidth;
const wrapperHeight = wrapper.clientHeight;
const itemsWidth = items.clientWidth;
const itemsHeight = items.clientHeight;
var countW = (wrapperWidth - itemsWidth * 4) / 3;
var countH = wrapperHeight - itemsHeight;

function htmlCreater(className, number) {
  let html = '';
  for (let i = 0; i < number; i++) {
    html += `<div class ="${className}">▲</div>`;
  }
  return html;
}

const itemsBorder = '15px';

anime
  .timeline({})
  .add({
    targets: '.items',
    duration: 1800,
    easing: 'linear',
    translateX: [
      wrapperWidth / 2 - itemsWidth / 2,
      wrapperWidth / 2 - itemsWidth / 2
    ],
    translateY: [
      wrapperHeight / 2 - itemsHeight,
      wrapperHeight / 2 - itemsHeight
    ],
    scale: [4, 1],
    opacity: [1, 0, 1, 0, 1, 0],
    color: '#4DBEFF'
  })
  .add({
    targets: '.items',
    duration: 1000,
    easing: 'linear',
    translateX: [
      wrapperWidth / 2 - itemsWidth / 2,
      wrapperWidth / 2 - itemsWidth / 2
    ],
    translateY: [
      wrapperHeight / 2 - itemsHeight,
      wrapperHeight / 2 - itemsHeight
    ],
    scale: [1, 4, 1],
    opacity: 1,
    color: '#4DBEFF'
  })
  .add({
    targets: '.items',
    duration: 250,
    easing: 'linear',
    translateX: function(el, i) {
      return [
        wrapperWidth / 2 - itemsWidth / 2,
        countW * (i % 4) + itemsWidth * (i % 4)
      ];
    },
    translateY: function(el, i) {
      return [wrapperHeight / 2 - itemsHeight / 2, countH * ~~(i / 4)];
    },
    rotateZ: [-180, 180],
    opacity: [1, 0],
    scale: 0.5,
    color: ['#4DBEFF', '#48D1CC']
  });
