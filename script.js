// ===== اسلایدر =====

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

dots.forEach(dot=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");

currentSlide = index;

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

showSlide(index);

});

});

setInterval(()=>{

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

},7000);

// ===== جستجو =====

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("keyup",()=>{

let value =
searchInput.value.toLowerCase();

let newsCards =
document.querySelectorAll(".news-card");

newsCards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

// ===== افکت کارت ها =====

const cards =
document.querySelectorAll(
".sport-card,.news-card,.match-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});

// ===== اسکرول نرم =====

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

const href =
this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href)
.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("SazikoSport Ready");const stories =
document.querySelectorAll(".story");

const storyViewer =
document.getElementById("storyViewer");

const storyImage =
document.getElementById("storyImage");

stories.forEach(story=>{

story.addEventListener("click",()=>{

storyImage.src =
story.querySelector("img").src;

storyViewer.style.display="flex";

});

});

storyViewer.onclick=()=>{

storyViewer.style.display="none";

};const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};const storyImages =
document.querySelectorAll(".story img");

const storyViewer =
document.getElementById("storyViewer");

const storyImage =
document.getElementById("storyImage");

const progressBar =
document.getElementById("progressBar");

const closeStory =
document.getElementById("closeStory");

storyImages.forEach(img=>{

img.addEventListener("click",()=>{

storyViewer.style.display="flex";

storyImage.src = img.src;

progressBar.style.transition="none";
progressBar.style.width="0%";

setTimeout(()=>{

progressBar.style.transition=
"5s linear";

progressBar.style.width="100%";

},100);

setTimeout(()=>{

storyViewer.style.display="none";

},5000);

});

});

closeStory.onclick=()=>{

storyViewer.style.display="none";

};const commentBtn =
document.getElementById("commentBtn");

if(commentBtn){

commentBtn.onclick=()=>{

const input =
document.getElementById("commentInput");

const list =
document.getElementById("commentList");

if(input.value==="") return;

const div =
document.createElement("div");

div.innerText=input.value;

list.appendChild(div);

input.value="";

};

}const next =
document.getElementById("nextSlide");

const prev =
document.getElementById("prevSlide");

if(next){

next.onclick=()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

};

}

if(prev){

prev.onclick=()=>{

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

};

}const search =
document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",()=>{

let value =
search.value.toLowerCase();

let cards =
document.querySelectorAll(
".news-card,.sport-card"
);

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}