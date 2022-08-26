const config = require("../config.json");
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, SelectMenuBuilder } = require('discord.js');

function stdWhitelist(interaction){
    console.log("TEST1")
}

function writtenWhitelist(interaction){
    console.log("TEST2")
}

function support(interaction){
    const modal = new ModalBuilder()
        .setCustomId("ticketForm")
        .setTitle("Opret Ticket");

    const title = new TextInputBuilder()
        .setLabel("Titel på ticket")
        .setCustomId("title")
        .setStyle(TextInputStyle.Short);
    
    const id = new TextInputBuilder()
        .setCustomId("userID")
        .setLabel("In-game ID")
        .setStyle(TextInputStyle.Short);
    
    const description = new TextInputBuilder()
        .setCustomId("ticket_description")
        .setLabel("Beskrivelse af dit problem")
        .setStyle(TextInputStyle.Paragraph);
    
    const title_row = new ActionRowBuilder().addComponents(title);
    const id_row = new ActionRowBuilder().addComponents(id);
    const description_row = new ActionRowBuilder().addComponents(description);

    modal.addComponents(title_row, id_row, description_row);
    interaction.showModal(modal)
 
    return;
}

function news(interaction){
    let roles = interaction.member.roles;
    if(roles.cache.has(config.teamNews)){
        roles.remove(config.teamNews)
        return interaction.reply({ content: "❌ Removed notification for news 📢", ephemeral: true});
    }
    roles.add(config.teamNews);
    return interaction.reply({ content: "✅ Added notification for news 📢", ephemeral: true });
    
}

function stream(interaction){
    let roles = interaction.member.roles;
    if(roles.cache.has(config.teamStream)){
        roles.remove(config.teamStream)
        return interaction.reply({ content: "❌ Removed notification for stream <:twitch:1009438415684649000>", ephemeral: true});
    }
    roles.add(config.teamStream);
    return interaction.reply({ content: "✅ Added notification for stream <:twitch:1009438415684649000>", ephemeral: true });
}

function applications(interaction){
    console.log("TEST6")
}





module.exports = { applications, news, stdWhitelist, stream, support, writtenWhitelist };