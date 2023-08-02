const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('location')
		.setDescription('get link map location')
        .addStringOption( option =>
            option.setName('location')
            .setDescription('Set Latitude and Longitude "11,22"')
            .setRequired(true)),
    
	async execute(interaction) {
        const location = interaction.options.getString('location');
        const forMathLocation = location.split(' ');
        const lat = forMathLocation[0];
        const long = forMathLocation[1];
        const linkString =  `https://www.google.com/maps/search/${lat}${long}`;
        await interaction.reply(linkString);
      
	},
};