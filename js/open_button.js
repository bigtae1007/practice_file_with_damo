let bt = document.getElementById('bt1');

bt.addEventListener('click', () => {
  const box = document.getElementById("textbox");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const text = document.createTextNode("인증하기");

  button.appendChild(text);
  box.appendChild(input);
  box.appendChild(button);
}, { once : true});


document.getElementById('bt2').addEventListener("click",function(){
  alert("가입완료");
})