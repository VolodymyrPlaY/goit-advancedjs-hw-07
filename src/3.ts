// Інтерфейс ICharacter, який включає властивості name і level та методи introduce і levelUp.
interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(): void;
}

// Інтерфейс ISpellCaster, який включає метод castSpell.
interface ISpellCaster {
  castSpell(): void;
}

// Реалізація класу Wizard, який реалізовує інтерфейси ICharacter та ISpellCaster.
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Тестування класу Wizard
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16

export {};
