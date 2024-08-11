import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true // or false
};

let mode = ethix.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─══════════════⊷
┋❁┋. ʙᴏᴛ ɴᴀᴍᴇ: *ᴇᴠɪʟ-ᴍᴅ*
┋❁┋. ᴠᴇʀꜱɪᴏɴ: 2.0.3
┋❁┋. ᴏᴡɴᴇʀ : *ᴅᴀʀᴋ ᴇᴠɪʟ*      
┋❁┋. ɴᴜᴍʙᴇʀ: 923319709781
┋❁┋. ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┋❁┋. ᴍᴏᴅᴇ: *${mode}*
┋❁┋. ᴘʀᴇғɪx: *[ . ]*
┋❁╰──────────────
╰════════════════⍟
╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
│   *_ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴅᴀʀᴋ ᴇᴠɪʟ_*
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "•─•◈Cᴏᴍᴍᴀɴᴅs Pᴀɴᴇʟ◈•─•"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/EVIL.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"🔖𝐓𝐀𝐏 𝐅𝐎𝐑 𝐎𝐏𝐄𝐍 𝐌𝐄𝐍𝐔💻",
                 "sections":
                   [{
                    "title":"🖲️𝛯𝛻𝛪𝐿-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈⌨️",
                    "highlight_label":"𝛥𝐿𝐿𝛭𝛯𝛮𝑈💻",
                    "rows":[
                      {
                       "header":"",
                       "title":"💻ᴀʟʟ ᴍᴇɴᴜ⌨️",
                       "description":"𝛯𝛻𝛪𝐿-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈🖲️",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ⤵️",
                        "description":"📂𝐒𝐇𝐎𝐖 𝐀𝐋𝐋 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔🗂",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍👨‍👧‍👧ɢʀᴏᴜᴘ ᴍᴇɴᴜ👩‍❤️‍👨",
                        "description":"𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐓𝐇𝐀𝐓 𝐀𝐑𝐄 𝐎𝐍𝐋𝐘 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐅𝐎𝐑 𝐆𝐑𝐎𝐔𝐏 ",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"🧰ᴛᴏᴏʟ ᴍᴇɴᴜ👨‍🔧",
                        "description":"𝐒𝐇𝐎𝐖 𝐌𝐄 𝐓𝐎𝐎𝐋𝐌𝐄𝐍𝐔🛠",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴍᴀɪɴ ᴍᴇɴᴜ🏹",
                        "description":"📪𝐁𝐎𝐓 𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒🗳",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"ᴏᴡɴᴇʀ ᴍᴇɴᴜ👨‍💻",
                        "description":"𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐅𝐎𝐑 𝐌𝐘 𝐇𝐀𝐍𝐃𝐒𝐎𝐌𝐄 𝐎𝐖𝐍𝐄𝐑😍",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"✨ᴀɪ ᴍᴇɴᴜ⌨️",
                        "description":"💫𝐒𝐇𝐎𝐖 𝐌𝐄 𝐀𝐈 𝐌𝐄𝐍𝐔🌏",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"🔍sᴇᴀʀᴄʜ ᴍᴇɴᴜ🔎",
                        "description":"♂️𝐒𝐇𝐎𝐖 𝐌𝐄 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔🔎",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"sᴛᴀʟᴋ ᴍᴇɴᴜ",
                        "description":"👨‍💼𝐒𝐇𝐎𝐖 𝐌𝐄 𝐒𝐓𝐀𝐋𝐊 𝐌𝐄𝐍𝐔🤖",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"🥏 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 𝚖𝚎𝚗𝚞",
                        "description":"🛷𝐒𝐇𝐎𝐖 𝐌𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔🖥️",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `hi ${m.pushName} ${pushwish}
╭─═════════════⊷❍
┋❁┋. ʙᴏᴛ ɴᴀᴍᴇ: *ᴇᴠɪʟ-ᴍᴅ*
┋❁┋. ᴠᴇʀꜱɪᴏɴ: 2.0.3
┋❁┋. ᴏᴡɴᴇʀ : *ᴅᴀʀᴋ ᴇᴠɪʟ*      
┋❁┋. ɴᴜᴍʙᴇʀ: 923319709781
┋❁┋. ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┋❁┋. ᴍᴏᴅᴇ: *${mode}*
┋❁┋. ᴘʀᴇғɪx: *[ . ]*
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ════⊷❍
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿2
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿3
┋❀┃ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┋❀┃ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┋❀┃ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┋❀┃ ${prefix}𝙼𝙿3
┋❀╰───────────────
╰═════════════════⍟
╭─❍ 𝙰𝙸 ══════════⊷❍
┋❀┃ ${prefix}𝙰𝚒
┋❀┃ ${prefix}𝙱𝚞𝚐
┋❀┃ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┋❀┃ ${prefix}𝙶𝚙𝚝
┋❀┃ ${prefix}𝙳𝚊𝚕𝚕𝚎
┋❀┃ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┋❀┃ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
┋❀╰───────────────
╰═════════════════⍟
╭─❍ 𝚃𝙾𝙾𝙻 ════════⊷❍
┋❀┃ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┋❀┃ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┋❀┃ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┋❀┃ ${prefix}𝚃𝚛𝚝
┋❀┃ ${prefix}𝚃𝚝𝚜
┋❀╰───────────────
╰═════════════════⍟
╭─❍ 𝙶𝚛𝚘𝚞𝚙 ════════⊷❍
┋❀┃ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┋❀┃ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┋❀┃ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┋❀┃ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┋❀┃ ${prefix}𝙶𝚛𝚘𝚞𝚙
┋❀┃ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┋❀┃ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┋❀┃ ${prefix}𝙰𝚍𝚍
┋❀┃ ${prefix}𝙺𝚒𝚌𝚔
┋❀┃ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┋❀┃ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕 
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┋❀┃ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┋❀┃ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┋❀┃ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
┋❀╰────────────────
╰══════════════════⍟
╭─❍ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ══════⊷❍
┋❀┃ ${prefix}𝙰𝚙𝚔
┋❀┃ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┋❀┃ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┋❀┃ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┋❀┃ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┋❀┃ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┋❀┃ ${prefix}𝙸𝚗𝚜𝚝𝚊
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙3
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙4
┋❀┃ ${prefix}𝙿𝚕𝚊𝚢
┋❀┃ ${prefix}𝚂𝚘𝚗𝚐
┋❀┃ ${prefix}𝚅𝚒𝚍𝚎𝚘
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┋❀┃ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
┋❀╰────────────────
╰══════════════════⍟
╭─❍ 𝚂𝙴𝙰𝚁𝙲𝙷 ════════⊷❍
┋❀┃ ${prefix}𝙿𝚕𝚊𝚢
┋❀┃ ${prefix}𝚈𝚝𝚜
┋❀┃ ${prefix}𝙸𝚖𝚍𝚋
┋❀┃ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┋❀┃ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┋❀┃ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┋❀┃ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┋❀┃ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┋❀┃ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┋❀┃ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┋❀┃ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
┋❀╰────────────────
╰══════════════════⍟
╭─❍ 𝙼𝙰𝙸𝙽 ═════════⊷❍
┋❀┃ ${prefix}𝙿𝚒𝚗𝚐
┋❀┃ ${prefix}𝙰𝚕𝚒𝚟𝚎
┋❀┃ ${prefix}𝙾𝚠𝚗𝚎𝚛
┋❀┃ ${prefix}𝙼𝚎𝚗𝚞
┋❀┃ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
┋❀╰───────────────
╰═════════════════⍟
╭─❍ 𝙾𝚆𝙽𝙴𝚁 ════════⊷❍
┋❀┃ ${prefix}𝙹𝚘𝚒𝚗
┋❀┃ ${prefix}𝙻𝚎𝚊𝚟𝚎
┋❀┃ ${prefix}𝙱𝚕𝚘𝚌𝚔
┋❀┃ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┋❀┃ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┋❀┃ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┋❀┃ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┋❀┃ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┋❀┃ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┋❀┃ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┋❀┃ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
┋❀╰────────────────
╰══════════════════⍟
╭─❍ 𝚂𝚃𝙰𝙻𝙺 ═════════⊷❍
┋❀┃ ${prefix}𝙽𝚘𝚠𝚊
┋❀┃ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┋❀┃ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┋❀┃ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
┋❀╰────────────────
╰══════════════════⍟
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Ethix-MD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ALLMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w@newsletter',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ══════⊷❍
┋❀┃ ${prefix}𝙰𝚙𝚔
┋❀┃ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┋❀┃ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┋❀┃ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┋❀┃ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┋❀┃ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┋❀┃ ${prefix}𝙸𝚗𝚜𝚝𝚊
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙3
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙4
┋❀┃ ${prefix}𝙿𝚕𝚊𝚢
┋❀┃ ${prefix}𝚂𝚘𝚗𝚐
┋❀┃ ${prefix}𝚅𝚒𝚍𝚎𝚘
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┋❀┃ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┋❀┃ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
┋❀╰────────────────
╰══════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/DOWNLOADMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙶𝚛𝚘𝚞𝚙 ════════⊷❍
┋❀┃ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┋❀┃ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┋❀┃ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┋❀┃ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┋❀┃ ${prefix}𝙶𝚛𝚘𝚞𝚙
┋❀┃ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┋❀┃ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┋❀┃ ${prefix}𝙰𝚍𝚍
┋❀┃ ${prefix}𝙺𝚒𝚌𝚔
┋❀┃ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┋❀┃ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕 
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┋❀┃ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┋❀┃ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┋❀┃ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
┋❀╰────────────────
╰══════════════════⍟
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/GROUPMENU.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙼𝙰𝙸𝙽 ═════════⊷❍
┋❀┃ ${prefix}𝙿𝚒𝚗𝚐
┋❀┃ ${prefix}𝙰𝚕𝚒𝚟𝚎
┋❀┃ ${prefix}𝙾𝚠𝚗𝚎𝚛
┋❀┃ ${prefix}𝙼𝚎𝚗𝚞
┋❀┃ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
┋❀╰───────────────
╰═════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/MAINMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙾𝚆𝙽𝙴𝚁 ════════⊷❍
┋❀┃ ${prefix}𝙹𝚘𝚒𝚗
┋❀┃ ${prefix}𝙻𝚎𝚊𝚟𝚎
┋❀┃ ${prefix}𝙱𝚕𝚘𝚌𝚔
┋❀┃ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┋❀┃ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┋❀┃ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┋❀┃ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┋❀┃ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┋❀┃ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┋❀┃ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┋❀┃ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┋❀┃ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
┋❀╰────────────────
╰══════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/OWNERMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝚂𝙴𝙰𝚁𝙲𝙷 ═══════⊷❍
┋❀┃ ${prefix}𝙿𝚕𝚊𝚢
┋❀┃ ${prefix}𝚈𝚝𝚜
┋❀┃ ${prefix}𝙸𝚖𝚍𝚋
┋❀┃ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┋❀┃ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┋❀┃ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┋❀┃ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┋❀┃ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┋❀┃ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┋❀┃ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┋❀┃ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
┋❀╰────────────────
╰══════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/SEARCHMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝚂𝚃𝙰𝙻𝙺 ═════════⊷❍
┋❀┃ ${prefix}𝙽𝚘𝚠𝚊
┋❀┃ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┋❀┃ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┋❀┃ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
┋❀╰────────────────
╰══════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/STALK.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝚃𝙾𝙾𝙻 ════════⊷❍
┋❀┃ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┋❀┃ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┋❀┃ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┋❀┃ ${prefix}𝚃𝚛𝚝
┋❀┃ ${prefix}𝚃𝚝𝚜
┋❀╰───────────────
╰═════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOOLMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙰𝙸 ══════════⊷❍
┋❀┃ ${prefix}𝙰𝚒
┋❀┃ ${prefix}𝙱𝚞𝚐
┋❀┃ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┋❀┃ ${prefix}𝙶𝚙𝚝
┋❀┃ ${prefix}𝙳𝚊𝚕𝚕𝚎
┋❀┃ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┋❀┃ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
┋❀╰───────────────
╰═════════════════⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/AIMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`╭───❍ s ᴇ ʀ ᴠ ᴇ ʀ ═══⊷❍
┋❁┋. 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
┋❁┋. 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
┋❁╰──────────────
╰════════════════⍟
╭─❍ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ════⊷❍
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿2
┋❀┃ ${prefix}𝙰𝚃𝚃𝙿3
┋❀┃ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┋❀┃ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┋❀┃ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┋❀┃ ${prefix}𝙼𝙿3
┋❀╰───────────────
╰═════════════════⍟
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/CONVERTERMENU.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029Va8TzeF0AgW8dVET3U1w',
                  newsletterName: "𝐄𝐕𝐈𝐋-𝐌𝐃-𝐕2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
