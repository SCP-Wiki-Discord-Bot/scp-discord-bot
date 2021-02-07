const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scrape')
const rng = require('./functions/rng')
const outputs = require('./functions/outputs')

// notifies that the bot is ready to be used
client.on('ready', () => console.log('discord bot connected'))

client.on('message', (message) => {
  // parsing message commands
  const commands = message.content.split(' ')
  if (commands[0] === '!scp') {
    // checks for binding
    message.channel.send('SCP discord bot at your service, please type `!h` for help') // notifies users that the bot is here

    if (commands.length === 2 || commands.length === 3) {
      // making the command more flexible
      const mode = !commands[1] ? 'none' : commands[1]
      const outputMode = commands[2] || 'message'
      // default command === message output mode

      if (outputMode === 'message' || outputMode === 'audio' || outputMode === 'text') {
        if (mode === 'random') {
          // passes random number if random command called
          // after scraping, it returns value to the output function
          scrape(rng(), message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
        } else if (typeof (parseInt(mode)) === 'number') {
          // checks for the validity of the scp code
          scrape(mode, message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
        } else {
          // if not found, return an error to the user
          message.channel.send('error : invalid code or mode')
        }
      } else {
        // and if the output command is wrong, send and error to the user
        message.channel.send('error : invalid output mode')
      }
    }
  }
}
)

client.on('message', (message) => {
  if (message.content.trim() === '!h') {
    message.channel.send('HELP PAGE \n========== \nbot is bound to !scp\n> Specify a mode for getting your SCP `random` or an SCP number\n> Specify an output mode at the back of your command, either  `message` , `text`, or `audio`\n shorthand command `!s mode|number` will send messages by default ')
  }
})

// auth for the discord bot
client.login(process.env.TOKEN)
