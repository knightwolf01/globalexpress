
//loder animation
function loder(){
  var tl = gsap.timeline();

  tl.from(".a",{
      y:40,
      opacity:0,
      stagger:.15,
      duration:.6,
      delay:1,
  },"a")
  tl.from(".b",{
      y:40,
      opacity:0,
      stagger:-.15,
      duration:.6,
      delay:1,
  },"a")

  tl.to(".loder",{
      y:-1000,
      duration:.5,
      delay:0.5
  })

}
loder();
//cursor animation
var cursor = document.querySelector(".cursor");
var archive = document.querySelector(".archive");
function canimation(value){
  document.addEventListener("mousemove",function(dets){
    value.style.display = "flex";
    value.style.justifyContent = "center";
    value.style.alignItems= "center";
    gsap.to(value,{
      x: (dets.x-30) +"px",
      y: (dets.y-30) +"px",
      ease: "back.out(2.4)",
    })
  })
  document.addEventListener("mouseleave",function(){
    value.style.display = "none";
  })
}
canimation(cursor);

archive.addEventListener("mouseenter",function(){
  cursor.classList.add("hidden")
  console.log("hello");
  cursor.innerHTML="";
})
archive.addEventListener("mouseleave",function(){
  
  cursor.innerHTML="click";
  cursor.style.color="white";
})


function animateY(elemArr){
  var index = 0;
      cursor.addEventListener("click",function(){
      gsap.to(elemArr[index],{
          top: "-=100%",
          ease: Expo.easeInOut,
          duration:1,
          onComplete:function(){
              gsap.set(this._targets[0],{top: "100%"});
          }
      });
      index === elemArr.length-1 ? index = 0 : index++;
      gsap.to(elemArr[index],{
          top: "-=100%",
          ease: Expo.easeInOut,
          duration:1
      });
  });
}
var count = document.querySelectorAll(".count h1");
animateY(count);
var h1s = document.querySelectorAll(".h1 h1");
animateY(h1s);
var h2s = document.querySelectorAll(".h2 h1");
animateY(h2s);
var h3s = document.querySelectorAll(".h3 h3");
animateY(h3s);

//page - 2
cursor.addEventListener("click",function(){
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0])
});
  

