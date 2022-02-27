function auto_slide(){
  
  const img = document.getElementsByClassName('slide_img');
  let count = document.getElementById('count');
  const bt = document.getElementsByClassName('img_bt');
  for(let i = 0 ; i < img.length ; i ++){
    img[i].style.display = "none";
  }
  for(let j = 0 ; j < bt.length ; j ++){
    bt[j].style.backgroundColor = "rgba(68, 63, 63, 0.167)"
  }
  page++;
  if(page > img.length){page = 1}
  img[page - 1].style.display = "block";
  bt[page - 1].style.backgroundColor = "rgb(61, 61, 61)";
  setTimeout(auto_slide, 3000);
  count.innerHTML = page + " / " + img.length;
}


var page = 0;
auto_slide();
