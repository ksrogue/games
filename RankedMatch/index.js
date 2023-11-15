let win = 75;
let lose = 8;

function winLose(win, lose) {
  let resultado = win - lose;

  return resultado;
}

function rank(resultado) {
  let rank;

  if (resultado <= 10) {
    rank = "Ferro";
  } else if (resultado > 10 && resultado <= 20) {
    rank = "Bronze";
  } else if (resultado > 20 && resultado <= 50) {
    rank = "Prata";
  } else if (resultado > 50 && resultado <= 80) {
    rank = "Ouro";
  } else if (resultado > 80 && resultado <= 90) {
    rank = "Diamante";
  } else if (resultado > 90 && resultado <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }

  return rank;
}

console.log(
  `O herói tem de saldo ${winLose(win, lose)} e está no rank de ${rank(
    winLose(win, lose)
  )}`
);
