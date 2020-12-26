const Discord = require("discord.js");

module.exports = {
    name: "vote",
    description: "Create a simple yes or no poll",
    category: "manager",
    run: async (client, message, args) => {
        if(!message.member.roles.cache.some(r=>["Admin", "Mod"].includes(r.name)))
          return message.reply("Sorry, you don't have permissions to use this!");

        const channel =
          message.mentions.channels.first() ||
          message.guild.channels.cache.get(args[0]);

        if (!channel) {
          return message.channel.send(`You did not mention / give the id of your channel!`);
        }

        let question = args.slice(1).join(' ');

        if (!question)
          return message.channel.send(`You did not specify your question!`);

        const Embed = new Discord.MessageEmbed()
          .setTitle(`Vote`)
          .setDescription(`${question}`)
          .setFooter(`${message.author.username} created this poll.`)
          .setColor(`YELLOW`);
          
        let msg = await client.channels.cache.get(channel.id).send(Embed);
        await msg.react("✅");
        await msg.react("❌");
    },
};