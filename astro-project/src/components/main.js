!function(e){var l=new ScrollMagic.Controller,i=["#slide01 header","#slide02 header","#slide03 header"];
if(!Modernizr.touch){
    i.forEach(function(e,i){{
        var r=i+1;
        new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+ r,"is-active").addTo(l)
    }
    
});
 { new ScrollMagic.Scene({triggerElement:".slide.is-light"}).setClassToggle("nav","is-dark").addTo(l) }
}
}(jQuery);

let logo = document.querySelector('.image');
let light = document.querySelector('.light');
logo.addEventListener('click', function() {
    light.style.display == 'block' ?
    light.style.display = 'none' :
    light.style.display = 'block';
})

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
  });


function menuBtnChange() {
    if(sidebar.classList.contains("open")){
      closeBtn.classList.replace("fa-list-ul","fa-bars-staggered");
    }else {
      closeBtn.classList.replace("fa-bars-staggered","fa-list-ul");
    }
   }

  // Mobile nav
const linkItems = document.querySelectorAll(".link-item");
let navm = document.querySelector(".navm");
let navar = document.querySelector(".navar");
let homenav = document.querySelector(".homenav");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.top = `${index * 40 + 12}px`;
    })
})
homenav.addEventListener("click", () => {
  navm.classList.toggle("change");
  homenav.classList.toggle('transform')
  navar.classList.toggle("toLeft")
  navmChange();
});

function navmChange() {
  if(navm.classList.contains("change")){
    navar.classList.replace("fa-chevron-left","fa-chevron-right");
  }else {
    navar.classList.replace("fa-chevron-right","fa-chevron-left");
  }
 }

  // radio tools

let titles = new Audio("https://azuracast.iqbpn.com/radio/8000/radio.mp3");
console.log(titles.name);

   