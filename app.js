var userInput=document.getElementById("usertxt")
var solarSystemButton=document.getElementsByClassName("theme")[0]
var computerScienceButton=document.getElementsByClassName("theme")[1]
var playbutton=document.getElementById("play")
console.log(solarSystemButton)
solarSystemButton.onclick=()=>{
    flag=1
    solarSystemButton.style.backgroundColor="green"
    computerScienceButton.style.backgroundColor="white"
}   

computerScienceButton.onclick=()=>{
    flag=2
    computerScienceButton.style.backgroundColor="green"
    solarSystemButton.style.backgroundColor="white"
}
var flag=0
playbutton.onclick=()=>{
    let inputValue=userInput.value
    if(flag==0){
        alert("Please choose the theme.")
    }else{
        window.localStorage.setItem("flag",flag)
        window.localStorage.setItem("value",inputValue)
        window.location.href="game.html"
    }
}


