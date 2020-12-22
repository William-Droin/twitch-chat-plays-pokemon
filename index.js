const tmi = require('tmi.js');
var robot = require("robotjs");



//functions to press the different keys

function goUp(){

	robot.keyToggle('up','down');

	setTimeout(() => {  robot.keyToggle('up','up'); }, 230);

}

function goDown(){

	robot.keyToggle('down','down');

	setTimeout(() => {  robot.keyToggle('down','up'); }, 230);

}

function goLeft(){

	robot.keyToggle('left','down');

	setTimeout(() => {  robot.keyToggle('left','up'); }, 230);
}

function goRight(){

	robot.keyToggle('right','down');

	setTimeout(() => {  robot.keyToggle('right','up'); }, 230);

}

function pressA(){

	robot.keyToggle('x','down');

	setTimeout(() => {  robot.keyToggle('x','up'); }, 230);

}

function pressB(){

	robot.keyToggle('z','down');

	setTimeout(() => {  robot.keyToggle('z','up'); }, 230);

}

function pressShoulderLeft(){

	robot.keyToggle('a','down');

	setTimeout(() => {  robot.keyToggle('a','up'); }, 230);

}

function pressShoulderRight(){

	robot.keyToggle('s','down');

	setTimeout(() => {  robot.keyToggle('s','up'); }, 230);

}



const regex = /command/;





const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: '[Replace with username of your Twitch Bot]',
		password: '[Replace with the password generated for your Twitch Bot]'
	},
	channels: [ 'YOUR CHANNEL' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {

	// Ignore echoed messages.
	if(self) return;

	console.log(message)
	if (regex.test(message)){
		//if the messages contains the string "command", display the list of commands
		client.say(channel, `commands to play pokemon: type a to press A \n\r type b to press B \n\r  type left to go left\n\r type right to go right \n\r type up to go up\n down to go down \n l to press to left shoulder \n r to press the right shoulder `);
	}

  if(message.toLowerCase() === 'hello') {
		// "@alca, heya!"
		client.say(channel, `welcome to the channel, @${tags.username}, if you need to know the commands please type: command`);
	}



if(message.toLowerCase() === 'mousetest'){

		// Move the mouse across the screen as a sine wave.


		// Speed up the mouse.
		robot.setMouseDelay(2);

		var twoPI = Math.PI * 2.0;
		var screenSize = robot.getScreenSize();
		var height = (screenSize.height / 2) - 10;
		var width = screenSize.width;

		for (var x = 0; x < width; x++)
		{
			y = height * Math.sin((twoPI * x) / width) + height;
			robot.moveMouse(x, y);
		}
}


//Keyboard script


if(message.toLowerCase() === 'up'){
	goUp();
}

if(message.toLowerCase() === 'down'){
	goDown();
}

if(message.toLowerCase() === 'left'){
	goLeft();
}

if(message.toLowerCase() === 'right'){
	goRight();
}

if(message.toLowerCase() === 'a'){
	pressA();
}

if(message.toLowerCase() === 'b'){
	pressB();
}

if(message.toLowerCase() === 'l'){
	pressShoulderLeft();
}

if(message.toLowerCase() === 'r'){
	pressShoulderRight();
}



});
