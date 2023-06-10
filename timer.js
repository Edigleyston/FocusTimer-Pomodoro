let timerTimeOut

export function countDown(){
    let segundos = document.querySelector('.seconds')
    let minutos = document.querySelector('.minutes')
    
    timerTimeOut = setTimeout(function(){
    let seconds = Number(segundos.textContent)
    let minutes = Number(minutos.textContent)
    
    if(minutes <=0 && seconds == 0){
        resetTimer.reset()
        return
    }
    if(seconds <= 0){
        seconds = 10
        
        minutos.textContent = String(minutes-1).padStart(2, '0')
    }
    //transforma em string para usar a unfção padStart que diz quantos caracteres quer e o que vai adicionar ao começo
    segundos.textContent =  String(seconds-1).padStart(2, '0')
    countDown()
    },1000)
}

    const resetTimer = {
    buttonPlay: document.querySelector('.play'),
    buttonSet: document.querySelector('.set'),
    buttonStop: document.querySelector('.stop'),
    buttonPause: document.querySelector('.pause'),

    min: document.querySelector('.minutes'),
    sec: document.querySelector('.seconds'),

    reset(){
        resetTimer.buttonPlay.classList.remove('hide'),
        resetTimer.buttonSet.classList.remove('hide'),
        resetTimer.buttonStop.classList.add('hide'),
        resetTimer.buttonPause.classList.add('hide'),
        resetTimer.min.textContent = '00'
        resetTimer.sec.textContent = '00'
    }
}
resetTimer.buttonStop.onclick = () => {
    resetTimer.reset()
}

export const togglePause = {
    pause(){
        resetTimer.buttonPause.classList.add('hide'),
        resetTimer.buttonPlay.classList.remove('hide'),
        clearTimeout(timerTimeOut)

    }
}
