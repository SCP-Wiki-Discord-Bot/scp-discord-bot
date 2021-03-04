<h1 align="center"> 
  Scp Wiki Discord Bot
</h1>

<p align="center">
<img src="https://github.com/SCP-Wiki-Discord-Bot/scp-discord-bot-website/blob/main/static/favicon.svg" alt="logo" />
</p>

## Objective 
bring the SCP stories into discord servers

## Features
- provides the option to send SCPs in the form of `text files`, `audio files` or `discord messages` 
- use `!scp` command to get scps, `!scp random` | `!scp number_of_scp` *(you can now also search for SCP-J's as the SCP search function now allows for Alphabets to be typed in)*
- use `!h` to get help and guides
- use `!class` to get scp classifications and their info, `use !class name_of_class` to get individual classes
- use `!mtf` to get information about MTF and their names, `use *!mtf number_as_listed* ` to get the individual MTF
- use `!site info` to get a list of information about sites, `use !site info index_of_info` to get specified knowledge about the sites
- use `!site search` to get a list of SCP foundations sites, `use !site search site_number_as_listed` to get a specified site
- use `!area` to get a list of areas under the SCP foundation, use `area !site number_as_listed` to get a specified site and its description

## Member System 
- Uses a `mongodb database` to persist user data (`discord user ids`) 
- gives `100 coupons` by default to non-premium users
- every usage of `!scp` commands will cost users *5* coupons
- the user will automatically be registered if its `their first time using the !scp command`
- user data will be maintained over multiple servers

## Development Instructions
1. Create a discord bot at https://discord.com/developers/applications,
2. copy the bot token
3. clone the repo
4. export *TOKEN=your_bot_token* in your terminal
5. npm install
6. npm run dev

## TODO : New feature 
use `image scraper` package to get images of all SCPs incase it is not provided by the wiki

## Reminders 
- please use eslint to lint your code before comitting, you can use the *npm run lint* command
- be sure to comment your code with helpful messages and explinations to make sure other people can pick up where you left off
 
> author: Ronald Pang Vee Jen

> colaborator : Ryan
