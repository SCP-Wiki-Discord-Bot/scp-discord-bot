const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scrape')
const rng = require('./functions/rng')
const outputs = require('./functions/outputs')

client.on('ready', () => console.log('discord bot connected'))

client.on('message', (message) => {
  const commands = message.content.split(' ')
  if (commands[0] === '!scp') {
    message.channel.send('SCP discord bot at your service, please type `!h` for help')

    if (commands.length === 2 || commands.length === 3) {
      const mode = !commands[1] ? 'none' : commands[1]
      const outputMode = commands[2] || 'message'

      if (outputMode === 'message' || outputMode === 'audio' || outputMode === 'text') {
        if (mode === 'random') {
          scrape(rng(), message.channel).then(({ title, text }) => outputs(title, text, outputMode, message.channel))
        } else if (typeof (parseInt(mode)) === 'number') {
          scrape(mode, message.channel).then(({ title, text }) => outputs(title, text, outputMode, message.channel))
        } else {
          message.channel.send('error : invalid code or mode')
        }
      } else {
        message.channel.send('error : invalid output mode')
      }
    }
  }
}
)

client.on('message', (message) => {
  if (message.content.trim() === '!h') {
    message.channel.send('HELP PAGE \n========== \nbot is bound to !s\n> Specify a mode for getting your SCP `random` or an SCP number\n> Specify an output mode at the back of your command, either  `message` , `text`, or `audio`\n shorthand command `!s mode|number` will send messages by default ')
  }
})

client.on('message', (message) => {
  if (message.content.trim() === '!i') {
    message.channel.send('picture', { embed: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&psig=AOvVaw0ynrW1F_847wsA7geNK_l4&ust=1612146130067000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiEz72Oxe4CFQAAAAAdAAAAABAD' })
  }
})

client.login(process.env.TOKEN)
