function addText(){
  let text = document.querySelector('#search_text');
  if(text.value != ""){
    let newDiv = document.createElement('div')
    let newP = document.createElement('p');
    let newBtn = document.createElement('button');
    let newText = document.createTextNode(text.value);
    let btnText = document.createTextNode('X');
    let fn = document.createAttribute('onclick');
    fn.value = 'clearText()';
  
    newBtn.appendChild(btnText);
    newBtn.setAttributeNode(fn);
    newP.appendChild(newText);
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
  
    document.querySelector('.text').innerHTML = "";
  
    document.getElementById('new_text').appendChild(newDiv);
    newDiv.classList.add('add_box');
    newBtn.classList.add('add_btn');
  
    text.value = "";

    let items = document.getElementsByClassName('add_btn');
    for(i = 0 ; i < items.length ; i ++){
      items[i].addEventListener('click',function() {
        let item = this.parentNode;
        if(item.parentNode){
        item.parentNode.removeChild(item);       
      }
      if(items.length === 0){
       document.querySelector('.text').innerHTML = "최근 검색어가 없습니다.";
      }
      })
    }
  
  }
}

function clearText(){
  let items = document.getElementsByClassName('add_btn');
  for(i = 0 ; i < items.length ; i ++){
    items[i].addEventListener('click',function() {
      let item = this.parentNode;
      item.parentNode.removeChild(item);       
    })
  }
}

document.getElementById('search_btn').addEventListener('click', addText);