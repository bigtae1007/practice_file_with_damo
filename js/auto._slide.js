function auto_slide(){
  
  const img = document.getElementsByClassName('slide_img');
  for(let i = 0 ; i < img.length ; i ++){
    img[i].style.display = "none";
  }
  page++;
  if(page > img.length){page = 1}
  img[page - 1].style.display = "block";
  setTimeout(auto_slide, 10000);
}
var page = 0;
auto_slide();
