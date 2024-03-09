const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263718195399"  //263718195399
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'hebster09@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Zvishavane Zimbabwe'
global.gurl = 'https://instagram.com/itz_shaikho/' //EbSparco
global.sudo = process.env.SUDO || '263718195399' 
global.devs = '263718195399';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+263781599192
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJ0THZIcVRWbmFvRElKU3B0WkloOU84bVhOeWpiU0hzOHFNU3o2TTFHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick9OM2tWQitQVGgxdVczNU9RdnZONk12MDRDNWM2amgzbWZuekVEditqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySXFrQVNRNlEyWXlNSTFzM0dBSkU0cWhMZmNleU9RVmNRSHVVL3gzR0dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjM2syc3BhUTlvcTN6dURBOWpHQTdpTGR1cFpYd1lSQis1REphQUZDcnlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFKzdaVllxdTUrZG9kU3A2TDl0cUtNT3BjZUdqc1JHdEk3Sit2NU9WM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJqM09LaHZpa1dUMWEvcUNRQnZIdDlkOXQ0V2IyYVdjV0ZxZkFTSDlrQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N5MW1aRitFSldKNFVLMGtiQXhsWTdZcEpkOUdQR0lYUWdRZ016VzZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHAxTjNrbmdsMkNNbFB1MFFQUVNUU0NTaysycThNUnF0WFhicjh4ODZnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNkVThwM1p1NGdMVkUxVzhpZjJ5amNHTFFHVkRqanA2SjFyTjhBSEJLZDFIVEkxS1duMXZadURrZ1ptNEM4ejh3MmxQdE10cXlMQkRMRVQ4anN1RUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiI4Wnl5VlN2SjNncERFSmo1ZTdjSjZvSG9NTjRxU1dsTHlBVytENmJqcTFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtcmVuVUtmV1RKV1pieF95UlBKdXBnIiwicGhvbmVJZCI6ImE4YmZlNDA4LWZmYTQtNDFhNi05MmJiLTZlZGU2ZjM3ZjhiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R2JHUUJpdEJzUnZyYWR1RW1BVzZzeGpWbjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG9kenNjOXlOa1N0SlA1cndka3BJWE5PQ0pnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZLUjJWMzEyIiwibWUiOnsiaWQiOiIyNjM3MTgxOTUzOTk6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMb3ZlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbkhzYjhDRUxLWHM2OEdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5d2lBMEJEbHR3dDBXdk14Z2hidSs4QWg4YXVlYjZGRU5BK0hubVBFanlNPSIsImFjY291bnRTaWduYXR1cmUiOiJBelBQZW5yTTdVVXhaMXE3OTEwbDR0eE9HSHcyZ1p0eTVjRTNpS0FxOXMvUGdicWVHREorbURlU1JWMjR2WXVTUng3YnhiYW5oSmdTYTdyZUJXTlFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTUt4dXBCU0pSYXUxSDRNeU9FaXJXekh4aW1xejF3RytlNDRjdTYvRjlmRVVBcEhDcWtmOXZJcE91ZExZWnpHeWFHOVpMbTdvODlLSkhOb3JwMkt4QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTgxOTUzOTk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjc0lnTkFRNWJjTGRGcnpNWUlXN3Z2QUlmR3JubStoUkRRUGg1NWp4SThqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEwMDE3NDYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU1NiJ9",  //PUT Session Id Here, 
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
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'aff845e1-7513-44ce-ad88-b95debf06cfa' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'handredkk' : process.env.HEROKU_APP_NAME
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
