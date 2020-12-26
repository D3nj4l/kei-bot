const { stripIndents } = require("common-tags");

module.exports = (client) => {
  const date = new Date();
  console.log(stripIndents`${client.user.username} has started, with ${
    client.users.cache.size
  } users, in ${client.channels.cache.size} channels of ${
    client.guilds.cache.size
  } guilds.
    ${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`);
};
