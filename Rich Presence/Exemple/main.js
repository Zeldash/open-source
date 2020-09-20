var rich = require("discord-rpc");
var rpc = new rich.Client({transport:"ipc"});
const startTimestamp = new Date();

var	clientId = "711994072172331139";

async function setActivity() {
rpc.setActivity({
		details: "Visual Studio Code",
		state: "En train de coder Rena",
		startTimestamp,
		largeImageKey: 'rena',
		largeImageText: 'Rena | bot discord',
		smallImageKey: 'avatar',
		smallImageText: 'zeldash | Fondateur',
		instance: false
	})
}
	
rpc.on('ready', () => {
  setActivity();
  console.log("Connecté");
});

rpc.login({clientId}).catch(console.error);
