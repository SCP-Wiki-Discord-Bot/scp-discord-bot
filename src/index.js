const { ShardingManager } = require('discord.js')
const path = require('path')
const manager = new ShardingManager(path.join(__dirname, 'bot.js'), { token: process.env.TOKEN })

manager.on('shardCreate', (shard) => console.log(`launched Shard : ${shard.id}`))
manager.spawn()
