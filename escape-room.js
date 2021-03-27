var readlineSync = require('readline-sync');
var playerName = readlineSync.question('Enter your name ');

var welcome = `Welcome ${playerName} to the Escape Room Stimulation!`;
console.log(welcome);

var playerLives = true;
var hasKey = false;

while(playerLives == true)
{
    const menuID = readlineSync.keyIn(` Enter 1 to put your hand in the hole  \n Enter 2 to find the key  \n Enter 3 to open the door  `, {limit: '$<1-3>'});
    if (menuID == 1){
        console.log(`${playerName}, it appear that you picked the wrong choice. Game Over!`);
        playerLives = false;
    }
    else if (menuID == 2 && hasKey == false){
        console.log(`Congratulation! ${playerName}, you found the key. Please proceed to the door.`);
        hasKey = true;
    }
    else if (menuID == 2 && hasKey == true){
        console.log(`${playerName}, you have the key. The door's awaiting!`);
    }
    else if (menuID == 3 && hasKey == false){
        console.log(`${playerName}, you shall not pass! Go back and find the key!`);
    }
    else if (menuID == 3 && hasKey == true){
        console.log(`Wonderful! You've opened the door, go forth!`);
        playerLives = false;
    }

}