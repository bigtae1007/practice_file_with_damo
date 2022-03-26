function addText(){ // 텍스트 작성 후 검색기록 저장 함수
  let text = document.querySelector('#search_text'); // input 텍스트
  if(text.value != ""){ // 텍스트를 작성했을 때
    let newDiv = document.createElement('div') // 글과 버튼을 묶는 태그 생성
    let newP = document.createElement('p'); // 글 태그 생성
    let newBtn = document.createElement('button'); // 삭제 버튼 태그 생성
    let newText = document.createTextNode(text.value); // 입력한 텍스트 값 선언
    let btnText = document.createTextNode('X'); // 버튼 text 생성
  
    newBtn.appendChild(btnText); // 버튼과 내용 연결
    newBtn.setAttributeNode(fn); // 버튼과 함수 실행 속성 연결
    newP.appendChild(newText); // 태그와 글 연결
    newDiv.appendChild(newP); // 글과 묶음 태그 연결
    newDiv.appendChild(newBtn); //버튼과 묶음 태그 연결
  
    document.querySelector('.text').innerHTML = ""; // 기록 생성되면 기존 텍스트 삭제
  
    document.getElementById('new_text').appendChild(newDiv); // 묶은 태그 html 부모와 연결
    newDiv.classList.add('add_box'); // css 클래스 연결 
    newBtn.classList.add('add_btn'); // css 클래스 연결
  
    text.value = ""; // 텍스트 입력 후 초기화

    let items = document.getElementsByClassName('add_btn'); // 생성한 버튼 노드리스트
    for(i = 0 ; i < items.length ; i ++){
      items[i].addEventListener('click',function() { // 클릭시 해당 내용 삭제
        let item = this.parentNode;
        if(item.parentNode){
        item.parentNode.removeChild(item);       
      }
      if(items.length === 0){
       document.querySelector('.text').innerHTML = "최근 검색어가 없습니다."; // 내용이 다 삭제되면 지웠던 텍스트 다시 생성
      }
      })
    }
  
  }
}

document.getElementById('search_btn').addEventListener('click', addText);