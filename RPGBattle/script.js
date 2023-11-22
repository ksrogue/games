// variaveis que guardam tags html;
const battleStatus = document.querySelector(".status");

const monsterHp = document.querySelector(".monster-hp");
const monsterSprite = document.querySelector(".monster-sprite");

const playerBtn = document.querySelector(".btn");
const playerHp = document.querySelector(".player-hp");
// -------------------------------;
const player = {
  name: "ksrogue",
  atk: 70,
  hp: 100,
};

const monster = {
  name: "lobo",
  atk: 12,
  hp: 125,
};

let playerTurn = false;

function battleStart() {
  // inicia o combate;
  setTimeout(() => {
    playerTurn = true;
    checkTurn();
  }, 1000);
}

// ataque do jogador;
function atacar() {
  if (playerTurn) {
    if (player.hp > 0 && monster.hp > 0) {
      monster.hp -= player.atk;
      monsterHp.innerHTML = `${monster.hp}/125`;
      battleStatus.innerHTML = `O jogador atacou causando ${player.atk} de dano!`;

      setTimeout(() => {
        playerTurn = false;
        checkTurn();
      }, 2000);
    } else {
      gameOver();
    }
  }
}

// turno do monstro;
function monsterTurn() {
  if (monster.hp > 0 && player.hp > 0) {
    player.hp -= monster.atk;
    playerHp.innerHTML = `HP: ${player.hp}/100`;
    battleStatus.innerHTML = `O inimigo atacou causando ${monster.atk} de dano ao jogador!`;

    setTimeout(() => {
      playerTurn = true;
      checkTurn();
    }, 2000);
  } else {
    gameOver();
  }
}

// checa de quem vai ser a vez;
function checkTurn() {
  if (playerTurn) {
    // se for a vez do jogador;
    battleStatus.innerHTML = "É a sua vez de atacar!";
    playerBtn.style.backgroundColor = "gold";
  } else {
    // se for a vez do inimigo;
    battleStatus.innerHTML = "É a vez do inimigo atacar!";
    playerBtn.style.backgroundColor = "gray";

    setTimeout(() => {
      monsterTurn();
    }, 2000);
  }
}

// se a vida do jogador ou do inimigo chegar a 0, o jogo acaba;
function gameOver() {
  playerTurn = false;
  if (player.hp <= 0) {
    player.hp = 0;
    playerHp.innerHTML = `HP: ${player.hp}/100`;
    battleStatus.innerHTML = "Você foi derrotado!";
  } else if (monster.hp <= 0) {
    monster.hp <= 0;
    monsterHp.innerHTML = `${monster.hp}/125`;
    battleStatus.innerHTML = "Parabéns, você venceu a batalha!";
  }
}
