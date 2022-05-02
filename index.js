const Discord = require("discord.js"); //takes the discord.js package info and stores it in Discord variable

const TOKEN = "OTcwNDE1MzQ3NzE2OTg5MDI4.Gmrd9v.T1se-Mq_eqzUSZRZtDtSTNngMdc0X9dUyJy8Ao"; //variable to hold the bot token

const client = new Discord.Client({ //creates a bot client (used to access discord API) and passing through parameters so the bot watches for our desired info
    intents: [ "GUILDS", 
               "GUILD_MESSAGES" 
    ]
})

client.on("ready", () => { //event listener that will trigger a function when bot logs in successfully 
    console.log(`Logged in as ${client.user.tag}`) //prints out who logged in if successful 
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World")
    }
})

client.login(TOKEN)