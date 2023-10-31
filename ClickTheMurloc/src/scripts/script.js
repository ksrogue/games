const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        murloc: document.querySelector(".murloc"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    value: {
        gameVelocity: 1500,
        hitPosition: 0,
        result: 0,
        currentTime: 60
    },
    action: {
        timerId: null,
        countdown: setInterval(countDown, 1000)
    }
}

function countDown() {
    state.value.currentTime--;
    state.view.timeLeft.textContent = state.value.currentTime;

    if(state.value.currentTime <= 0) {
        clearInterval(state.action.timerId);
        clearInterval(state.action.countdown);
        alert("GAVE OVER! O seu resultado foi: " + state.value.result);
        state.value.currentTime = 60;
        state.value.result = 0;
        state.view.timeLeft = state.value.currentTime;
        state.view.score = state.value.result;   
    }
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("murloc");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("murloc");
    state.value.hitPosition = randomSquare.id;
}

function moveMurloc() {
    state.value.timerId = setInterval(randomSquare, state.value.gameVelocity);
}

function addListener() {
    state.view.squares.forEach((square) =>{ 
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition) {
                state.value.result++;
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
                playSound();          
            }
        })
    })
}

function playSound() {
    let audio = new Audio("./src/audio/murloc.mp3");
    audio.volume = 0.2;
    audio.playbackRate = 2;
    audio.play();
}


function initialize() {
    moveMurloc();
    addListener();
}

initialize();

