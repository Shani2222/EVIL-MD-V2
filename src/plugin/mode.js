import fs from 'fs';
import path from 'path';
import config from '../../config.cjs';

const modeCommand = async (m, Matrix) => {
    const botNumber = await Matrix.decodeJid(Matrix.user.id);
    const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim().toLowerCase();

    if (cmd === 'mode') {
        if (!isCreator) {
            await Matrix.sendMessage(m.from, { text: "*ᴛʜɪs ɪs ᴀɴ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ.⛔*" }, { quoted: m });
            return;
        }

        if (['public', 'private'].includes(text)) {
            if (text === 'public') {
                Matrix.public = true;
                m.reply('_ᴇᴠɪʟ ᴍᴅ ᴍᴏᴅᴇ ʜᴀs ʙᴇᴇɴ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ᴘᴜʙʟɪᴄ._');
            } else if (text === 'private') {
                Matrix.public = false;
                m.reply('_ᴇᴠɪʟ ᴍᴅ ᴍᴏᴅᴇ ʜᴀs ʙᴇᴇɴ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ᴘʀɪᴠᴀᴛᴇ._');
            } else {
                m.reply("Usage:\n.Mode public/private");
            }
        } else {
            m.reply("Invalid mode. Please use 'public' or 'private'.");
        }
    }
};

export default modeCommand;
