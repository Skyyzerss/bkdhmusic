
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
      const { ButtonStyle } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setAuthor({
          name: 'Bot Commands and Information',
          iconURL: 'https://cdn.discordapp.com/attachments/1147425299374559315/1157199346492788786/giphy.gif?ex=6517bd5f&is=65166bdf&hm=7965019c060bd364fd47895dc20b01bde3d9a4f12734edcae42a8da9cc3e5901&',
          url: 'https://discord.gg/barkadahanph'
        })

        .setDescription("__**Here are the available commands:**__\n\n" +
          "🎹 **Play**: Stream a song from a given link or text\n" +
          "⏹️ **Stop**: Makes the bot stop playing music\n" +
          "📊 **Queue**: View and manage the song queue\n" +
          "⏭️ **Skip**: Skip the current song\n" +
          "⏸️ **Pause**: Pause the currently playing song\n" +
          "▶️ **Resume**: Resume the paused song\n" +
          "🔁 **Loop**: Toggle loop mode\n" +
          "🏓 **Ping**: Check the bot's latency\n" +
          "🗑️ **Clear**: Clear the song queue\n" +
          "🔄 **Autoplay**: Enable or disable autoplay\n" +
          "🔊 **Volume**: Adjust the music volume\n" +
          "🎧 **Filter**: Apply filters to enhance the sound")



      const button1 = new ButtonBuilder()
        .setLabel('Instagram')
        .setURL('https://www.instagram.com/ll_llenn.ced/')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/barkadahanph')
        .setStyle(ButtonStyle.Link);


      const row = new ActionRowBuilder()
        .addComponents(button1, button2);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => { });

    } catch (e) {
      console.error(e);
    }
  },
};
