const search = document.getElementById('search');
const submitButton = document.getElementById('submit')
const showValue = document.getElementById('result')

const word = {
    apple: "a fruit with red or green skin and a crisp texture.",
    banana: "a long curved fruit with a yellow skin.",
    cat: "a small domesticated carnivorous mammal.",
    dog: "a domesticated carnivorous mammal with four legs and a tail.",
    elephant: "a large herbivorous mammal with a trunk and tusks.",
    flower: "a plant that produces beautiful colorful blooms.",
    guitar: "a stringed musical instrument with a curved body.",
    house: "a building where people live.",
    internet: "a global computer network providing information and communication.",
    journey: "an act of traveling from one place to another.",
    kiwi: "a small fruit with a fuzzy brown skin and green flesh.",
    lion: "a large carnivorous feline mammal.",
    mountain: "a natural elevation of the earth's surface.",
    notebook: "a book with blank pages for writing or taking notes.",
    orange: "a citrus fruit with a bright orange skin.",
    pizza: "a savory dish consisting of a round flatbread topped with cheese and other ingredients.",
    queen: "the female ruler of an independent state.",
    rainbow: "a meteorological phenomenon of multicolored light.",
    sun: "the star that is the central body of the solar system.",
    tiger: "a large carnivorous feline mammal with a striped coat.",
    umbrella: "a portable device used for protection against rain or sunlight.",
    volcano: "an opening in the Earth's crust that allows hot magma and gases to escape.",
    whale: "a very large marine mammal with a streamlined body.",
    xylophone: "a musical instrument consisting of wooden bars struck by mallets.",
    yacht: "a recreational boat used for pleasure or racing.",
    zebra: "a large wild animal native to Africa with black and white stripes.",
    airplane: "a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
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
    unicorn: "a mythical creature resembling a horse with a single horn on its forehead.",
    volcano: "an opening in the Earth's crust that allows hot magma and gases to escape.",
    watermelon: "a large fruit with a green rind and sweet red flesh.",
    xylophone: "a musical instrument consisting of wooden bars struck by mallets.",
    yak: "a long-haired bovine mammal native to the Himalayas.",
    zucchini: "a green summer squash that is often cooked as a vegetable."
  };
  
  function meaning(){
    let searchValue = search.value.toLowerCase();
    let filtering = Object.keys(word).filter((keys => keys.toLowerCase() === searchValue))
if(filtering.length > 0){
    showValue.innerHTML = `${filtering[0]}: ${word[filtering[0]]} `
} else{
    showValue.innerHTML = `No  words found : Error Try again `
}
  }

  submitButton.addEventListener('click',meaning)