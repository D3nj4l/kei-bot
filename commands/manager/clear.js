module.exports = {
  name: "clear",
  category: "manager",
  description: "Clear a certain number of recent messages in a channel.",
  run: async (client, message, args) => {
    if (message.deletable) {
      message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("Sorry, you don't have permissions to use this!")
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.reply("This is not a number").then((msg) => {
        msg.delete({ timeout: 5000 });
      });
    }

    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message
        .reply(
          "Please provide a number between 2 and 100 for the number of messages to delete"
        )
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });

    const fetched = await message.channel.messages.fetch({
      limit: deleteCount,
    });
    message.channel
      .bulkDelete(fetched)
      .catch((err) => message.reply(`Something went wrong... ${err}`));
    message.channel
      .send(`**Successfully** Deleted ***${deleteCount}*** Messages.`)
      .then((msg) => {
        msg.delete({ timeout: 5000 });
      });
  },
};
