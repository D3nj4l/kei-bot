const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create advanced poll.",
    category: "manager",
    run: async (client, message, args) => {
        if(!message.member.roles.cache.some(r=>["Admin", "Mod"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");

        //let question = [];
        let question = args.join(' ');

        /*for (let i = 1; i < args.length; i++) {
            if (args[i].startsWith('"')) break;
            else question.push(args[i]);
        }*/

        question = question.split('"')[0];

        if (!question)
            return message.channel.send(`You did not specify your question!`);

        const choices = [];

        const options = [
            '🇦',
            '🇧',
            '🇨',
            '🇩',
            '🇪',
            '🇫',
            '🇬',
            '🇭',
            '🇮',
            '🇯',
            '🇰',
            '🇱',
            '🇲',
            '🇳',
            '🇴',
            '🇵',
            '🇶',
            '🇷',
            '🇸',
            '🇹',
            '🇺',
            '🇻',
            '🇼',
            '🇽',
            '🇾',
            '🇿',
        ];

        const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
        let match;
        while (match = regex.exec(args.join(' '))) choices.push(match[2]);

        let content = [];
        for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
        content = content.join('\n');

        if (!content)
            return message.channel.send(`You did not specify your choices!`);

        var embed = new Discord.MessageEmbed()
            .setColor('#8CD7FF')
            .setFooter(`${message.author.username} created this poll.`)
            //.setTitle(`**${question}**`)
            .setDescription(content);

        //message.channel.send(`:bar_chart: ${message.author} started a poll.`, embed)
        message.channel.send(`:bar_chart: ${question}`, embed)
        .then(async m => {
            for (let i = 0; i < choices.length; i++) await m.react(options[i]);
        });
    },
};