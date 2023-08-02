const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Creates a poll')
        .addStringOption( option =>
            option.setName('title')
            .setDescription('The title of the poll')
            .setRequired(true)),
    
	async execute(interaction) {
        const title = interaction.options.getString('title');
        const pollString =  `Poll: ${title}\nTo vote, select ✅ for yes and ❌ for no`;
        const poll = await interaction.reply({content: pollString, fetchReply: true});
        //React with yes or no emoji
        poll.react('✅');
        poll.react('❌');
	},
};