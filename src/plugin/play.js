import fetch from 'node-fetch';
import yts from 'yt-search';

const Play = async (m, Gifted) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();
  const validCommands = ['play2', 'song2', 'music2', 'ytadoc2', 'ytmp3doc2', 'sing3', 'dlsong2'];

  if (validCommands.includes(cmd)) {
    if (!text) {
      await m.reply(`Hello _*${m.pushName}*_ , Please provide the song name or YouTube URL, eg *.play2 Spectre by Alan Walker* or *.play2 https://www.youtube.com/watch?v=abc123*`);
      return;
    }

    try {
      await m.React('🕘');
      await m.reply(`A moment, *Gifted-Md* is Processing from GiftedAPi...`);

      let videoUrl = text;
      let videos = [];
      let fileInfo = {};

      // Check if the provided text is a valid YouTube URL
      const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
      const isUrl = urlPattern.test(text);

      if (!isUrl) {
        // Perform YouTube search to get the video URL
        const search = await yts(text);
        videos = search.videos;

        if (videos && videos.length > 0 && videos[0]) {
          videoUrl = videos[0].url;
        } else {
          await m.reply('No audios found.');
          return;
        }
      }

      // Call the API endpoint with the video URL
      const apiResponse = await fetch(`https://api.prabath-md.tech/api/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 'success ✅') {
        const audioUrl = apiResult.data.download;
        fileInfo = {
          title: apiResult.data.title,
          fileSize: apiResult.data.file_size,
          quality: apiResult.data.quality
        };

        let infoMess = {
          image: { url: isUrl ? 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg' : videos[0].thumbnail },
          caption: `*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n
╭───────────────◆
│⿻ *Title:* ${fileInfo.title}
│⿻ *File Size:* ${fileInfo.fileSize}
│⿻ *Quality:* ${fileInfo.quality}
${!isUrl ? `│⿻ *Duration:* ${videos[0].timestamp}` : ''}
${!isUrl ? `│⿻ *Viewers:* ${videos[0].views}` : ''}
${!isUrl ? `│⿻ *Uploaded:* ${videos[0].ago}` : ''}
${!isUrl ? `│⿻ *Artist:* ${videos[0].author.name}` : ''}
╰────────────────◆
⦿ *Direct Yt Link:* ${videoUrl}

╭────────────────◆
│ *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*
╰─────────────────◆`
        };
        
        await Gifted.sendMessage(m.from, infoMess, { quoted: m });

        // Send the normal audio file with additional caption and metadata
        await Gifted.sendMessage(m.from, {
          audio: { url: audioUrl },
          mimetype: 'audio/mp4',
          caption: `NORMAL AUDIO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: false,
              title: fileInfo.title,
              body: 'Powered by Gifted Tech',
              thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
              sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }, { quoted: m });

        // Send the document audio file with additional caption and metadata
        await Gifted.sendMessage(m.from, {
          document: { url: audioUrl },
          mimetype: 'audio/mp4',
          fileName: `${fileInfo.title}.mp4`,
          caption: `DOCUMENT AUDIO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: false,
              title: fileInfo.title,
              body: 'Powered by Gifted Tech',
              thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
              sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }, { quoted: m });

        console.log("Sending audio and document file completed!");

        await m.React('✅');
        await m.reply(`Download Success...\nSent All Audio Format For: *${fileInfo.title}*`);
      } else {
        await m.reply('Failed to download audio. Please try again later.');
      }
    } catch (error) {
      console.error('Error from Gifted API:', error);
      await Gifted.sendMessage(m.from, { text: "Failed with error from Gifted API. Please try again later." });
    }
  }
};

export default Play;
