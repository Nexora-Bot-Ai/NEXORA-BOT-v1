const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━〔 🧠 NEXORA-BOT 〕━━━⊷
┃ ✦ Developer : SOURAJIT
┃ ✦ Bot Name  : NEXORA-MD
┃ ✦ Version   : 2.0 META
┃ ✦ Mode      : ${global.typebot}
┃ ✦ Status    : Online ⚡
╰━━━━━━━━━━━━━━━━━━━━⊷

  『 SCROLL DOWN FOR COMMANDS 』

╭─❖〔 📁 GENERAL 〕
│ ✦ .menu / .help
│ ✦ .ping / .alive
│ ✦ .tts <text>
│ ✦ .owner
│ ✦ .joke / .quote / .fact
│ ✦ .weather <city>
│ ✦ .news
│ ✦ .lyrics <song>
│ ✦ .8ball <question>
│ ✦ .groupinfo / .admins
│ ✦ .vv / .jid / .url
│ ✦ .trt <text>
│ ✦ .ss <link>
╰────────────⊷

╭─❖〔 🛡️ ADMIN 〕
│ ✯ .ban / .kick @user
│ ✯ .promote / .demote
│ ✯ .mute / .unmute
│ ✯ .warn / .warnings
│ ✯ .antilink / .antibadword
│ ✯ .delete / .clear
│ ✯ .tag / .tagall / .hidetag
│ ✯ .resetlink
│ ✯ .welcome / .goodbye
│ ✯ .setgname / .setgdesc
│ ✯ .setgpp
╰────────────⊷

╭─❖〔 👑 OWNER 〕
│ ☠︎ .mode public/private
│ ☠︎ .update / .settings
│ ☠︎ .clearsession / .cleartmp
│ ☠︎ .antidelete
│ ☠︎ .autoreact / .autotyping
│ ☠︎ .autostatus / .autoread
│ ☠︎ .anticall
│ ☠︎ .pmblocker
│ ☠︎ .setpp
│ ☠︎ .mention on/off
╰────────────⊷

╭─❖〔 🎬 MEDIA & DL 〕
│ ⏣ .play / .song
│ ⏣ .ytmp3 / .ytmp4
│ ⏣ .spotify
│ ⏣ .instagram / .facebook
│ ⏣ .tiktok
│ ⏣ .video
╰────────────⊷

╭─❖〔 🧠 AI SYSTEM 〕
│ 🤖 .gpt
│ 🤖 .gemini
│ 🤖 .imagine
│ 🤖 .flux
│ 🤖 .sora
╰────────────⊷

╭─❖〔 🖼️ IMAGE & STICKER 〕
│ 🎨 .sticker / .simage
│ 🎨 .removebg / .remini
│ 🎨 .blur / .crop
│ 🎨 .meme
│ 🎨 .emojimix
│ 🎨 .take
╰────────────⊷

╭─❖〔 🎮 GAMES 〕
│ 🎯 .tictactoe
│ 🎯 .hangman
│ 🎯 .trivia
│ 🎯 .truth / .dare
╰────────────⊷

╭─❖〔 🎭 FUN 〕
│ 💞 .flirt / .compliment
│ 💔 .insult / .simp
│ 🎵 .shayari
│ 😴 .goodnight
│ 🌹 .roseday
│ 🎭 .ship / .character
╰────────────⊷

╭─❖〔 ✨ TEXT MAKER 〕
│ ⚡ .neon / .glitch
│ ⚡ .matrix / .hacker
│ ⚡ .fire / .ice
│ ⚡ .blackpink
│ ⚡ .1917
╰────────────⊷

╭─❖〔 🎌 ANIME 〕
│ 🐱 .neko / .waifu
│ 💕 .hug / .kiss
│ 😂 .cry / .wink
│ ✋ .pat / .poke
╰────────────⊷

╭─❖〔 🌐 GITHUB 〕
│ 💻 .git / .repo
│ 💻 .script / .sc
╰────────────⊷

╭━━━〔 📢 OFFICIAL CHANNEL 〕━━━⊷
┃ 🔗 https://whatsapp.com/channel/0029Vb8RbTUEwEjyRIgD8M34
╰━━━━━━━━━━━━━━━━━━━━⊷

╰━━━〔 ⚡ POWERED BY NEXORA 〕━━━⊷ :`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363426913092837@newsletter',
                        newsletterName: 'NEXORA-BOT 𝗨𝗣𝗗𝗔𝗧𝗘',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363426913092837@newsletter',
                        newsletterName: 'NEXORA BOT UPDATE',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
