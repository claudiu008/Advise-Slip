// your code
const button = document.getElementById("button")
const speech = document.getElementById("speech")
const number = document.getElementById("number")

function renderAdvice(advice) {
  speech.textContent = advice
}

function renderID(id) {
  number.textContent = id
}

async function getAdvice() {
const url = "https://api.adviceslip.com/advice"

let advice = ''
let id = ''
  
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.slip.advice) {
      advice = `${data.slip.advice}`
      id = `${data.slip.id}`
    } else {
      advice = "No advice available"
      id = "No ID"
    }

  } catch(error) {
    console.log(error)
  }

  renderAdvice(advice)
  renderID(id)
  giveMeAdvice(advice)
  
}

function giveMeAdvice(advice) {
  VoiceRSS.speech({
    key: 'cecfe01bcbec4ff0af484c7902058693',
    src: advice,
    hl: 'en-us',
    v: 'Mary',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

button.addEventListener("click", getAdvice)