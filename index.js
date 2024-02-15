var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y+ "px"
    crsr_blur.style.left = dets.x - 200 + "px"
    crsr_blur.style.top = dets.y - 200 + "px"
    
})

var h4every = document.querySelectorAll("#nav h4");
var h1every = document.querySelectorAll("#page4");
var h1every = document.querySelectorAll("#page4");
h4every.forEach(function(elem){
    console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="0.1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid white"
        crsr.style.backgroundColor="#95C11E"

    })
})
h1every.forEach(function(elem){
    console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="0.1px solid white"
        crsr.style.backgroundColor="transparent"
        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid white"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70vh",
        scrub: 3
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        markers:true,
        scrub:2
    }
})


gsap.from("#quote1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#quote1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#quote2",{
    y:70,
    x:70,
    scrollTrigger:{
      trigger:"#quote1",
      scroller:"body",
    //   markers:true,
      start:"top 50%",
      end:"top 45%",
      scrub:4
    }
  })
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 80%",
        scrub:3
    }

})