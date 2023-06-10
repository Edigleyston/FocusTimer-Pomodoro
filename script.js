import { countDown, togglePause } from "./timer.js"

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const setMinutes = document.querySelector('.minutes')
const setSeconds = document.querySelector('.seconds')

function togglePlayOff (){
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')

    countDown(setMinutes, setSeconds)
}

function toggleSoundOn(){
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
}


btnPause.onclick = () => {
    togglePause.pause()
}
btnPlay.addEventListener('click', togglePlayOff)
btnSet.addEventListener('click', function(){
    let minutes=prompt('Digite quantos minutos deseja: ') || 0
    setMinutes.textContent=String(minutes).padStart(2, '0')
    
})
btnSoundOn.addEventListener('click', toggleSoundOn)
btnSoundOff.addEventListener('click', toggleSoundOn)
