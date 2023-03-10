const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Liste de toutes les commandes disponibles !",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('Liste de toutes les commandes disponibles.')
        .addFields([ { name: `Commandes actives = ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: `Exécuté par ${inter.user.tag}`, iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};