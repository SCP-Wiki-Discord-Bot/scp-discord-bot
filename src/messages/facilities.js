const designations = 'Site\n======\nFoundation facilities designated as Sites are covert facilities, meaning that while existence of the facility is known to the public, such facilities are often disguised under government or corporate fronts. Sites are often built in locations in relatively close proximity to civilian populations, where facilities would require such cover.\n\nArea\n======\nFoundation facilities designated as Areas are clandestine facilities, meaning that civilians are not aware of their existence at all. Such facilities are often built far away from civilian populations and may contain highly dangerous anomalies; the vast majority of Areas have extreme fail-safe measures such as on-site nuclear warheads.'

const sections = 'Sector\n======\nSectors are sections of Sites or Areas that are designated for specific purposes, such as containment, research, or storage. The exact usage of Sectors vary from facility to facility and is dependent on the facility`s primary purpose and size.\n\nUnits\n======\nUnits are self-contained sections of Sites or Areas such as those containing Biological or Dimensional anomalies and are designed to self-seal in case of a breach or other catastrophic event. All personnel entering or exiting a Unit must typically undergo a full decontamination procedure.'

const prefixes = {
  armed: 'Armed denotes a facility or facility section with abnormally high physical security concerns, either due to containment of violent hostile entities or threat of outside attack. Such facilities typically have a large amount of military-grade weaponry and vehicles as well as a disproportionately large number of permanent security staff; in the case of a full facility, this typically entails a detachment of at least battalion or regiment strength.',
  biological: 'Biological containment facilities or facility sections deal with infectious or otherwise biohazardous anomalies and are both isolated and self-contained to prevent the possible escape of such anomalies.',
  containement: 'Containment facilities or facility sections are primarily equipped and intended for the containment of anomalous objects, entities, or phenomena.',
  dimensional: 'Dimensional containment facilities or facility sections deal with extradimensional apertures or anomalies exhibiting inconsistent or warped spacetime.',
  humanoid: 'Humanoid containment facilities or facility sections primarily deal with sentient, sapient human or near-human entities capable of understanding and complying with instructions. These are essentially analogous to a prison facility for anomalous entities.',
  protected: 'Protected facilities and facility sections are "safe zones" kept free of anomalous influence. No anomalies are allowed within these facilities at any time.',
  provisional: 'Provisional facilities are those that are established or built around an immobile anomaly. Provisional facilities typically contain only a single anomaly.',
  reliquary: 'Reliquary facilities or facility sections are designed for handling artifacts and objects of religious or historical significance.',
  research: 'Research facilities or facility sections are designed for either the handling and study of anomalies or anomalous materials or research and development of new containment schemes and methods.',
  storage: 'Storage facilities or facility sections are intended for long-term storage of non-anomalous or inert anomalous objects with no risk of autonomous interaction.',
  observation: 'Observation Posts are tiny facilities established in a multitude of locations worldwide. Often limited to small standalone buildings or single units within larger buildings, Observation Posts are typically used to monitor regional communications for flagged content, as well as monitor nearby Foundation facilities. Many Observation Posts are also used as secure communications hubs or safe-houses by undercover Foundation agents.'
}

const sites = [
  {
    title: 'Site-01 (Protected Site-01, Overwatch HQ)',
    content: 'Site-01 is a safe zone that acts as a data backup for all major Foundation facilities worldwide as well as a secure meeting facility for O5 Council members and other high-ranking Foundation personnel. As with all Protected Sites, no anomalies of any kind are allowed in proximity of Site-01. The location of Site-01 is strictly classified.'
  },
  {
    title: 'Site-06-3 (Humanoid Containment Site-06-3)',
    content: 'Site-06-3 is a containment facility that is currently located in the Lorraine region of France. Formerly located in the United States (Site-06) and Germany (Site-06-2), this facility was moved to its current location following the decommission and demolition of the aforementioned previous facilities. Site-06-3 employs a multi-national staff and houses numerous low-risk human and humanoid entities, most notably several former Foundation personnel. Objects contained at this facility include: SCP-069, SCP-706, SCP-1669, SCP-1702'
  },
  {
    title: 'Site-11',
    content: 'Site-11 is a large-scale Foundation facility located in the mid-western United States consisting of an entire self-sustaining community including residential housing, commercial businesses, and industrial/manufacturing facilities as well as an extensive underground containment and research complex. The Foundation maintains strict tracking of all personnel and civilians within Site-11 and as such, the facility is often used as a safe location for personnel requiring additional security and protection. Objects contained at this facility include: SCP-986, SCP-4332'
  },
  {
    title: 'Site-15',
    content: 'Site-15 is a Foundation facility located on the United States west coast that specializes in the containment and study of electric, electronic, and computer-based anomalies. The primary storage and containment wings of Site-15 are electromagnetically isolated to prevent any interaction between anomalous electronics and the outside world. Objects contained at this facility include: SCP-079, SCP-719, SCP-896'
  },
  {
    title: 'Site-17',
    content: 'Site-17 is a major Foundation facility primarily focused on the containment and study of low-risk humanoid entities. As per this focus, Site-17\'s permanent site staff includes a large number of medical and psychiatric professionals. Objects contained at this facility include: SCP-073, SCP-105, SCP-343'
  },
  {
    title: 'Site-19',
    content: 'Site-19 is the largest Foundation facility currently in operation, housing hundreds of Safe- and Euclid-class anomalies. Objects contained at this facility include: SCP-055, SCP-131, SCP-173, SCP-387, SCP-668, SCP-931'
  },
  {
    title: 'Site-23',
    content: 'Site-23 houses a number of metamorphic or transfiguring biological objects and entities. Objects contained at this facility include: SCP-038, SCP-113'
  },
  {
    title: 'Site-28 (Provisional Containment Site-28)',
    content: 'Site-28 is located in the SoHo neighborhood of New York City, New York, United States, and was initially established to contain SCP-602. Since then, this facility has been expanded into a full-fledged Foundation containment facility specializing in anomalous artwork and artifacts. Objects contained at this facility also include: SCP-1229, SCP-1388'
  },
  {
    title: 'Site-36',
    content: 'Formerly Provisional Site-36, this facility is located in India and serves as both a regional containment site as well as a support facility for field personnel operating in the area. Objects contained at this facility include: SCP-089, SCP-1135'
  },
  {
    title: 'Site-38',
    content: 'Site-38 is a containment site in rural Tennessee, United States, primarily focused on the study of Group of Interest 388-Alpha, "Alexylva University". Objects contained at this facility include: SCP-961, SCP-1080, SCP-1893, SCP-1082'
  },
  {
    title: 'Site-43 (Research and Containment Site-43)',
    content: 'Site-43 is situated on the southeastern shore of Lake Huron, one kilometre below sea level in Ipperwash Provincial Park, Ontario, Canada. It comprises containment wings for low- to medium-risk anomalies, research divisions arranged in a pseudoacademic structure, and abatement refineries for esoteric substances. Objects contained at this facility include: SCP-5056, SCP-5109, SCP-5243, SCP-5382, SCP-5494 and SCP-5520.'
  },
  {
    title: 'Site-45 (Research Site-45)',
    content: 'Site-45 is a clandestine armed research facility located off the coast of Western Australia under the Indian Ocean. Here, research and temporary containment of anomalous objects are conducted under guard and away from a civilian populace. Site-45 also serves as a staging point for MTF operations within the Pacific and Indian Oceans. Objects located at the facility include: SCP-321, SCP-2401, SCP-466, SCP-127, SCP-2424, and SCP-1577'
  },
  {
    title: 'Site-54 (Integrated Containment Site-54)',
    content: 'Site-54 is a containment facility located in, around, and beneath the city of Leipzig, Germany. Specialising in the containment of those anomalies deemed \'partially uncontainable\', the Site\'s staff are heavily armed, highly trained, and permanently on edge. Featuring an extensive rapid-response vehicle hangar (with transport both normal and anomalous) and wide array of holding cells, Site-54 is generally considered to be the Foundation site both best-prepared for the worst to happen, and the location at which said worst is most likely to occur. Objects currently under the facility\'s jurisdiction include: SCP-265, SCP-1911, SCP-2668, SCP-2790, SCP-2856, SCP-3663, and SCP-4856.'
  },
  {
    title: 'Site-56',
    content: 'Established in the Black Rock Desert of Nevada, May 1972, Site-56 was intended to serve as the base of operations for the enactment of the Kraken Protocol within the American Southwest. Over time, Site-56 took on increasing responsibilities, eventually transitioning into a full-fledged containment and administration site; however, recent Overwatch audits suggest its expansion has surpassed its budgetary and logistical limitations, and personnel frequently cite its "labyrinthine" structure as a detriment to day-to-day operations. Objects contained on-site include SCP-4495 and SCP-5444, with select offsite anomalies such as SCP-5994 falling under its jurisdiction as well.'
  },
  {
    title: 'Site-62 (Dimensional Site-62)',
    content: 'Formerly Provisional Site-62, this facility was initially built around SCP-004. The facility was eventually expanded to house other objects including SCP-579.'
  },
  {
    title: 'Site-64 (Storage Site-64)',
    content: 'Located approximately 0.5 km below Forest Park, northwest of Portland, Oregon, Site-64 is primarily a low to medium security storage facility, and is mainly used to house minor anomalous items, and Safe/Euclid class objects confiscated from the anomalous art community and anomalous electronics industry based in Portland and Vancouver. Objects located at this facility include: SCP-2106, SCP-2306, SCP-2608, SCP-2806, and SCP-2960.'
  },
  {
    title: ' Site-66 (Biological Containment Site-66, Bio-Site-66)',
    content: 'Originally built as Provisional Site-66 around SCP-1479, this facility was eventually expanded to contain and research biological and organic anomalies. Objects contained at this facility include: SCP-478, SCP-569, SCP-646, SCP-806, SCP-886'
  },
  {
    title: 'Site-73',
    content: 'Site-73 is a facility converted from an office building in Texas, designed for the containment and study of inert, Safe-class, or otherwise benign anomalous objects. Objects contained at this facility include: SCP-1454, SCP-1156, SCP-1176, SCP-1520'
  },
  {
    title: 'Site-76 (Research, Reliquary, and Containment Site-76)',
    content: 'Site-76 is a major containment site located in the United States and housing a large number of anomalous objects presumed to be man-made. Objects contained at this facility include: SCP-140, SCP-1883'
  },
  {
    title: 'Site-77 (Storage Site-77)',
    content: 'One of the Foundation\'s largest storage facilities, Site-77 was initially built in 1924 in southern Italy and served as an Italian facility until the second World War, when it was damaged by Allied bombing and subsequently destroyed by a containment breach. Site-77 was taken over by the Foundation and rebuilt in 1944. Objects currently contained at this facility include: SCP-703, SCP-1837, SCP-2322'
  },
  {
    title: 'Site-81 (Research and Containment Site-81)',
    content: 'Located beneath Lake Monroe in Bloomington, Indiana, Site-81 is the primary hub for anomalous activity in the United States Midwest. Initially founded as an expeditionary site to monitor SCP-2812, Site-81 has since grown to become one of the largest sites in the region. Located within is the Foundation\'s Classifications Department, as well as a massive Mobile Task Force deployment outpost. Objects contained at this site include: SCP-715, SCP-2080, SCP-2151, SCP-2270, SCP-2445, SCP-2496, SCP-2540, SCP-2564, SCP-2996.'
  },
  {
    title: 'Site-87 (Research Site-87)',
    content: 'Site-87 is a research site, established in September 1976 to oversee containment of a minor anomaly in the town of Sloth\'s Pit, Wisconsin, USA (pop. 17,291 as of 2020). In that same month, researchers discovered that Sloth\'s Pit was a highly active Nexus, an inhabited zone that has a high concentration of anomalous phenomena. Site-87\'s civilian front is S & C Plastics, and it possesses its own Task Force— Sigma-10, "The Sloth\'s Arm", dedicated to containment of anomalies within city limits. Citizens of Sloth\'s Pit are considered E-Class Personnel, and have knowledge of the Foundation insofar as \'a research organization is monitoring the town\'. The primary goal of Site-87 is to research and catalog anomalies in Sloth\'s Pit, such as SCP-4040; however, it is also the headquarters of the Department of Multi-Universal Affairs, Nexological Studies, and serves as regional command for the Midwestern United States. A catalog of incidents that have taken place at Site-87 and within the Sloth\'s Pit Nexus zone can be found here.'
  },
  {
    title: 'Site-88 (Humanoid Containment Site-88)',
    content: 'Humanoid Containment Site-88 is located in central Baldwin County, Alabama. The site houses many humanoid SCP objects, along with several high value anomalous items. While research is not a primary focus of the site, the site has the capacity for, and has seen many research projects related to its occupants. Objects contained at this site include: SCP-245, SCP-1774, SCP-1868, SCP-2065, SCP-2067, SCP-2251, SCP-2725, SCP-2343, SCP-2632, SCP-2714, SCP-2968, SCP-2987'
  },
  {
    title: 'Site-91 (Xenobiological Research and Containment Site-91)',
    content: 'Established as Provisional Site-91 in 1986 shortly after the discovery of SCP-4612, the site was fully commissioned by Overwatch command the following year. Site-91 was originally adapted from its previous use to contain SCP-4612 (which was found in the substructure below the manor), but was expanded to a full containment facility, research lab and library. The site is located upon the grounds of a manor commonly known as Eckhart House; located in Yorkshire, England. The site\'s research focus is the containment and analysis of xenobiological specimens, with a secondary focus of the development of thaumaturgical countermeasures and containment of thaumaturgical artifacts. Serves as the primary station for MTF-Beta-777 (“Hecate’s Spear”) due to their familiarity and expertise in thaumaturgical analysis. Objects contained at this facility include: SCP-3743, SCP-4612, SCP-4712, SCP-5079, SCP-5512, and SCP-5612.'
  },
  {
    title: 'Site-95 (Biological Research and Containment Site-95, Bio-Site-95)',
    content: 'Site-95 is a small but well equipped site used to contain and research biological and organic anomalies. Objects contained at this facility include: SCP-1077, SCP-1160, and SCP-3117'
  },
  {
    title: 'Site-98 (Dimensional Research Site-98)',
    content: 'Site-98 serves as the forefront of Foundation technology. Stationed in the city of Philadelphia, Site-98 is responsible for the bleeding-edge technological developments and innovations that help the Foundation contain, analyze, and research the various anomalous threats that endanger the world. Site-98 is often considered as the most technologically-advanced research facility in the Foundation. Objects currently documented in this site include: SCP-179, SCP-1152, SCP-1287, SCP-2009, SCP-2115, SCP-2703, SCP-2716, SCP-4156, SCP-4192, SCP-4366, SCP-4797, and SCP-4880.'
  },
  {
    title: 'Site-103 (Biological Containment Site-103)',
    content: 'Site-103 has extensive facilities for the containment and research of plant and plant-based anomalies. Objects contained at this facility include: SCP-757, SCP-822, SCP-1001'
  },
  {
    title: 'Site-111 (Industrial Research Site-111)',
    content: 'Site-111 is located underground beneath Captain\'s Mountain in southern Queensland, Australia. Its primary focus is anomalous materials and technology. The location of Site-111 is intended to strengthen the Foundation\'s presence in eastern Australia, where anomalies have been discovered and contained before. Although the Site does have the ability to house contained anomalies, there are none yet housed there.'
  }
]

/* {
  title: '',
  content: ''
}
*/
module.exports = { designations, sections, prefixes, sites }
