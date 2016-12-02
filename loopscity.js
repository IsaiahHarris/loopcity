var count = 0;
for (var count = 0; count <= 100; count++){
  console.log("i can count to" + count);
}
for (var animalCount = 0; animalCount <= 5; animalCount++){
  console.log("there are " + animalCount + " many animals in Noah's ark");
}

var partyAnimals = ["tan", "skrillex", "zak", "panda", "lion"];
    console.log(partyAnimals[0] + " is a beast");
    console.log(partyAnimals[1] + " is gang");
    console.log(partyAnimals[2] + " is hacker");
    console.log(partyAnimals[3] + " is a old song");
    console.log(partyAnimals[4] + " is rawr");

var weaponChest = ["mace", "Sorcerer's stone", "excalibur"];
var hero = {
  wizard:"merlin",
  weapon: weaponChest[0],
  power:30
};

function war(weapon) {
  if (weapon == hero.weapon == weaponChest[1]) {
      console.log(hero.wizard + "shall slay the dragon with the " + weapon)
  }else{
    hero.weapon = weaponChest[1]
    console.log(hero.wizard + " is ready for war with the " + weapon)
  }
}

war(hero.weapon);
