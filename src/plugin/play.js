import ytSearch from 'yt-search';
import fetch from 'node-fetch';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;
import axios from 'axios'; // Import axios for API requests


const searchResultsMap = new Map();
let searchIndex = 1;

const videocommand = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;

  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
    }
  }
  const selectedId = selectedListId || selectedButtonId;

  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['play', 'song', 'music', 'ytadoc', 'ytmp3doc', 'sing', 'dlsong'];

  if (validCommands.includes(cmd)) {
    if (!text) {
      return m.reply(`Hello *_${m.pushName}_,*\nPlease provide a song name or search query eg *.play Spectre*`);
    }

    try {
      await m.React("🕘");
      await m.reply(`A moment, *Gifted-Md* is Processing from GiftedAPi...`);
      const searchResults = await ytSearch(text);
      const videos = searchResults.videos.slice(0, 5);

      if (videos.length === 0) {
        m.reply('No results found.');
        await m.React("❌");
        return;
      }

      videos.forEach((video, index) => {
        const uniqueId = searchIndex + index;
        searchResultsMap.set(uniqueId, video);
      });

      const currentResult = searchResultsMap.get(searchIndex);
      const buttons = [
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "🎧 ᴀᴜᴅɪᴏ",
            id: `media_audio_${searchIndex}`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "🎵 ᴀᴜᴅɪᴏ ᴅᴏᴄᴜᴍᴇɴᴛ",
            id: `media_audiodoc_${searchIndex}`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "⏩ sᴇᴀʀᴄʜ ɴᴇxᴛ",
            id: `next_${searchIndex + 1}`
          })
        }, 
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "sʜᴏᴡ 💜 ғᴏʀ ɢɪғᴛᴇᴅ",
            url: `https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l`
          })
        }
      ];

      const thumbnailUrl = currentResult.thumbnail;
      const msg = generateWAMessageFromContent(m.from, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: `*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n*Tittle:* ${currentResult.title}\n*Artist:* ${currentResult.author.name}\n*Views:* ${currentResult.views}\n*Duration:* ${currentResult.timestamp}\n*User:* *_${m.pushName}_,*\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url: thumbnailUrl } }, { upload: Matrix.waUploadToServer })),
                title: "",
                gifPlayback: true,
                subtitle: "",
                hasMediaAttachment: false 
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons
              }),
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: false,
              }
            }),
          },
        },
      }, {});
      await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      });
      await m.React("✅");
      searchIndex += 1;
    } catch (error) {
      console.error("Error processing your request:", error);
      m.reply('Error processing your request.');
      await m.React("❌");
    }
  } else if (selectedId) {
    if (selectedId.startsWith('next_')) {
      const nextIndex = parseInt(selectedId.replace('next_', ''));
      const currentResult = searchResultsMap.get(nextIndex);

      if (!currentResult) {
        return m.reply('No more results.');
      }
      const buttons = [
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "🎧 ᴀᴜᴅɪᴏ",
            id: `media_audio_${searchIndex}`
          })
        },
                {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "🎵 ᴀᴜᴅɪᴏ ᴅᴏᴄᴜᴍᴇɴᴛ",
            id: `media_audiodoc_${searchIndex}`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "⏩ sᴇᴀʀᴄʜ ɴᴇxᴛ",
            id: `next_${nextIndex + 1}`
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "sʜᴏᴡ 💜 ғᴏʀ ɢɪғᴛᴇᴅ",
            url: `https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l`
          })
        }
      ];

      const thumbnailUrl = currentResult.thumbnail;
      const msg = generateWAMessageFromContent(m.from, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: `*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n*Tittle:* ${currentResult.title}\n*Artist:* ${currentResult.author.name}\n*Views:* ${currentResult.views}\n*Duration:* ${currentResult.timestamp}\n*User:* *_${m.pushName}_,*\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url: thumbnailUrl } }, { upload: Matrix.waUploadToServer })),
                title: "",
                gifPlayback: true,
                subtitle: "",
                hasMediaAttachment: false 
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons
              }),
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: false,
              }
            }),
          },
        },
      }, {});
      await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      });
    } else if (selectedId.startsWith('media_')) {
            const parts = selectedId.split('_');
      const type = parts[1];
      const key = parseInt(parts[2]);
      const selectedMedia = searchResultsMap.get(key);

      if (selectedMedia) {
  try {
    const videoUrl = selectedMedia.url;

    // Fetch the audio URL from the API
    const apiResponse = await fetch(`https://api.prabath-md.tech/api/ytmp3?url=${encodeURIComponent(videoUrl)}`);
    const apiResult = await apiResponse.json();

    if (apiResult.status !== 'success ✅') {
      throw new Error('Failed to fetch audio URL');
    }

    const audioUrl = apiResult.data.download;
    let mimeType, content;

    if (type === 'audio') {
      mimeType = 'audio/mpeg';
      content = {
        audio: { url: audioUrl },
        mimetype: mimeType,
        caption: `NORMAL AUDIO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: false,
            title: selectedMedia.title,
            body: 'Powered by Gifted Tech',
            thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
            sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
      };
    } else if (type === 'video') {
      mimeType = 'video/mp4';
      content = {
        video: { url: audioUrl },
        mimetype: mimeType,
        caption: `\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: false,
            title: selectedMedia.title,
            body: 'Powered by Gifted Tech',
            thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
            sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
      };
    } else if (type === 'audiodoc' || type === 'videodoc') {
      mimeType = type === 'audiodoc' ? 'audio/mpeg' : 'video/mp4';
      content = {
        document: { url: audioUrl },
        mimetype: mimeType,
        fileName: `${selectedMedia.title}.${type === 'audiodoc' ? 'mp3' : 'mp4'}`,
        caption: `\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: false,
            title: selectedMedia.title,
            body: 'Powered by Gifted Tech',
            thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
            sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
      };
    }

    await Matrix.sendMessage(m.from, content, { quoted: m });
    m.reply(`Success...\nAudio: *${selectedMedia.title}* Downloaded`);
  } catch (error) {
          console.error("Error processing your request:", error);
          m.reply('Error processing your request.');
          await m.React("❌");
        }
      }
    }
  }
};
const getStreamBuffer = async (stream) => {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', err => reject(err));
  });
};

export default videocommand;
