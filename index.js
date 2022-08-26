const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env")})
const { Client, GatewayIntentBits } = require('discord.js');
const { welcome, support, applications, notify } = require("./commandResponses/embeds.js");
const btn = require("./commandResponses/buttonResponse.js");
const config = require("./config.json");


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, 
                                      GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages] });



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
});

client.on("interactionCreate", async (interaction) => {
    if(interaction.isChatInputCommand()){
        switch(interaction.commandName){
            case "whitelist"    : return;
            case "lookup"       : return;
            case "close"        : return;
            case "welcome"      : await interaction.channel.send(welcome); await interaction.reply({ content: "bruh", ephemeral: true }); return;
            case "notify"       : await interaction.channel.send(notify); await interaction.reply({ content: "bruh", ephemeral: true }); return;
            case "support"      : await interaction.channel.send(support); await interaction.reply({ content: "bruh", ephemeral: true }); return;
            case "application"  : await interaction.channel.send(applications); await interaction.reply({ content: "bruh", ephemeral: true }); return;
            case "edit"         : return;
        }
    }

    if(interaction.isButton()){
        switch(interaction.customId){
            case "createTicket"     : {
                await btn.support(interaction);
                
                return;
            }

            case "createApplication": {
                //await interaction.reply({ content: "bruh", ephemeral: true });
                await btn.applications(interaction);
                return;
            }

            case "news"             : {
                await btn.news(interaction);
                return;
            }

            case "stream"           : {
                await btn.stream(interaction);
                return;
            }

            case "stdWhitelist"     : {
                //await interaction.reply({ content: "bruh", ephemeral: true });
                await btn.stdWhitelist(interaction);
                return;
            }

            case "writtenWhitelist" : {
                //await interaction.reply({ content: "bruh", ephemeral: true });
                await btn.writtenWhitelist(interaction);
                return;
            }
        }
    }

    if(interaction.isModalSubmit()){
        switch(interaction.customId){
            case "ticketForm" : {
                let input = interaction.fields;
                let title = input.getTextInputValue("title");
                let user_id = input.getTextInputValue("userID");
                let description = input.getTextInputValue("ticket_description");
                
                let arr = [];
                let channel = interaction.client.guilds.channels;

                for(const channel of channel.values()){
                    arr.push(channel.id)
                    console.log(channel.id)
                }
                
                let cat = interaction.member.guild
                console.log(cat)


                interaction.guild.channels.create({
                    name: "ticket",
                    type: 0,
                    permissionOverwrites: [{
                        id: interaction.user.id,
                        type: 1,
                        allow: [
                            "0x400" , "0x800", "0x10000" //View channel, Send messages, Read message history
                        ]
                    },
                    {
                        id: interaction.guildId,
                        type: 0,
                        deny: [
                            "0x400" //View channel
                        ]
                    },
                    {
                        id: config.supportTeam,
                        type: 0,
                        allow: [
                            "0x400" , "0x800", "0x10000"
                        ]
                    }
                ]

                });
                
                return interaction.reply({ content: `Ticket oprettet <#${"ticket"}>`, ephemeral: true })
            }
        }
    }
    return;
});



client.login(process.env.TOKEN);