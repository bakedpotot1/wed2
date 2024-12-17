const readMoreBtn = document.getElementById('expBtn');
const story = document.getElementById('readMore');

readMoreBtn.addEventListener('click', (e)=>{
  story.classList.toggle('readLess');
 if(readMoreBtn.innerText === 'Read More'){
  readMoreBtn.innerText = 'Read Less';
 }else{
  readMoreBtn.innerText = 'Read More'
 }
})

var firstIndex=0;
function automaticSlide(){
  setTimeout(automaticSlide, 4000)
  var pics;
  const img=document.querySelectorAll('img');
  for(pics=0; pics<img.length;pics++){
    img[pics].style.display="none"
  }
  firstIndex++;
  if(firstIndex > img.length){
    firstIndex =1;
  }
  img[firstIndex -1].style.display="block";
}
automaticSlide();