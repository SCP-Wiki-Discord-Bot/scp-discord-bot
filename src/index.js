const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scrape')
const rng = require('./functions/rng')
const outputs = require('./functions/outputs')
const suggest = require('./functions/suggestions')
const msg = require('./messages/index')
const sendClasses = require('./functions/send-classes')

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
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
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
    const embed = new Discord.MessageEmbed()
      .setTitle('HELP PAGE')
      .setDescription(msg.help)
    message.channel.send(embed)
  }
})

client.on('message', (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const mode = commands[1]
  if (binding === '!class') {
    const result = sendClasses(mode, message.channel)
    if (result === 'class not found') {
      message.channel.send(`error: ${result}`)
    }
  }
})

// auth for the discord bot
client.login(process.env.TOKEN)
