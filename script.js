// Objective
/* The objective of the 'meaning' function is to search for a user input word in the 'word' object and display its meaning on the webpage. If the input word is not found in the object, the function increases a count variable and displays a message indicating that the word was not found. If the count variable exceeds a certain value, the function ends the game and displays a message indicating that the user has lost.*/

// this are the html element
const search = document.getElementById("search");
const submitButton = document.getElementById("submit");
const showValue = document.getElementById("result");
const wrongValue = document.getElementById("wrongValue");
const rightValue = document.getElementById("rightValue");
const heading = document.getElementById("heading");
const loading = document.getElementById('loading')

//Object to get meaning or values
const word = {
  apple: "a fruit with red or green skin and a crisp texture.",
  banana: "a long curved fruit with a yellow skin.",
  cat: "a small domesticated carnivorous mammal.",
  dog: "a domesticated carnivorous mammal with four legs and a tail.",
  elephant: "a large herbivorous mammal with a trunk and tusks.",
  flower: "a plant that produces beautiful colorful blooms.",
  guitar: "a stringed musical instrument with a curved body.",
  house: "a building where people live.",
  internet:
    "a global computer network providing information and communication.",
  journey: "an act of traveling from one place to another.",
  kiwi: "a small fruit with a fuzzy brown skin and green flesh.",
  lion: "a large carnivorous feline mammal.",
  mountain: "a natural elevation of the earth's surface.",
  notebook: "a book with blank pages for writing or taking notes.",
  orange: "a citrus fruit with a bright orange skin.",
  pizza:
    "a savory dish consisting of a round flatbread topped with cheese and other ingredients.",
  queen: "the female ruler of an independent state.",
  rainbow: "a meteorological phenomenon of multicolored light.",
  sun: "the star that is the central body of the solar system.",
  tiger: "a large carnivorous feline mammal with a striped coat.",
  umbrella: "a portable device used for protection against rain or sunlight.",
  volcano:
    "an opening in the Earth's crust that allows hot magma and gases to escape.",
  whale: "a very large marine mammal with a streamlined body.",
  xylophone:
    "a musical instrument consisting of wooden bars struck by mallets.",
  yacht: "a recreational boat used for pleasure or racing.",
  zebra: "a large wild animal native to Africa with black and white stripes.",
  airplane:
    "a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
  butterfly: "an insect with large, often brightly colored wings.",
  chocolate: "a sweet food made from cacao beans.",
  dolphin: "a marine mammal known for its intelligence and playful behavior.",
  elephant: "a large herbivorous mammal with a trunk and tusks.",
  firework: "an explosive device used to produce visual or auditory effects.",
  guitar: "a stringed musical instrument with a curved body.",
  honey: "a sweet, viscous substance produced by bees.",
  igloo: "a dome-shaped snow house traditionally used by the Inuit people.",
  jellyfish: "a gelatinous marine animal with tentacles.",
  koala: "a small arboreal marsupial native to Australia.",
  lemon: "a yellow citrus fruit with a sour taste.",
  monkey: "a primate that typically lives in trees and has a long tail.",
  nightingale: "a small songbird known for its beautiful melodic songs.",
  octopus: "a marine mollusk with eight arms and a soft body.",
  penguin: "a flightless bird native to the Southern Hemisphere.",
  quokka: "a small marsupial native to Western Australia.",
  rainbow: "a meteorological phenomenon of multicolored light.",
  strawberry: "a sweet red fruit with seeds on its surface.",
  turtle: "a slow-moving reptile with a protective shell.",
  unicorn:
    "a mythical creature resembling a horse with a single horn on its forehead.",
  volcano:
    "an opening in the Earth's crust that allows hot magma and gases to escape.",
  watermelon: "a large fruit with a green rind and sweet red flesh.",
  xylophone:
    "a musical instrument consisting of wooden bars struck by mallets.",
  yak: "a long-haired bovine mammal native to the Himalayas.",
  zucchini: "a green summer squash that is often cooked as a vegetable.",
};

let falseCount = 0; //Global variable to count when user input wrong answer it increased and game over !!
let trueCounts = 0;
function meaning() {
  let searchValue = search.value.toLowerCase(); //all input value in lower case

  if (searchValue in word) {
    trueCounts++;
    if (trueCounts > 0) {
      setTimeout(function () {
        showValue.innerText = `${searchValue} : ${word[searchValue]}`;

        loading.classList.remove("loading-animation");
        loading.style.color = "#84fa84";
        setTimeout(function(){
          // let val =  showValue.innerText =`${searchValue} : ${word[searchValue]}`;
          showValue.style.opacity = 0;
        },2000)  
      
        showValue.style.opacity = 1;


      }, 4000);
      
      
      loading.style.animation.innerText = `Loading........`;
      loading.classList.add("loading-animation");
    } 
    
    // showValue.innerText.remove = `${searchValue} : ${word[searchValue]}`;
    
    submitButton.style.backgroundColor = "#be61ff7d";
  } else {
    setTimeout(function () {
      showValue.style.opacity = 1;

      showValue.style.color = "red";
      showValue.innerText = `Ohh shit !! 🥺 your guessed wrong Value : ${searchValue}  `;
      loading.classList.remove("loading-animation");

    }, 3000);
    setTimeout(3000, loading.classList.remove("loading-animation") );
    loading.style.animation.innerText = `Loading........`
    
    loading.classList.add("loading-animation");

    falseCount++;
    if (falseCount > 5) {
      console.log(searchValue);
      submitButton.removeEventListener("click", meaning);
      submitButton.style.backgroundColor = "red";
      submitButton.style.display = "none";
      search.style.display = "none";
      heading.innerText = "You Lose The Game 🥺!! ";
    }
    // Else part
  }
}



submitButton.addEventListener("click", meaning)

