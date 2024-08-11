const invite = async (m, gss) => {
  try {
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    const validCommands = ['invite', 'add'];

    if (!validCommands.includes(cmd)) return;
    
    if (!m.isGroup) return m.reply("*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs⛔*");

    const text = m.body.slice(prefix.length + cmd.length).trim();
    
    const botNumber = await gss.decodeJid(gss.user.id);
    const isBotAdmins = groupMetadata.participants.find(p => p.id === botNumber)?.admin;

    if (!isBotAdmins) {
      return m.reply('* ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.⛔*');
    }

    if (!text) return m.reply(`*ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɪɴᴠɪᴛᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ⛔*\n\nExample:\n*${prefix + cmd}* 923319709781`);
    if (text.includes('+')) return m.reply(`*ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏɢᴇᴛʜᴇʀ ᴡɪᴛʜᴏᴜᴛ⛔*+*`);
    if (isNaN(text)) return m.reply(`*ᴇɴᴛᴇʀ ᴏɴʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀs ᴘʟᴜs ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴡɪᴛʜᴏᴜᴛ sᴘᴀᴄᴇs⛔`);

    const group = m.from;
    const groupMetadata = await gss.groupMetadata(group);
    const link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group);
    const inviteMessage = `≡ *ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴀᴛɪᴏɴ*\n\nᴀ ᴜsᴇʀ ɪɴᴠɪᴛᴇs ʏᴏᴜ ᴛᴏ ᴊᴏɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ "${groupMetadata.subject}".\n\nInvite Link: ${link}\n\nɪɴᴠɪᴛᴇᴅ ʙʏ: @${m.sender.split('@')[0]}`;

    await gss.sendMessage(`${text}@s.whatsapp.net`, { text: inviteMessage, mentions: [m.sender] });
    m.reply(`*ᴀɴ ɪɴᴠɪᴛᴇ ʟɪɴᴋ ɪs sᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴜsᴇʀ. ☑*`);

  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default invite;
