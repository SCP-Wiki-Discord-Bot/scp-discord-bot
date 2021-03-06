const classes = {
  safe: {
    title: 'safe',
    explanation: 'Safe-class SCPs are anomalies that are easily and safely contained. This is often due to the fact that the Foundation has researched the SCP well enough that containment does not require significant resources or that the anomalies require a specific and conscious activation or trigger. Classifying an SCP as Safe, however, does not mean that handling or activating it does not pose a threat.',
    list: 'http://scp-wiki.wikidot.com/system:page-tags/tag/safe',
    imgSrc: 'https://stark-falls-54973.herokuapp.com/safe.png'
  },
  euclid: {
    title: 'euclid',
    explanation: `Euclid-class SCPs are anomalies that require more resources to contain completely or where containment isn't always reliable. Usually this is because the SCP is insufficiently understood or inherently unpredictable. Euclid is the Object Class with the greatest scope, and it's usually a safe bet that an SCP will be this class if it doesn't easily fall into any of the other standard Object Classes.
    As a note, any SCP that's autonomous, sentient and/or sapient is generally classified as Euclid, due to the inherent unpredictability of an object that can act or think on its own.`,
    list: 'http://scp-wiki.wikidot.com/system:page-tags/tag/euclid',
    imgSrc: 'https://stark-falls-54973.herokuapp.com/euclid.png'
  },
  keter: {
    title: 'keter',
    explanation: 'Keter-class SCPs are anomalies that are exceedingly difficult to contain consistently or reliably, with containment procedures often being extensive and complex. The Foundation often can\'t contain these SCPs well due to not having a solid understanding of the anomaly, or lacking the technology to properly contain or counter it. A Keter SCP does not mean the SCP is dangerous, just that it is simply very difficult or costly to contain.',
    list: 'http://scp-wiki.wikidot.com/system:page-tags/tag/keter',
    imgSrc: 'https://stark-falls-54973.herokuapp.com/keter.png'
  },
  thaumiel: {
    title: 'thaumiel',
    explanation: 'Thaumiel-class SCPs are anomalies that the Foundation specifically uses to contain other SCPs. Even the mere existence of Thaumiel-class objects is classified at the highest levels of the Foundation and their locations, functions, and current status are known to few Foundation personnel outside of the O5 Council.',
    list: 'https://stark-falls-54973.herokuapp.com/thaumiel.png'

  },
  neutralized: {
    title: 'neutralized',
    explanation: 'Neutralized SCPs are anomalies that are no longer anomalous, either through having been intentionally or accidentally destroyed, or disabled.',
    list: 'https://stark-falls-54973.herokuapp.com/neutralized.png'

  },
  explained: {
    title: 'explained',
    explanation: 'Explained SCPs are commonly articles about anomalies that are completely and fully understood to the point where their effects are now explainable by mainstream science or phenomena that have been debunked or falsely mistaken as an anomaly.',
    list: 'https://stark-falls-54973.herokuapp.com/explained.png'

  },
  esoteric: {
    title: 'esoteric/narrative',
    explanation: 'Esoteric Object Classes, also occasionally referred to as Narrative classes, are Object classes that do not fall into any of the above sections. They are generally only used once and are created to further the narrative in a particular SCP. It is highly recommended that SCPs use one of the standard Object Classes listed here. While some authors choose to introduce exceptions to these rules, they are only very rarely done and need to justify their existence and placement. Many site members will downvote for non-standard Object Classes if used without merit.',
    list: 'http://www.scpwiki.com/esoteric-classes-complete-list',
    imgSrc: 'https://stark-falls-54973.herokuapp.com/esoteric.png'
  }
}

// attention : classes thaumiel, neutralized and also explained dont have pics, have to fix this later

module.exports = classes
