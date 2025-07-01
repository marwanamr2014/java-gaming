
var menuicon = document.getElementById("menu");
var list = document.getElementById("list");
var menustatus;
menustatus = "closed";

menuicon.onclick = function() {
if(menustatus == "closed"){
    menuicon.src ="close.png";
    list.style.display = "block";
    menustatus ="open";
}
 else{
menuicon.src = "list.png";
 list.style.display ="none";
     menustatus ="closed";
 }
}
window.onscroll = function(){
    menuicon.src = "list.png";
    list.style.display = "none";
    menustatus = "closed"; 
    
    if(window.pageYOffset > 0){
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";    
        
    }
    else{
      leftArrow.style.display = "block";
    rightArrow.style.display = "block";    
    }
};

var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");
var slider = document.getElementById("content");
var images = ["background.jpg","future.jpg","VR.jpg"];
var i;
i = 0;

slider.style.backgroundImage = "url("+images[i]+")"; 
leftArrow.onclick = function(){
   if(i>0){slider.style.backgroundImage = "url("+images[i-1]+")";    
    i = i - 1; }
};
rightArrow.onclick = function(){
  if(i<images.length-1){
   slider.style.backgroundImage = "url("+images[i+1]+")";    
    i = i + 1;   
      
  }  

   
};
  