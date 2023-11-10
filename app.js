var userInput=document.getElementById("usertxt")
var solarSystemButton=document.getElementsByClassName("theme")[0]
var computerScienceButton=document.getElementsByClassName("theme")[1]
var playbutton=document.getElementById("play")
solarSystemButton.onclick=()=>{
    flag=1
    solarSystemButton.style.backgroundColor="#A9F792"
    computerScienceButton.style.backgroundColor="white"
}   

computerScienceButton.onclick=()=>{
    flag=2
    computerScienceButton.style.backgroundColor= "#A9F792"
    solarSystemButton.style.backgroundColor="white"
}
var flag=0
playbutton.onclick=()=>{
    let inputValue=userInput.value
    if(flag==0){
        alert("Please choose the theme.")
    }else if(inputValue==""){
        alert("Please enter username.")

    }
    else{
        window.localStorage.setItem("flag",flag)
        window.localStorage.setItem("value",inputValue)
        window.location.href="game.html"
    }
}


