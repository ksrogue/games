let hero = {
    name: "ksrogue",
    xp: 5001,
    tier: ""
}

if(hero.xp < 1000) {
    hero.tier = "Ferro";
} else if(hero.xp > 1000 && hero.xp <= 2000) {
    hero.tier = "Bronze";
} else if(hero.xp > 2000 && hero.xp <= 5000) {
    hero.tier = "Prata Ouro";
} else if(hero.xp > 5000 && hero.xp <= 6000) {
    hero.tier = "Platina Diamante";
} else if(hero.xp > 6000 && hero.xp <= 8000) {
    hero.tier = "Ascendente";
} else if(hero.xp > 8000 && hero.xp <= 9000) {
    hero.tier = "Imortal";
} else {
    hero.tier = "Radiante";
}


console.log(`O herói ${hero.name} está no elo ${hero.tier}!`);
