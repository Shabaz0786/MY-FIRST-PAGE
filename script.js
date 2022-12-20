var tl= gsap.timeline();

gsap.from(".nav",{
    y:-100,
    duration:2,
    opacity:1,
    delay:0.5,
})

tl.from(".line1",{
    x:"-600px",
    opacity:0,
    duration:0.7,
})
.from(".line2",{
    y:"-500px",
    opacity:0,
    duration:0.8,

})
.from(".line3",{
    x:"600px",
    opacity:0,
    duration:0.7,
})
.from("video",{
    opacity:1,
    scale:2,
    stagger:1,
    rotate:360,
    // yoyo:true,
})
