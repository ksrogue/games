let i = 1;
let classes = ["Guerreiro", "Ladrão", "Sacerdote"];
let classHero = document.querySelector(".class-hero");
let className = document.querySelector(".class-name");

function leftClass() {
    if(i > 0) {
        i--;
        classHero.src = `${classes[i]}.jpg`;
    } 

    className.innerHTML = classes[i];
}

function rightClass() {
    if(i < 2) {
        i++;
        classHero.src = `${classes[i]}.jpg`;
    } 

    className.innerHTML = classes[i];
}