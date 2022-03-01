function move_page(n){
  showDivs(slideIndex += n);
}

function showDivs(n){
  const slide = document.getElementsByClassName('slide_img');
  const num = document.getElementById('page_num');
 
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slide[slideIndex-1].style.display = "block";  
  num.innerHTML = slideIndex + " / " + slide.length;
}
let slideIndex = 1;
showDivs(slideIndex);