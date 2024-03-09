const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263718195399"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'hebster09@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Zvishavane Zimbabwe'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '263718195399' 
global.devs = '263718195399';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU015QXIvOUVNcStTZEdyNGdOcXU2WnJ1aGdvVTN4K0xlZjRzUUdyN1pHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0MraU5MaERPME5wUGZuTnIzVnpjOVRtTjFVcFFKeHR3Z2QrQXdBZkpXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSmF2dmJXRW5YczFrZWdDR1lHK1Bwblh1ZVl2SUpPMUVlL3Nvd2FOaGxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4dHE4RVV1NUx2YTEvcFVpRUhiZGNEeHVOLzBlcHltREx2NVRrdlJCalhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPWFJ6cWFpOS8yZmJwVjhhdWI3UzFQdjh0Y3RhR0MwNDNDTU45ZFdQbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNveUVtQndjOFcxbDdrVFdtZTBjWG52UkhlWnJmNEo0RWljMUVxU2R2d2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FNT0ZmSUlvbVpDSmw2RVZVWFZEaWFmdVd0NEgxRy8vcTh1Vmw3N2hFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG95Y0xCejZGbnAvTXpyK0ZJTTA3WUZIOHF0ZUZuc2YwWjRyMTZlbkhUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNmYlRoSlFDYVNQeFdsTXlsKzJvaVMvNFhOOCtxbDR1ZXFleTduRURYbmV2M1dqYmVTeVUwVFl3aFc3dHRCY0ROcTc5cHcxQUtrdXlkR0F6cGdHTEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiI5N2JzN1lnT1NZekNKNHQ2ZTdhR3ZGekdhT0FJVjVTa3pueE9id3MwYVRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKTWpRNGlVLVJEaTNDQVdTV3p5cGlBIiwicGhvbmVJZCI6IjZlMzE1ZWY1LTIzMGUtNDBlOS05M2U1LTY4N2RkNWE1MWI1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTERSV21sNzM5UUo0RWdva0FDREZ5eVRlaHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmtEd1FPeFFTd1hsbFI1TlZ6b0NqbStmNXJBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZOSE1LN0dLIiwibWUiOnsiaWQiOiIyNjM3MTgxOTUzOTk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMb3ZlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbkhzYjhDRU5lZ3NhOEdHQXdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5d2lBMEJEbHR3dDBXdk14Z2hidSs4QWg4YXVlYjZGRU5BK0hubVBFanlNPSIsImFjY291bnRTaWduYXR1cmUiOiJ1RWIwcDA5MUwwTDd4OWpiT3I0WTlmMnYyTjNLMHRtdmNqL0h0eGZXM1N4WHM2S3NsbnNzWE51R05DeXZ2d1YrbUd0SngydEpnZldSTVpqNjF3OFBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2FDcjg3UHJYM0RERnVsUHNpY1pRMHpzS3FPamRiWEZCSzZCQkFrN3dQSG1QZ2FTTlQzODNtZVVxdnA0OE03bEIrWHRPbGxxQTYzNGpVYllaT0hXQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTgxOTUzOTk6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjc0lnTkFRNWJjTGRGcnpNWUlXN3Z2QUlmR3JubStoUkRRUGg1NWp4SThqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5OTg1ODgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU1NiJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'HandredThauzend',
  packname:  process.env.PACK_NAME || 'EbSparco',
   
  botname:   process.env.BOT_NAME === undefined ? "HandredThauzend" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'EbSparco' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi I am alive, contact my owner 263781599192' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
