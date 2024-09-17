/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class parent{
    constructor(attributes){
    this.createdAt = attributes.createdAt,
    this.name = attributes.name, 
    this.dimensions = attributes.dimensions    
    }

        work(){
            return `${this.name} was removed from the game.`;
        }
  }

class child extends parent{
    constructor(childStats){
        super(childStats);
        this.healthPoints = stats.healthpoints
    }
        study(){
        return `${this.name} took damage`;
    }
}

class grandChild extends child{
    constructor(grandStats){
        super(grandStats);
        this.team = person.team,
        this.weapons = person.weapons, 
        this.language = person.language
    }

    play(){
    return `${this.name} offers a greeting in ${this.language}`;
    }
}
