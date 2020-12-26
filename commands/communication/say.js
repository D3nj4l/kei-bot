module.exports = {
  name: "say",
  category: "communication",
  description: "Make the bot say something.",
  run: async (client, message, args) => {
    var channelName = message.channel.name;
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") &&
      channelName != "✭play-with-bot✭"
    ) {
      return message.channel.send(
        "Sorry, you don't have permissions to use this, or you cannot use command here!"
      );
    }

    const sayMessage = args.join(" ");
    message.delete().catch((O_o) => {});
    message.channel.send(sayMessage);
  },
};
