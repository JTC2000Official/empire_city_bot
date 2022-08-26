const { REST, Routes } = require('discord.js');
const path = require("path")
require("dotenv").config({path:path.resolve(__dirname, "../.env")});


const commands = [
  {
    name: "lookup",
    description: "Get information of member on Discord server",
  },
  {
    name: "whitelist",
    description: "Whitelist member to gain rank and access to Discord and FiveM server"
  },
  {
    name: "welcome",
    description: "Creates welcome channel in bots config files"
  },
  {
    name: "notify",
    description: "Creates verify channel in bots config files"
  },
  {
    name: "support",
    description: "Creates support channel in bots config files"
  },
  {
    name: "application",
    description: "Creates applications channel in bots config files"
  },
  {
    name: "close",
    description: "Closes support ticket - Usage: When support case is done"
  },
  {
    name: "edit",
    description: "Changes specific messages made by the bot. Example: Edit rules"
  }
];

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("986014606889730078"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();