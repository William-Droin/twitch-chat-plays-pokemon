# Twitch-Chat-Plays-Pokemon
It is a node.js app that let's a Twitch.tv chat interact with a video game by typing in the chat 

## How to set it up

1. Download visualBoy
2. Dowload your favorite Pokemon Game (This code can work with other GBA games but was tested with Pokemon Fire Red)

![VisualBoyPokemon](https://user-images.githubusercontent.com/72973649/102903767-150b7e00-4471-11eb-9735-c3386e3938c7.jpg)

3. Dowload Node.js
4. Make sure you have all the needed modules (you can see a list of them in the package.json file).
5. Generate a password to allow your bot to access your Twitch Channel (Official twitch website: http://twitchapps.com/tmi/)
6. add the generated password, your channel name and a bot name of your choice in the appropriate spaces in Index.js
```javascript
identity: {
		username: '[Replace with username of your Twitch Bot]',
		password: '[Replace with the password generated for your Twitch Bot]'
	},
	channels: [ 'YOUR CHANNEL' ]
```
7. run the Index.js script with Node.js
8. Let your twitch chat do the rest ;)

## Commands

![GameBoyAdvanceRep](https://user-images.githubusercontent.com/72973649/102907184-f65bb600-4475-11eb-9a8a-2c5eaaafac4a.png)


