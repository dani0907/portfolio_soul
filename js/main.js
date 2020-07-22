Splitting();

// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});
// });

let businessMotion = gsap.timeline({paused:true});
businessMotion.from("#business h2",{
    opacity:0,
    duration:1
})
.from("#business .viewMore",{
    opacity:0,
    duration:1
},"-=1")
.from("#business .table .imgBox",{
    opacity:0,
    duration:1,
    scale:1.2
},"-=0.5")
.from("#business .table h3",{
    opacity:0,
    duration:1
},"-=0.8")
let rndMotion = gsap.timeline({paused:true});
rndMotion.from("#RND h2",{
    opacity:0,
    duration:1,
})
.from("#RND .viewMore",{
    opacity:0,
    duration:1
},"-=1")
.from("#RND",{
    right:"100%",
    duration:1,
    opacity:0
},"-=0.5")

.from("#RND .table .container .imgBox",{
    left:"100%",
    opacity:0,
    duration:1
},"-=1")
.from("#RND .table .container .txtBox",{
    opacity:0,
    duration:1,
},"-=1")
let visionMotion = gsap.timeline({paused:true});
visionMotion.from("#vision h2",{
    opacity:0,
    duration:1,
})
.from("#vision .fList",{
    marginTop:"0",
    duration:1
},"-=1")
.from("#vision .fList li:nth-child(3)",{
    top:"0",
    duration:1
},"-=0.8")


let socialMotion = gsap.timeline({paused:true});
socialMotion.from("#social h2",{
    opacity:0,
    duration:1,
})
.from("#social .txtBox .main",{
    opacity:0,
    duration:2,
    paddingBottom:"-100px"
},"-=0.6")
.from("#social .txtBox .sub1",{
    opacity:0,
    duration:2,
    paddingBottom:"-100px"
},"-=1.8")
.from("#social .txtBox .sub2",{
    opacity:0,
    duration:2,
    paddingBottom:"-100px"
},"-=1.8")
.from("#social .txtBox .viewMore",{
    opacity:0,
    duration:1,
    marginTop:"100px"
},"-=1.8")
let mediaMotion = gsap.timeline({paused:true});


$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    console.log(st);

    let businessLocation = $("#business").offset().top;
    if(st > businessLocation-300){
        if(!$("#business").hasClass("scroll")){
            $("#business").addClass("scroll");
            businessMotion.restart();
        }
    }
    let rndLocation = $("#RND").offset().top;
    if(st>rndLocation-500){
        if(!$("#RND").hasClass("scroll")){
            $("#RND").addClass("scroll");
            rndMotion.restart();
        }
    }
    let visionLocation = $("#vision").offset().top;
    if(st>visionLocation-300){
        if(!$("#vision").hasClass("scroll")){
            $("#vision").addClass("scroll");
            visionMotion.restart();
        }
    }
    let socialLocation = $("#social").offset().top;
    if(st>socialLocation-300){
        if(!$("#social").hasClass("scroll")){
            $("#social").addClass("scroll");
            socialMotion.restart();
        }
    }
    let mediaLocation = $("#media").offset().top;
    if(st>mediaLocation-300){
        if(!$("#media").hasClass("scroll")){
            $("#media").addClass("scroll");
            mediaMotion.restart();
        }
    }
})

var mainVisual = new Swiper("#mainVisual",{
    
    speed:1000,
    effect:"fade",
    loop:true,
  
      autoplay: {
        delay: 6500,
        disableOnInteraction:false,
      },
      
      pagination: {
        
        el: "#mainVisual .pagination .bullets",
        type: 'bullets', clickable:true,
        
      },
      navigation:{
          prevEl:"#mainVisual .btnPrev",
          nextEl:"#mainVisual .btnNext"
      }
});
var mainVisual = new Swiper("#partners .mask",{
    
    speed:1000,
    loop:true,
    slidesPerView:"auto",
    spaceBetween:0,
     navigation:{
          prevEl:"#partners .btnPrev",
          nextEl:"#partners .btnNext"
      }
});
mainVisual.on("slideChange",function(){
    console.log("changed")
    console.log(mainVisual.realIndex)
    var idx = mainVisual.realIndex;
    if(idx===0){
        time01.restart();
    }
    else if (idx===1){
        time02.restart();
    }
    else{
        time03.restart();
    }
});

var gnb = $("#gnb > .list > li");
var header = document.querySelector("#header");

var btnStop = $("#mainVisual .btnStop");
var btnPlay = $("#mainVisual .btnPlay");

var btnLanguage = $("#header .utilMenu .language > a"); 
btnLanguage.on("click", function(){
    $(this).next().stop().slideToggle(250);  //defalut 400
    return false;
});

btnStop.on("click",function(){
    mainVisual.autoplay.stop();
    btnStop.style.display="none";
    btnPlay.style.display="block";
});
btnPlay.on("click",function(){
    mainVisual.autoplay.start();
    btnStop.style.display="block";
    btnPlay.style.display="none";
});



gnb.on("mouseenter",function(){
    header.addClass("on");

});
gnb.on("mouseleave",function(){
    header.removeClass("on");
});


$("#header  .btnAll").on("click",function(){
    $("#header #gnb").slideToggle();
    $(this).toggleClass("on");
    return false;
});

//jquery 잘 하는 것 -> dom (Document Object Model) menipulation

var header = $("#header");
$(window).on("scroll",function(){
    var st = window.scrollY;
    if(st>300){
        btnTop.addClass("show");
    }
    else{
        btnTop.removeClass("show");
    }
});
var btnTop = $(".btnTop");
btnTop.on("click",function(){
    gsap.to("html,body",{scrollTop:0,duration:1,ease:Power4.easeOut});
});

var lnb = $("#lnb .listBox > a");
lnb.on("click",function(event){
    event.preventDefault();
    $(this).next().stop().slideToggle();
});

var tab = $(".tabList > li");
tab.on("click",function(e){
    e.preventDefault();
    var targetContents = $(this).parent().data("tab-contents");
    $(targetContents).children("li").eq($(this).index()).addClass("on");
    $(targetContents).children("li").eq($(this).index()).siblings().removeClass("on");
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
});

// eq nthchild?

$(window).on("scroll",function(){
    var st = $(window).scrollTop();
    if(st>0){
        header.addClass("scroll");
    }
    else{
        header.removeClass("scroll");
    }
});