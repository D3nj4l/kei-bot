const Discord = require("discord.js");
const config = require("./config.json");
const { readdirSync } = require("fs");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

global.prefix = config.prefix;

["aliases", "commands"].forEach(x => client[x] = new Discord.Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.categories = readdirSync("./commands/");

client.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '✦keyaki-mall✦')
  welcomeChannel.send (`Hey ${member}, welcome to Kei Karuizawa club! Tauwa! Choose any colour you like from here #✭color-role-shop✭`)
})

client.login('NzQ0NDU1NzcxMjY5MzY1ODIw.Xzjedw.wmK01f70DOooOeDfVMBxCnPEfxs');