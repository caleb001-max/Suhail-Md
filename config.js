const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_21_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLZFk0UHJkc3VydzU2RC8zNTVjbmpUSGthVVFzdTRlanFPZEp6QkVZUUJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFQ1c1eTlweVM4UzNYdk5yYUhSbHdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2Y2VkNDA3LWNkMTktNDE1YS04MGVjLWI1YWQ3Y2Q4N2Q4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDIyNSxcbiAgICAgIDI0MixcbiAgICAgIDUzLFxuICAgICAgMjUzLFxuICAgICAgMTI5LFxuICAgICAgNCxcbiAgICAgIDYxLFxuICAgICAgNDEsXG4gICAgICAxMyxcbiAgICAgIDk5LFxuICAgICAgMjksXG4gICAgICAxNTIsXG4gICAgICA1NyxcbiAgICAgIDE0LFxuICAgICAgMjI3LFxuICAgICAgMTIxLFxuICAgICAgMzYsXG4gICAgICAxNTEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAyMDQsXG4gICAgICAxODksXG4gICAgICA3MixcbiAgICAgIDEzNyxcbiAgICAgIDEyNyxcbiAgICAgIDE0MCxcbiAgICAgIDU3LFxuICAgICAgMjI0LFxuICAgICAgMTg4LFxuICAgICAgMjQzLFxuICAgICAgMTIyLFxuICAgICAgOTYsXG4gICAgICAyMTcsXG4gICAgICAyMjUsXG4gICAgICAxMTcsXG4gICAgICAxNzAsXG4gICAgICA3LFxuICAgICAgNjcsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlNLRkJWSzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzg5MzcwOTc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPTUVHQSA0OVwiLFxuICAgIFwibGlkXCI6IFwiMTcyNDc3ODAwMDM0NDQ5OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piOGl0b0hFS1NvMUxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGp6T09ZeWMvREVWejUvcVFKbHR0b2FaajV1VWwvemJwcWNaMnIrclFRRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZam5HdFRqaHJyeU1zdDZZc2w0eitDbkdZNVBGc01KN3duaEt3TGE3TmNxdWpxRXltQnFNOTlrcjYxY3p3WWQ0RXcvM2dHdUlZRk12MXd5VHFjSEZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGZUd5aFlaeElzeE83L3VEeU5hMmh1Z3RaK0p0OUZlUlFFWDdFKzJYUmlDT2xtT1ZLY0dMWkpWTFErOVd4ZVJuY3E5aHZrZ055aVdhdG8vczF5d3JBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4OTM3MDk3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNDYwNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzeC5qc29uIjogIntcImtleURhdGFcIjpcInJzekJ4TVdOYWQrR2dkeGF1OXBDQ1FodFprR2xPbFkwczNuMDY5c3R5UTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2Nzk3MTYwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDQ0NDU3NTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
