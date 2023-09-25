var typed = new Typed('#element', {
    strings: ['Data Scientist', 'Software Developer','Web Developer'],
    typeSpeed: 50,
  });

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(x of tablinks){
        x.classList.remove("active-link");
    }
    for(y of tabcontents){
        y.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


