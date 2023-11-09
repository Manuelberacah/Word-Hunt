var score=document.getElementById("ttlscore")
var scorevalue=window.localStorage.getItem("score")
var uservalue=window.localStorage.getItem("value")
score.textContent=`${uservalue} score:${scorevalue}`
const gameoveraudio=new Audio("./assets/Gameover.mp3")
gameoveraudio.play()