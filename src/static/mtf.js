const generalInfo = {
  intro: `Mobile Task Forces (MTFs) are elite units comprised of personnel drawn from across the Foundation and are mobilized to deal with specific threats or situations that sometimes exceed the operational capacity or expertise of regular field personnel and — as their name suggests — may be relocated between facilities or locations as they are needed. Mobile Task Force personnel represent the "best of the best" of the Foundation.
    Mobile Task Forces vary greatly in size, composition, and purpose. A battalion-strength combat-oriented task force trained to deal with highly aggressive anomalous entities may consist of hundreds of troops plus support personnel, vehicles, and equipment and can be deployed in whole or in part to deal with threats across the globe. However, a Mobile Task Force can also be a small, specialized intelligence-gathering or investigative task force that may have fewer than a dozen personnel if that is deemed sufficient to accomplish their goals.
    While in the field, task force members often pose as emergency responders, local or federal law enforcement, or military personnel appropriate to the region in which they are operating. Mobile Task Force Commanders can also request the assistance of local field units or personnel stationed at nearby Foundation facilities in order to accomplish their missions.`,

  organisation: `Each unit is fundamentally structured in a way that best suits their intended purpose. While combat-oriented task forces may closely follow military hierarchy and organization, smaller units may have an informal or otherwise esoteric chain of command. As such, the responsibilities of the Mobile Task Force Commander (MTFC) for each particular task force can vary greatly; the commander for a large task force might focus on maintaining multiple teams and deploying them as necessary to each assigned operation, whereas the commander of a small team might deploy with their team and direct the operation from on location.
  Similarly, the cohesion of each unit will vary as well. Some Mobile Task Forces consist of personnel who have trained and worked for many years or even decades together, whereas the personnel of a Mobile Task Force formed on a moment's notice to deal with a specific incident may know little more than each others' names and fields of expertise.`,

  creation: 'Mobile Task Forces are typically commissioned as deemed necessary by the Foundation\'s Director of Task Forces, often with the direct approval of one or more O5 Council members. A significant number of Mobile Task Forces are created to deal with specific anomalies exhibiting traits that standard containment or response teams are unable to effectively counteract, though many were also created to pre-empt an emerging or theoretical threat.',

  deactivation: 'Mobile Task Forces created for the purpose of containing a particular anomaly are typically deactivated at the end of the recovery operation or when ongoing containment is deemed no longer necessary. Occasionally, such task forces remain operational if the expertise and experiences learned are considered useful for future incidents, but otherwise the task force will likely be disbanded and its personnel returned to their prior posts. Very rarely, a Mobile Task Force will also be disbanded if it suffers sufficient casualties to render it incapable of operation. In these cases, if the prior capability of that particular task force is deemed necessary, a new task force may be commissioned to replace it.'
}
// array of mtfs for ease of parsing
const mtfList = ['MTF Alpha-1 ("Red Right Hand")',
  'MTF Alpha-4 ("Pony Express")',
  'MTF Alpha-9 ("Last Hope")',
  'MTF Beta-4 ("Castaways")',
  'MTF Beta-7 ("Maz Hatters")',
  'MTF Gamma-5 ("Red Herrings")',
  'MTF Gamma-6 ("Deep Feeders")',
  'MTF Gamma-13 ("Asimov\'s Lawbringers")',
  'MTF Delta-5 ("Front Runners")',
  'MTF Epsilon-6 ("Village Idiots")',
  'MTF Epsilon-9 ("Fire Eaters")',
  'MTF Epsilon-11 ("Nine-Tailed Fox")',
  'MTF Zeta-9 ("Mole Rats")',
  'MTF Eta-4 ("Begone Thoth")',
  'MTF Eta-5 ("Jäeger Bombers")',
  'MTF Eta-10 ("See No Evil")',
  'MTF Eta-11 ("Savage Beasts")',
  'MTF Theta-4 ("Gardeners")',
  'MTF Theta-90 ("Angle Grinders")',
  'MTF Iota-10 ("Damn Feds")',
  'MTF Kappa-10 ("Skynet")',
  'MTF Lambda-4 ("Birdwatchers")',
  'MTF Lambda-5 ("White Rabbits")',
  'MTF Lambda-12 ("Pest Control")',
  'MTF Lambda-14 ("One Star Reviewers")',
  'MTF Mu-3 ("Highest Bidders")',
  'MTF Mu-4 ("Debuggers")',
  'MTF Mu-13 ("Ghostbusters")',
  'MTF Nu-7 ("Hammer Down")',
  'MTF Omicron Rho ("The Dream Team")',
  'MTF Pi-1 ("City Slickers")',
  'MTF Rho-1 ("The Professors")',
  'MTF Rho-9 ("Technical Support")',
  'MTF Rho-19 ("Cythereans")',
  'MTF Sigma-3 ("Bibliographers")',
  'MTF Sigma-66 ("Sixteen Tons")',
  'MTF Tau-5 ("Samsara")',
  'MTF Psi-7 ("Home Improvement")',
  'MTF Psi-8 ("The Silencers")',
  'MTF Omega-0 ("Ará Orún")',
  'MTF Omega-7 ("Pandora\'s Box")',
  'MTF Omega-12 ("Achilles\' Heels")',
  'MTF Stigma-9 ("Evolved from Naturally Occurring Gears, Levers and Pulleys")',
  'Additional MTFs'
]

module.exports = { generalInfo, mtfList }
