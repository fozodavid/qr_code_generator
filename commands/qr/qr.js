const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { QRGeneratorURL } = require('../../constants');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('qr')
		.setDescription('Creates a QR code')
    .addStringOption(option =>
      option
        .setName('data')
        .setDescription('data of the QR')
    )
    .addStringOption(option =>
      option
        .setName('size')
        .setDescription('size of the QR')
    )
    .addStringOption(option =>
      option
        .setName('color')
        .setDescription('color of the QR')
    ),
	async execute(interaction) {
    const data = interaction.options.getString('data') || '';
    const size = interaction.options.getString('size') || '200x200';
    const color = interaction.options.getString('color') || '000000';
    const url = `${QRGeneratorURL}&chs=${size}&chl=${encodeURIComponent(data)}&chco=${color}`

    const response = new EmbedBuilder()
      .setTitle("QR code response")
      .setImage(url)
      .setTimestamp()

    await interaction.channel.send({ embeds: [response] })
	},
};
