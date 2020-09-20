var rich = require("discord-rpc");
var rpc = new rich.Client({transport:"ipc"});
const startTimestamp = new Date();

// L'id de votre application. Par exemple, si votre URL est "https://discord.com/developers/applications/640179640249614338/", alors l'ID sera 640179640249614338
var	clientId = "711994072172331139";

async function setActivity() {
rpc.setActivity({

		//Détail de votre activité 
		details: "le rich presence, c'est super !",
		// Votre statut actuel
		state: "code un merveilleux exemple",
		// Ceci détermine la durée du rich presence, et n'influence rien dans le code. Il reste cependant optionel et vous pouvez le retirer si vous le souhaitez
		startTimestamp,


		// Le nom de l'image que vous souhaitez mettre. Le nom saisi doit être IDENTIQUE à celui que vous avez saisi sur https://discord.com/developers/applications/
		largeImageKey: 'image1',
		// Le texte à faire apparaitre lorsque l'on passe la souris sur la grande image
		largeImageText: "texte de la grande image",


		//Le nom de l'image que vous souhaitez mettre. Le nom saisi doit être IDENTIQUE à celui que vous avez saisi sur https://discord.com/developers/applications/
		smallImageKey: 'image2',
		// Le texte à faire apparaitre lorsque l'on passe la souris sur la grande image
		smallImageText: "texte de la petite image",


		// Définit l'instance comme "false"
		instance: false
	})
}
	
rpc.on('ready', () => {
  setActivity();
  console.log("Connecté");
});

rpc.login({clientId}).catch(console.error);