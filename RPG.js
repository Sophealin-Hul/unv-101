const readlineSync = require('readline-sync');
const name = readlineSync.question('Enter your name ');

readlineSync.question('Welcome! ' + name + ', this is The Unknown. Today your fate will determinded your conquest for treasure.' + ' But watch out for the monsters lurking in the shadow. \nPress Enter to begin your journey...');
const monsters = ['Nix', 'Kraken', 'Basilisk', 'Gurada'];
const treasure = ['Elixir of Immortality', 'Luck talisman', 'Trident of the sea'];

var theTreasure = [];
let hP = 30;
const option = ['Walk', 'Escape', 'Print'];
let grab = treasure[Math.floor(Math.random() * treasure.length)];

function rpg(){
    const combo = Math.floor(Math.random()* 10);
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monstersHP = 30;
    const monstersCombo = Math.floor(Math.random()* 11);

    const index = readlineSync.keyInSelect(option, 'Chose your option, wisely');

    if (option[index] == 'Escape') {
        console.log('You escaped the monster!')
        return hP = 0;
    }else if (option[index] == 'Print') {
        console.log(name + '\n' + hP + ' HP' + '\n' + 'Valuable: ' + grab );
    }else if (option[index] == 'Walk') {
        let next = Math.random();
            if (next <= .3) {
                console.log('*** Walking ***');
            }else if (next >= .3) {
                console.log(monster + ' has appeared! Prepare to fight!');

                while (monstersHP > 0 && hP > 0) {
                    const player = readlineSync.question(name + ' your options are few, "r" to run or "a" to attack ');

                    switch (player) {
                        case 'r' :
                            const run = Math.random();
                            if (run < .5) {
                                console.log('Too late! ' + monster + ' hit you with ' + monstersCombo);
                            }else {
                                console.log('That was too close, you are running away from ' + monster);
                                break;
                            }

                        case 'a' :
                            monstersHP -= combo;
                            console.log('You punched ' + monster + ' in the jaw ' + ' with ' + combo + ' attack power!');

                            hP -= monstersCombo;
                            console.log(monster + ' countered with ' + monstersCombo + ' attack power!');

                            if (monstersHP <= 0){
                            console.log('You have defeated ' + monster + '\nHere is your reward: ' + grab);
                            let loot = Math.random();
                            if (loot <= .3) {
                                theTreasure.push(grab);
                            }
                            }else if (hP <= 0) {
                                console.log('You have fallen under the hands of ' + monster + '! Rest well, warrior...');
                            }
                    }
                }
            }
        
    }
    


}

while(hP > 0) {
    playerRevive = function(){
        playerAlive = true;
        hP = 30;
    }
    playerRevive();
    rpg();
}
