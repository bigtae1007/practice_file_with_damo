const lesson = document.getElementById('lesson_event');
const team = document.getElementById('team_event');
const gym = document.getElementById('gym_event');
const lesson_bt = document.getElementById('lesson_bt');
const team_bt = document.getElementById('team_bt');
const gym_bt = document.getElementById('gym_bt');

function change_lesson(){
  lesson.style.display = "block";
  team.style.display = "none";
  gym.style.display = "none";

  lesson_bt.style.backgroundColor = "rgba(1, 61, 160, 0.7)";
  lesson_bt.style.color = "white"
  team_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  gym_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  team_bt.style.color = "black";
  gym_bt.style.color = "black";
}

function change_team(){
  lesson.style.display = "none";
  team.style.display = "block";
  gym.style.display = "none";

  team_bt.style.backgroundColor = "rgba(1, 61, 160, 0.7)";
  team_bt.style.color = "white"
  lesson_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  gym_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  lesson_bt.style.color = "black";
  gym_bt.style.color = "black";
}

function change_gym(){
  lesson.style.display = "none";
  team.style.display = "none";
  gym.style.display = "block";

  gym_bt.style.backgroundColor = "rgba(1, 61, 160, 0.7)";
  gym_bt.style.color = "white"
  team_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  lesson_bt.style.backgroundColor = "rgba(0 ,0 ,0 ,0)";
  team_bt.style.color = "black";
  lesson_bt.style.color = "black";
}