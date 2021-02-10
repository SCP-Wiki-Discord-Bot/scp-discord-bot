const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scrape')
const rng = require('./functions/rng')
const outputs = require('./functions/outputs')
const suggest = require('./functions/suggestions')

// notifies that the bot is ready to be used
client.on('ready', () => console.log('discord bot connected'))

client.on('message', (message) => {
  // parsing message commands
  const commands = message.content.toLowerCase().split(' ')
  const binding = commands[0] // must be !scp
  const mode = commands[1] // must be `random` a number or `suggest`
  const outputMode = commands[2] || 'message'

  // checking key binding
  if (binding === '!scp') {
    // check for modes
    if (mode === 'random') {
      // checking output mode
      if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
        scrape(rng(), message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
      } else {
        message.channel.send('error : invalid output mode')
      }
    } else if (isNaN(mode) === false) {
      // checking output mode
      if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
        scrape(mode, message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
      } else {
        message.channel.send('error : invalid output mode')
      }
    } else if (mode === 'suggest') {
      suggest(message.channel)
    } else {
      message.channel.send('error : invalid scp selection mode')
    }
  }
})

client.on('message', (message) => {
  if (message.content.trim() === '!h') {
    message.channel.send('HELP PAGE \n========== \nbot is bound to !scp\n> Specify a mode for getting your SCP `random` or an SCP number\n> Specify an output mode at the back of your command, either  `message` , `text`, or `audio`\n shorthand command `!s mode|number` will send messages by default ')
  }
})

// auth for the discord bot
client.login(process.env.TOKEN)
