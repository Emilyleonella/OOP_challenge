// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.

class Pokemon{
 constructor(name, type, attack){
  this.name = name
  this.type = type
  this. attack = attack
 }
 attackUsed(){
   console.log(`${this.name} used ${this.attack}`)
 }

}

const pokemon1 = new Pokemon ("Charmander", "Fire", "Dragon Breath" )

const pokemon2 = new Pokemon ("Piplup", "Water", "Water Gun" )

pokemon1.attackUsed()

pokemon2.attackUsed()