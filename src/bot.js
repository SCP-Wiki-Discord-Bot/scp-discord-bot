const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scp/scrape')
const rng = require('./functions/scp/rng')
const outputs = require('./functions/scp/outputs')
const suggest = require('./functions/suggestions')
const msg = require('./static/index')
const sendClasses = require('./functions/classes/send-classes')
const scrapeMtf = require('./functions/mtf/scrape-mtf')
const sendMtf = require('./functions/mtf/send-mtf')
const { mtfList } = require('./static/mtf')
const sendSite = require('./functions/sites/send-site')
const sendArea = require('./functions/areas/send-area')
const mongoose = require('mongoose')
const User = require('./db/userModel')
const autoReg = require('./db/auto-reg')
const manualReg = require('./db/manual-reg')
const profileCreator = require('./db/profile-creator')
const clearUser = require('./db/[dev]clear-users')
const findAllUsers = require('./db/[dev]all-users')

// notifies that the bot is ready to be used - Dev Console
client.on('ready', async () => {
  console.log('discord bot connected')
  client.user.setActivity('!h for help', { type: 'LISTENING' })
  // mongoose connection
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useNewUrlParser', true)

  await mongoose.connect(process.env.MONGO_URI + '/scp-discord-bot-users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb database connected'))
    .catch(e => console.log((e)))

  // reset coupons every one day
  setInterval(async () => {
    await User.updateMany({ premium: false }, { coupons: 100 })
  }, 86400000) // one day
  setInterval(async () => {
    await User.updateMany({ premium: true }, { coupons: 500 })
  }, 86400000)
})

/* SCP FUNCTION */
client.on('message', async (message) => {
  // parsing message commands
  const commands = message.content.toLowerCase().split(' ')
  const binding = commands[0] // must be !scp
  const mode = commands[1]// must be `random` a number or `suggest`
  const outputMode = commands[2] || 'message'

  // checking key binding
  if (binding.toLowerCase() === '!scp') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])

    let userCoupons = 0
    await autoReg(message).then(coupons => {
      userCoupons = coupons
    })

    // check for number of coupons
    if (userCoupons > 0) {
      // check for modes
      if (mode.toLowerCase() === 'random') {
      // checking output mode
        if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
          scrape(rng(), message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc, message.author.id))
        } else {
          message.channel.send('error : invalid output mode')
        }
      } else if (mode.toLowerCase() === 'suggest') {
        suggest(message.channel)
      } else if (mode) {
      // checking output mode
        if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
          scrape(mode, message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc, message.author.id))
        } else {
          return message.channel.send('error : invalid output mode')
        }
      } else {
        return message.channel.send('error : invalid scp selection mode')
      }
    }
  }
})

/* HELP FUNCTION */
client.on('message', async (message) => {
  if (message.content.trim().toLowerCase() === '!h' || message.content.trim().toLowerCase() === '!help') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    const embed = new Discord.MessageEmbed()
      .setTitle('HELP PAGE')
      .setDescription(msg.help)
    message.channel.send(embed)
  }
})

/* SCP CLASSIFICATION FUNCTION */
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const mode = commands[1] || 'list'

  if (binding.toLowerCase() === '!class') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    const result = sendClasses(mode, message.channel)
    if (result === 'class not found') {
      message.channel.send(`error: ${result}`)
    }
  }
})

/* MOBILE TASK FORCE FUNCTION */
client.on('message', async (message) => {
  const binding = message.content.substr(0, 4)
  const mode = message.content.substr(4, message.content.length - 1).trim() || 'list'

  if (binding.toLowerCase() === '!mtf') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    if (mode === 'list') {
      const embed = new Discord.MessageEmbed()
        .setTitle('List of MTF')
      let description = ''
      mtfList.forEach(mtf => {
        description += `[${mtfList.indexOf(mtf)}] `
        description += mtf
        description += '\n'
      })
      description += 'Please type `!mtf number_of_mtf`'
      embed.setDescription(description)
      message.channel.send(embed)
    } else {
      scrapeMtf(message.channel).then((result) => {
        sendMtf(result, mode, message.channel)
      })
    }
  }
})

/* SCP FOUNDATION SITES FUNCTION */
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const feature = commands[1]
  const mode = commands[2] || 'list'

  if (binding.toLowerCase() === '!site') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    if (feature === 'info') {
      sendSite('info', mode, message.channel)
    } else if (feature === 'search') {
      sendSite('search', mode, message.channel)
    } else {
      message.channel.send('keyswords for this command are `info`, `search`')
    }
  }
})

/* SCP FOUNDATION AREAS FUNCTION */
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const mode = commands[1] || 'list'

  if (binding.toLowerCase() === '!area') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    sendArea(mode, message.channel)
  }
})

// profile command
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]

  if (binding.toLowerCase() === '!profile') {
    // make embed containing user profile store in database
    await profileCreator(message)
  }
})

client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]

  if (binding.toLowerCase() === '!register') {
    await manualReg(message)
  }
})

// Ping command
client.on('message', async (message) => {
  const binding = message.content.split(' ')[0]
  if (binding.toLowerCase() === '!ping') {
    const msg = await message.channel.send('Pinging...')
    const Embed = new Discord.MessageEmbed()
      .setTitle('Pong!')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
      .setDescription(
          `⌛ Latency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`
      )
      .setColor('#fb644c')
    msg.edit(Embed)
    msg.edit('\u200b')
  }
})

client.on('message', async (message) => {
  const binding = message.content.split(' ')[0]
  if (binding.toLowerCase() === '!stats') {
    const embed = new Discord.MessageEmbed()
      .setTitle(`SCP Bot Serving in ${client.guilds.cache.size} servers worldwide 🌎`)
    message.channel.send(embed)
  }
})

/* dev function check users */
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]

  if (binding === '!users') {
    await findAllUsers(message)
  }
})

/* dev function delete all users */
client.on('message', async (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]

  if (binding === '!clear') {
    await clearUser(message)
  }
})

// auth for the discord bot
client.login(process.env.TOKEN)
