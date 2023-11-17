class hero {
  constructor(nome, level, job) {
    this.nome = nome;
    this.level = level;
    this.job = job;
  }

  atacar() {
    switch (this.job) {
      case "Mago":
        console.log(`O ${this.job} atacou usando magia!`);
        break;
      case "Guerreiro":
        console.log(`O ${this.job} atacou usando espada!`);
        break;
      case "Monge":
        console.log(`O ${this.job} atacou usando artes marciais!`);
        break;
      case "Ninja":
        console.log(`O ${this.job} atacou usando shuriken!`);
        break;
      default:
        console.log("Classe inválida!");
    }
  }
}

let ninja = new hero("ksrogue", 12, "Ninja");
ninja.atacar();

let samurai = new hero("ksamurai", 8, "Samurai");
samurai.atacar();
