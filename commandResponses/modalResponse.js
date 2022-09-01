function ticketForm(interaction, channelID){
    

  let getTextValue = interaction.fields;
  let channel = interaction.guild.channels.cache.get(channelID);
  channel.setName(`Ticket-${channelID.slice(-6)}`)
  let ticket = {
      "content": `Use \"/Close\" to mark ticket as \"Done/Closed\" - ||@everyone||`,
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": `${getTextValue.getTextInputValue("title")}`,
          "description": `<@${interaction.user.id}> - ID: ${getTextValue.getTextInputValue("userID")}`,
          "color": 0x00FFFF,
          "fields": [
            {
              "name": `Description`,
              "value": `${getTextValue.getTextInputValue("ticket_description")}`
            }
          ]
        }
      ]
      };
  
  
  channel.send(ticket);
}


function whitelistForm(interaction){
  let getTextValue = interaction.fields;

} 









module.exports = { ticketForm, whitelistForm };