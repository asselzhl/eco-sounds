import '../scss/style.scss';

const navButtons = document.querySelectorAll('.navigation__button');
const main = document.querySelector('.main');

const audio = new Audio();

let isPlay = false; 

let activeButtonNum = 0;
let audioSrc = '/audio/forest.mp3';
navButtons.forEach((button, i) => {
    button.setAttribute('data-num', i);

    
    button.addEventListener('click', (e) => {
        main.style.background = `url(/img/${e.target.dataset.name}.jpg) center/cover no-repeat`;
        
        let clickedButtonNum = e.target.dataset.num;
        navButtons[activeButtonNum].classList.remove('active');
        navButtons[clickedButtonNum].classList.add('active');
        activeButtonNum = clickedButtonNum;

        audioSrc = `/audio/${e.target.dataset.name}.mp3`;
        audioPlay();

        if (isPlay) {
            mainButton.classList.add('pause');
        } else {
            mainButton.classList.remove('pause');
        }   
    })
})

const mainButton = document.querySelector('.main__button');
mainButton.addEventListener('click', () => {
    if (!isPlay) {
        audioPlay();
        mainButton.classList.add('pause');
        navButtons[activeButtonNum].classList.add('active');
    } else {
        audioPause();
        mainButton.classList.remove('pause');
    }     
})


function audioPlay () {
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}
function audioPause () {
    audio.pause();
    isPlay = false;
}

