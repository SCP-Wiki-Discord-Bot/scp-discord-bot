const messages = {
  help: `
  =========
  BASICS
  =========
  - provides the option to send SCPs in the form of \`text files\`, \`audio files\` or \`discord messages\` 

  - use \`!scp\` command to get scps, \`!scp random\` | \`!scp number_of_scp\`

  - use \`!h\` to get help and guides

  - use \`!class\` to get scp classifications and their info, \`use !class name_of_class\` to get individual classes

  - use \`!mtf\` to get information about MTF and their names, \`use *!mtf name_of_mtf* \` to get the individual MTF

  - use \`!site info\` to get a list of information about sites, \`use !site info index_of_info\` to get specified knowledge about the sites

  - use \`!site search\` to get a list of SCP foundations sites, \`use !site search site_number_as_listed\` to get a specified site
  
  - use \`!area\` to get a list of areas under the SCP foundation, use \`area !site number_as_listed\` to get a specified site and its description
  
  =============
  MEMBER SYSTEM
  =============

  - every person gets 100 coupons
  - every !scp command costs 5 coupons
  - don't need to worry about registration, we will do it automatically for you
  - if you run out of coupons, you need to wait a day and it will automatically refresh
  - premium users get 500 coupons rather than 100
  - voting our bot gives you 50 free coupons
  - your coupons count and premium status persists over all servers that our bot services

  `,
  ready: [
    'Yes sir, retrieving archives from ████████',
    'SCP bot activated, searching for top secret files stored in site-████',
    'Anything for you commander, downloading files at Ip ████████',
    'Noted, delivering requested files to user ████████'
  ]
}

module.exports = messages
