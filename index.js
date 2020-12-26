const Discord = require("discord.js");
const config = require("./config.json");
const { readdirSync } = require("fs");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const token = process.env.TOKEN;
if (!token) {
  console.log("Token not provided.");
  console.log("Exiting.");
  process.exit();
}

global.prefix = config.prefix;

["aliases", "commands"].forEach((x) => (client[x] = new Discord.Collection()));
["command", "event"].forEach((x) => require(`./handlers/${x}`)(client));

client.categories = readdirSync("./commands/");

client.on("guildMemberAdd", (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "✦keyaki-mall✦"
  );
  welcomeChannel.send(
    `Hey ${member}, welcome to Kei Karuizawa club! Tauwa! Choose any colour you like from here #✭color-role-shop✭`
  );
});

client.login(token);
