let tl=gsap.timeline();
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
        scroller: "body",
        trigger: "#page3 .container .boxes",
        start: "top 95%"
    })
})
tl.from("#page4 .topic h3,#page4 .topic .content",{
    y: 25,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ("#page4 .topic h3,#page4 .topic .content",{
        scroller: "body",
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
        scroller: "body",
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
        scroller: "body",
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
        scroller: "body",
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
        scroller: "body",
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