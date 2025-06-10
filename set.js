// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.sessionServer = "https://creds.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VUWbOiOBT+L3nVakFQlqpbNSyKKG4g12VqHgJEiLKZBBG7/O9TaN++/TDTc4enkKTO+c635DvIC0zRDDVA/Q5Kgq+QoXbJmhIBFejV8YgI6IIIMghUsHUC3kqJdLlNl46iLWXzgLCYdbiLHlAfdbRgA+UzzE4Z9wYeXVBWQYrD3xQ8Kzyb2gLSgoR3lU1ZHnbFhbM5Q2a5Yoy5jHpmknubWyK+gUdbEWKC83hUJihDBKYz1KwgJl+D39g6CsfzsX8NO5tL1TtfS0sKnGpB6GXl53F100LfNHTcD78GfzHSRit7kc1kul33N4frrCffZ+OhN2Gr7VjQg0g56E02lUbyCz7FcY4iO0I5w6z5Mu+WbXSq6KCM0KSu5WB5G3eUPZ5KGa/MdZLv1sh8n0/rSW8rfg14oyfD7LYz/WHRP2fv/lkIksI6Wz7vomyzl6vJIr2vHWPrFb8CX5EPr5z/D+/yyqENSk1pPL751eJ24u20lzireirPrOq2N9xJCJM6i3by1+BTSarus3y165V0mnHUG2rbHnV1KJRjwlxkLBK+c7QDsos/4UNWkd+hFEY1zpSjb3H19VQ7a+eSeDHMB/5w2iPepLM5Hg58rVk9SVNCtyn4bJIdHJdFtWduK5tyJDfEpn8OqCMvFk5xGV4bXL89Jzqjxo6Ayj+6gKAYU0Ygw0X+3BPkLoDR1UMhQexJL4hD4+qRsjy6qTzm6/fTxp8l5Sm9X24ZseTJSRL2pivixpi/gS4oSREiSlE0wZQVpJkjSmGMKFD//KsLcnRjL+HadgLfBUdMKPPzqkwLGH2o+nEIw7CocuY1eWi0C0SAyn1uI8ZwHtOWxyqHJEzwFRkJZBSoR5hS9HNCRFAEVEYq9DO1RhG1xLurvj7YO3PQBdlTEBwBFfQFYSCKotwXFVGV5D/ot7otC8vyW44Y6IL0dW3Acbwo8ZzIDwbcsL3ZHjx+ImwLRohBnFKgAmM27J9hbYycXVNQ27K0eawZsQY+J/qwxot6Ur57kRVyJYV+zdZ4LpjalC6a+44rYD9dc1Xm6zo0tLv99g9FgAqGC2YON6OAh7p7YnuSy++IHA66pTNx17PuVUfB3lKsLhSeOssBykOLjuwJ3ggsdNE9DieTEM6S5XI7doq+F+YinJnrt7ZbhK44RL82O6b7XTZF9Lh1Stns9+Smno6k9A7Pbj+sPd41z3eH39gDHPSkWhDOkY9PoqlJmEw7fCLl+jmFMU/KwW10nUMSHorVaf0y7TM06Y/HCj/t1GrV/h4xemY/h62C/63dC3hrMe7R/aXGj9fkXxKpw+G7n7v5YhZY6dzx7dOiro3ADCmvzCxW+gunTLX1No7nDXg8/uqCMoXsWJAMqADmESlwBLqAFFXrWTs/Fr9pZmixPYpfk6eQMu0zBxucIcpgVgKVl0RloAxFSXrdWpGinECaABXkmaAHracbrSw9BtlHqoDWfrYDweNvSH57CHEHAAA=", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by OP-BOT!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "233544482494", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "OP 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "OP 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "OP-TECH💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "OP-BOT", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Accra", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
