class hero {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`User is ${this.username}`);
  }

  static showHeroes() {
    return `Superman`;
  }
}

const hero1 = new hero("Clark Kent");

console.log(hero1.username);

class superMan extends hero {
  constructor() {
    super("Superman");
  }
  fly() {
    return "I can Fly";
  }
}

const hero2 = new hero(`Bruce Wayne`);
// console.log(hero2.showHeroes())
