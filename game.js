const spaceRelatedWords = [
    ["Astronomy", "The study of celestial objects and phenomena beyond Earth."],
    ["Galaxy", "A vast system of stars, gas, dust, and dark matter."],
    ["Nebula", "An interstellar cloud of gas and dust where stars are born."],
    ["Quasar", "An extremely bright and distant active galactic nucleus."],
    ["Orbit", "The path that an object follows around a celestial body."],
    ["Lunar", "Relating to Earth's moon."],
    ["Gravity", "The force that attracts objects with mass towards each other."],
    ["Solar Flare", "A sudden, intense burst of energy on the Sun's surface."],
    ["Comet", "A celestial object with a bright coma and a tail, usually visible from Earth."],
    ["Black Hole", "A region of spacetime exhibiting gravitational acceleration so strong that nothing can escape it."],
    ["Meteoroid", "A small rocky or metallic body traveling through space."],
    ["Telescope", "An optical instrument that gathers and magnifies light to observe distant objects."],
    ["Astrobiology", "The study of the potential for life beyond Earth."],
    ["Cosmology", "The scientific study of the large scale properties of the universe as a whole."],
    ["Satellite", "An object orbiting a celestial body, often used for communication or observation."],
    ["Exoplanet", "A planet that orbits a star outside our solar system."],
    ["Spacetime", "The four-dimensional continuum in which events occur."],
    ["Rocket", "A vehicle that uses controlled explosions of propellant to propel itself into space."],
    ["Supernova", "A stellar explosion that briefly outshines an entire galaxy."],
    ["Astrophysics", "The branch of astronomy that deals with the physical properties of celestial bodies and the universe as a whole."]
  ];

  const csRelatedWords = [
    ["Algorithm", "A step-by-step procedure or formula for solving a problem."],
    ["Data Structure", "A way of organizing and storing data to perform operations efficiently."],
    ["Programming", "The process of designing and building an executable computer program."],
    ["Database", "A structured collection of data organized for easy retrieval and manipulation."],
    ["Machine Learning", "A subset of artificial intelligence that enables systems to learn and improve from experience."],
    ["Cybersecurity", "The practice of protecting systems, networks, and programs from digital attacks."],
    ["Encryption", "The process of converting information into a code to prevent unauthorized access."],
    ["API", "A set of rules that allows one software application to interact with another."],
    ["Compiler", "A program that translates code written in a high-level programming language into machine code."],
    ["Debugging", "The process of finding and fixing errors or bugs in a computer program."],
    ["Operating System", "Software that manages computer hardware and provides services for computer programs."],
    ["Network", "A collection of computers and devices connected to share resources and information."],
    ["Cloud Computing", "The delivery of computing services, including storage, processing, and software, over the internet."],
    ["Artificial Intelligence", "The development of computer systems that can perform tasks that typically require human intelligence."],
    ["Software Development", "The process of creating, designing, and maintaining software applications."],
    ["Virtual Reality", "A computer-generated simulation of a three-dimensional environment that can be interacted with in a seemingly real way."],
    ["Big Data", "Large and complex data sets that traditional data processing applications are inadequate to handle."],
    ["Responsive Design", "Designing web pages to ensure optimal viewing and interaction across various devices and screen sizes."],
    ["Open Source", "Software with a source code that anyone can inspect, modify, and enhance."],
    ["Agile Methodology", "An iterative and flexible approach to software development, emphasizing collaboration and adaptability."],
  ];
var flag = window.localStorage.getItem("flag")
var userName = window.localStorage.getItem("value")
  
var hint_bar = document.getElementById("hint")
var Guesses_bar = document.getElementById("Guesses")
var wrong_bar = document.getElementById("wrong")
var words_container = document.getElementById("boxes")
var timer_bar = document.getElementById("time")
var score_bar = document.getElementById("score")

var list_words=[]
let Random_list=[]
var BackgroundLink = ""
var Guesses = 10
var score=0
var keys_list=""
var counter=0

// this function is to check and change the background 
// and the usage of the list of words according to the theme
function selector(flag){
    
    if (flag==1){
        list_words=spaceRelatedWords
        document.body.style.backgroundImage="url(./assets/solarsystem.jpg)"
    }else{
        list_words=csRelatedWords
        document.body.style.backgroundImage="url(./assets/csbackground.jpeg)"
    }
}
// this function will take a random words_container,hint from the choosed array
function RandomWordsGenerator (word_list){
    return word_list[Math.floor(Math.random()*20)]
}
// this function will create divs accourding to the lenth of the word
function CreatDiv(lenth){
    let div_code=""
    for(let i=0;i<lenth;i++){
        div_code+="<div class='box'></div>"
    } 

    words_container.innerHTML=div_code
}

// this will insert everthing changed and updated in the html page 
function insertor(){
    Random_list=RandomWordsGenerator(list_words)
    hint_bar.innerText = `Hint:${Random_list[1]}`
    Guesses_bar.innerText =`Remaining Guesses: ${Guesses}` 
    wrong_bar.innerText="Wrong Guesses:"
    CreatDiv(Random_list[0].length)
}

// this function isto check wether the user inputs are right are wrong
function word_checker(word,key){
    let list_letter = []
    let indices =[]
    // converting the word to an array of letters
    for(let j=0;j<word.length;j++){
        if (!word[j]==" "){
            list_letter.push(word[j].toLowerCase())
        }
       
    }

    // checking the list for the entered key and put the index in indices
    for (let i = 0; i < list_letter.length; i++) {
        if (list_letter[i] === key) {
            indices.push(i)

        }
    }

    // if there is match then we are adding it to the div
    if (indices.length > 0) {
        counter+=1
        for (let index of indices) {
            let change_div = document.getElementsByClassName("box")[index];
            change_div.textContent = key;    
        }
        score += indices.length;
        score_bar.innerText=`Score: ${score}`
        decider(Guesses,counter,list_letter.length)
        
    // else we are adding it to the wrong guesses and decreasing remaing guesses 
    }else{
        if (!keys_list.includes(key)){
            keys_list+=`${key},`
            Guesses--
            Guesses_bar.innerText=`Remaining Guesses: ${Guesses}`
            wrong_bar.innerText=`Wrong Guesses: ${keys_list} `

        }
        decider(Guesses,counter,list_letter.length)
    }
    
    
    
    
}
// this function will decide wheather to give next ques or the game is over
function decider(guess,check,list){
    if (guess==0){
        window.localStorage.setItem("score",score)
        window.location.href="over.html"

    }else if (check==list){
        counter=0
        Guesses=10
        timer=30
        keys_list=[]
        insertor()
    }
}

//here is where we get the keyboard input
document.addEventListener("keydown", function(event) {
    word_checker(Random_list[0],event.key)
    
});

//calling the function
selector(flag)
insertor()


let timer = 30;

// this fuction creates the timer
function updateTimer() {
  timer_bar.innerText=`Time: ${timer}`
  timer--;

  if (timer < 0) {
    clearInterval(intervalId)
    window.localStorage.setItem("score",score)
    window.location.href="over.html"
  }
}
let intervalId = setInterval(updateTimer, 1000);
