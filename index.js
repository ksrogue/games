let actor = {
    name: "",
    job: "",
    level: 1,
    atk: 2,
    hp: maxHp,
    maxHp: 10
}

let monster = {
    name: "slime",
    level: 1,
    atk: 2,
    hp: maxHp,
    maxHp: 5
}

actor.name = "ksrogue";
actor.job = "assassin";

function levelUp() {
    actor.level++;
    healAll();
    console.log("Você subiu um nível!");
}

function healAll() {
    actor.hp = actor.maxHp;
}

function pAtk(power) {
    monster.hp - power;
}

function Matk(power) {
    actor.hp - power;
}