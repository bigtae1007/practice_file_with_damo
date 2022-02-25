function prove(){
  const pw1 = document.querySelector('#pw_1');
  const pw2 = document.querySelector('#pw_2');

  if(pw1.value === ""){
    alert("비밀번호가 입력되지 않았습니다.");
    pw1.value = "";
    pw2.value = "";
  }else if(pw2.value === ""){
    alert("비밀번호 확인이 입력되지 않았습니다.")
    pw1.value = "";
    pw2.value = "";
  } else if(pw1.value === pw2.value){
    alert("변경되었습니다.")
    location.href = '../login_1.html';
  }else{
    alert("비밀번호가 일치하지 않습니다.");
    pw1.value = "";
    pw2.value = "";
  }
}
document.getElementById("bt2").addEventListener("click", prove);