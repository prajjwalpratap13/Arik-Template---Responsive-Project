let tl=gsap.timeline();
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveAnimation();

let crsr=document.querySelector("#crsr");

let body=document.querySelector("body");
body.addEventListener("mousemove",(dets)=>{
    gsap.to(crsr,{
        left: dets.x,
        top: dets.y
    })
})
gsap.from("#page1 h1, #page1 p",{
    y: 20,
    opacity: 0
})
gsap.from("#page3 .container .boxes",{
    y: 20,
    opacity: 0,
    scale: 0,
    stagger: 0.12,
    scrollTrigger: ("#page3 .container .boxes",{
        scroller: "#main",
        trigger: "#page3 .container .boxes",
        start: "top 95%"
    })
})
tl.from("#page4 .topic h3,#page4 .topic .content",{
    y: 25,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ("#page4 .topic h3,#page4 .topic .content",{
        scroller: "#main",
        trigger: "#page4 .topic h3,#page4 .topic .content",
        start: "top 70%",
        end: "top 40%",
        scrub: 2
    })
})
tl.from(".pictures .img",{
    y: 30,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: (".pictures .img",{
        scroller: "#main",
        trigger: ".pictures .img",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    })
})
tl.from("#page5 .center .topic h3,#page5 .center .topic p",{
    y: 30,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ("#page5 .center .topic h3,#page5 .center .topic p",{
        scroller: "#main",
        trigger: "#page5 .center .topic h3,#page5 .center .topic p",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    })
})
tl.from("#page5 .flex .dabba",{
    y: 30,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ("#page5 .flex .dabba",{
        scroller: "#main",
        trigger: "#page5 .flex .dabba",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    })
})
tl.from("#page6 .content h2",{
    y: 30,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ("#page6 .content h2",{
        scroller: "#main",
        trigger: "#page6 .content h2",
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    })
})

var menu=document.querySelector("#page1 .click");
var link=document.querySelector("#page1 .nav .rest .links");
var flag=0;
menu.addEventListener("click",()=>{
    if(flag==0){
        flag=1;
        link.style.height=40+"vh";
        link.style.border= 1+"px solid grey";
        menu.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    }
    else{
        flag=0;
        link.style.height=0;
        link.style.border= 0;
        menu.innerHTML=`<i class="ri-menu-line"></i>`;
    }
})