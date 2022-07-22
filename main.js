


function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key)
    console.log(audio)

    if(!audio ) return  // stop running the function
    
    audio.currentTime = 0   
    audio.play() 
    let randomR = Math.floor( Math.random() * 255) + 1
    let randomG = Math.floor( Math.random() * 255) + 1
    let randomB = Math.floor( Math.random() * 255) + 1

    key.classList.add('playing')
    let RGB = key.style.backgroundColor=  ` rgba(${randomR}, ${randomG}, ${randomB}, 0.7)`
    console.log('randomly generated value is ' , RGB)
}




function removeTransition(e){
    if(e.propertyName !== 'transform') return
    console.log(e.propertyName)
        console.log(this)
        
        this.classList.remove('playing')
        this.style.backgroundColor =  `rgba(137, 51, 199, 0.168)` 
        }
    
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)


//   DETECTING WHETHER SITE IS USED IN MOBILE 
let details  = navigator.userAgent

let container = document.getElementsByClassName('container')


let regexp = /android|iphone|kindle|ipad/i;


let isMobileDevice =  regexp.test(details)

if(isMobileDevice){
    container.style.visibility = 'hidden'
    document.write('Please Open In Desktop')
}else{
    console.log('desktop')
    
}