const messages = {
  help: `
           HELP PAGE \n
           ==========\n
           bot is bound to !scp\n
           Specify a mode for getting your SCP \`random\` or an SCP number\n
           Specify an output mode at the back of your command, either  \`message\` , \`text\`, or \`audio\`\n shorthand command \`!s mode|number\` will send messages by default\n
           type !scp suggest to get suggestions and featured scps from the wiki
           `,
  ready: [
    'thank you for using scp wiki bot',
    'tip: if you need help you can use the !h command',
    'scp bot ready to serve you',
    'your patience is very much appreciated'
  ]
}

module.exports = messages
