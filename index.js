const { Client, Intents } = require('discord.js');
var Client1 = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("Connecté");
    Client.user.setStatus("online")
Client.user.setActivity("Zeyrox.pro" , {type: 1 })
});

Client.on("messageCreate", message =>{
    if (message.author.bot) return;

    message.reply("Nique ta mère et ferme ta gueule stp , Merci , CORDIALEMENT.");
});




Client.login(processus.env.TOKEN);
