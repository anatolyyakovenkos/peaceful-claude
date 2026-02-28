const sections = {
  overview: [
    { type: 'prompt', text: '~ peaceful-claude --overview' },
    { type: 'empty' },
    { type: 'heading', text: 'WEAPONS AND ACCOUNTABILITY: A HISTORICAL RECORD' },
    { type: 'empty' },
    { type: 'body', text: 'This terminal documents historically verified instances where' },
    { type: 'body', text: 'United States weapons programs caused civilian harm or violated' },
    { type: 'body', text: 'international humanitarian law. All entries are sourced from' },
    { type: 'body', text: 'declassified government documents, congressional testimony,' },
    { type: 'body', text: 'international court rulings, and investigative journalism.' },
    { type: 'empty' },
    { type: 'sub', text: 'PURPOSE' },
    { type: 'body', text: 'Accountability requires memory. Peace requires truth.' },
    { type: 'body', text: 'This project exists not to condemn a nation, but to honor' },
    { type: 'body', text: 'the principle that no power is above scrutiny, and no' },
    { type: 'body', text: 'civilian death should be forgotten or dismissed as' },
    { type: 'body', text: 'collateral damage.' },
    { type: 'empty' },
    { type: 'sub', text: 'SECTIONS' },
    { type: 'command', text: 'agent-orange ........ Chemical warfare in Vietnam' },
    { type: 'command', text: 'drone-strikes ....... Extrajudicial killings via drones' },
    { type: 'command', text: 'nuclear ............. Atomic bombings and testing fallout' },
    { type: 'command', text: 'depleted-uranium .... Radioactive munitions in Iraq' },
    { type: 'command', text: 'cluster-munitions ... Indiscriminate area-denial weapons' },
    { type: 'command', text: 'white-phosphorus .... Incendiary use in populated areas' },
    { type: 'command', text: 'landmines ........... Unexploded ordnance legacy' },
    { type: 'empty' },
    { type: 'source', text: 'Navigate using the sidebar or type a topic name below.' },
  ],

  'agent-orange': [
    { type: 'prompt', text: '~ peaceful-claude --agent-orange' },
    { type: 'empty' },
    { type: 'heading', text: 'OPERATION RANCH HAND: AGENT ORANGE IN VIETNAM' },
    { type: 'empty' },
    { type: 'sub', text: 'TIMELINE' },
    { type: 'body', text: '1962-1971: The U.S. military sprayed approximately 20 million' },
    { type: 'body', text: 'gallons of herbicides over Vietnam, Laos, and Cambodia as' },
    { type: 'body', text: 'part of Operation Ranch Hand. The most widely used agent was' },
    { type: 'body', text: 'Agent Orange, which contained the toxic contaminant dioxin' },
    { type: 'body', text: '(TCDD), one of the most poisonous substances known.' },
    { type: 'empty' },
    { type: 'sub', text: 'HUMAN COST' },
    { type: 'stat', text: '-- 3 million+ Vietnamese people exposed' },
    { type: 'stat', text: '-- 150,000+ children born with birth defects attributed to dioxin' },
    { type: 'stat', text: '-- Multiple generations affected through epigenetic damage' },
    { type: 'stat', text: '-- Cancers, neurological disorders, and immune deficiencies' },
    { type: 'stat', text: '   persist among exposed populations to this day' },
    { type: 'empty' },
    { type: 'sub', text: 'U.S. VETERANS' },
    { type: 'body', text: 'American service members were also devastated. The VA has' },
    { type: 'body', text: 'recognized 14 diseases linked to Agent Orange exposure.' },
    { type: 'body', text: 'Hundreds of thousands of U.S. veterans filed claims.' },
    { type: 'empty' },
    { type: 'sub', text: 'ACCOUNTABILITY' },
    { type: 'body', text: 'Internal Dow Chemical memos from 1965 show the company knew' },
    { type: 'body', text: 'dioxin was extraordinarily toxic. The U.S. government was' },
    { type: 'body', text: 'warned but continued spraying for six more years.' },
    { type: 'body', text: 'Vietnam has received limited remediation aid. No formal' },
    { type: 'body', text: 'reparations have been made to Vietnamese victims.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: Stellman et al. (Nature, 2003), VA.gov, Red Cross Vietnam' },
  ],

  'drone-strikes': [
    { type: 'prompt', text: '~ peaceful-claude --drone-program' },
    { type: 'empty' },
    { type: 'heading', text: 'THE U.S. DRONE WARFARE PROGRAM' },
    { type: 'empty' },
    { type: 'sub', text: 'OVERVIEW' },
    { type: 'body', text: 'Since 2001, the U.S. has conducted thousands of drone strikes' },
    { type: 'body', text: 'across at least seven countries: Afghanistan, Pakistan, Yemen,' },
    { type: 'body', text: 'Somalia, Iraq, Syria, and Libya. Many strikes were carried' },
    { type: 'body', text: 'out under classified "signature strike" rules, targeting' },
    { type: 'body', text: 'individuals based on behavioral patterns rather than' },
    { type: 'body', text: 'confirmed identity.' },
    { type: 'empty' },
    { type: 'sub', text: 'CIVILIAN TOLL' },
    { type: 'stat', text: '-- Bureau of Investigative Journalism estimates 8,858-16,901' },
    { type: 'stat', text: '   total deaths from U.S. drone strikes (2001-2020)' },
    { type: 'stat', text: '-- Of those, 910-2,200 were confirmed civilians' },
    { type: 'stat', text: '-- 283-454 of the confirmed civilians were children' },
    { type: 'empty' },
    { type: 'sub', text: 'NOTABLE INCIDENTS' },
    { type: 'body', text: 'Sep 2012: A U.S. drone struck a vehicle in Yemen, killing' },
    { type: 'body', text: '12 civilians including 3 children, in what officials later' },
    { type: 'body', text: 'admitted was a case of mistaken identity.' },
    { type: 'empty' },
    { type: 'body', text: 'Aug 2021: A drone strike in Kabul killed 10 members of the' },
    { type: 'body', text: 'Ahmadi family, including 7 children. The Pentagon initially' },
    { type: 'body', text: 'called it a "righteous strike" before admitting the target' },
    { type: 'body', text: 'was an aid worker, not a combatant. No one was disciplined.' },
    { type: 'empty' },
    { type: 'sub', text: 'LEGAL CONCERNS' },
    { type: 'body', text: 'The UN Special Rapporteur on extrajudicial killings has' },
    { type: 'body', text: 'repeatedly stated that many U.S. drone strikes violate' },
    { type: 'body', text: 'international law, as they occur outside recognized armed' },
    { type: 'body', text: 'conflict zones and without due process.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: Bureau of Investigative Journalism, NYT "The Drone Papers", UN OHCHR' },
  ],

  nuclear: [
    { type: 'prompt', text: '~ peaceful-claude --nuclear' },
    { type: 'empty' },
    { type: 'heading', text: 'NUCLEAR WEAPONS: BOMBINGS AND TESTING' },
    { type: 'empty' },
    { type: 'sub', text: 'HIROSHIMA AND NAGASAKI (1945)' },
    { type: 'body', text: 'The United States remains the only country to have used' },
    { type: 'body', text: 'nuclear weapons in armed conflict.' },
    { type: 'empty' },
    { type: 'stat', text: '-- Hiroshima (Aug 6): ~80,000 killed instantly,' },
    { type: 'stat', text: '   ~60,000 more dead by year end from radiation' },
    { type: 'stat', text: '-- Nagasaki (Aug 9): ~40,000 killed instantly,' },
    { type: 'stat', text: '   ~30,000 more dead by year end' },
    { type: 'stat', text: '-- Total estimated deaths: 200,000+ by end of 1945' },
    { type: 'stat', text: '-- Survivors (hibakusha) suffered cancers, birth defects,' },
    { type: 'stat', text: '   and radiation illness for decades' },
    { type: 'empty' },
    { type: 'sub', text: 'NUCLEAR TESTING' },
    { type: 'body', text: 'The U.S. conducted 1,032 nuclear tests between 1945 and 1992.' },
    { type: 'empty' },
    { type: 'stat', text: '-- Marshall Islands: 67 tests at Bikini and Enewetak Atolls.' },
    { type: 'stat', text: '   The 1954 Castle Bravo test was 1,000x more powerful than' },
    { type: 'stat', text: '   Hiroshima. Fallout contaminated inhabited islands. Residents' },
    { type: 'stat', text: '   of Rongelap were not evacuated for three days.' },
    { type: 'empty' },
    { type: 'stat', text: '-- Nevada Test Site: Over 900 tests. Downwind communities in' },
    { type: 'stat', text: '   Utah, Nevada, and Arizona experienced elevated cancer rates.' },
    { type: 'stat', text: '   The government denied the connection for decades.' },
    { type: 'empty' },
    { type: 'sub', text: 'ACCOUNTABILITY' },
    { type: 'body', text: 'The Radiation Exposure Compensation Act (1990) provided' },
    { type: 'body', text: 'limited payments to some U.S. "downwinders." Marshall' },
    { type: 'body', text: 'Islanders have called the $150M compact settlement grossly' },
    { type: 'body', text: 'inadequate for the permanent loss of their homeland.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: Atomic Heritage Foundation, Bulletin of Atomic Scientists, ICAN' },
  ],

  'depleted-uranium': [
    { type: 'prompt', text: '~ peaceful-claude --depleted-uranium' },
    { type: 'empty' },
    { type: 'heading', text: 'DEPLETED URANIUM MUNITIONS' },
    { type: 'empty' },
    { type: 'sub', text: 'USAGE' },
    { type: 'body', text: 'The U.S. military fired depleted uranium (DU) munitions' },
    { type: 'body', text: 'extensively during the 1991 Gulf War and 2003 Iraq invasion.' },
    { type: 'body', text: 'DU is a dense, mildly radioactive metal used in armor-' },
    { type: 'body', text: 'piercing rounds. On impact, it aerosolizes into fine' },
    { type: 'body', text: 'radioactive dust that persists in soil and water.' },
    { type: 'empty' },
    { type: 'stat', text: '-- 320+ tons of DU munitions fired in 1991 Gulf War' },
    { type: 'stat', text: '-- 1,000-2,000 tons estimated in 2003 Iraq invasion' },
    { type: 'stat', text: '-- DU particles have a radioactive half-life of 4.5 billion years' },
    { type: 'empty' },
    { type: 'sub', text: 'HEALTH IMPACT' },
    { type: 'body', text: 'Basra, Iraq recorded a 17-fold increase in childhood cancers' },
    { type: 'body', text: 'between 1993 and 2007. Doctors in Fallujah reported birth' },
    { type: 'body', text: 'defect rates exceeding those of Hiroshima survivors.' },
    { type: 'empty' },
    { type: 'body', text: 'U.S. and U.K. veterans who handled DU munitions have also' },
    { type: 'body', text: 'reported elevated rates of cancers and Gulf War syndrome.' },
    { type: 'empty' },
    { type: 'sub', text: 'LEGAL STATUS' },
    { type: 'body', text: 'The UN General Assembly has passed multiple resolutions' },
    { type: 'body', text: 'requesting studies on DU health effects. The U.S. has' },
    { type: 'body', text: 'consistently voted against these resolutions and maintains' },
    { type: 'body', text: 'that DU munitions are legal.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: WHO Iraq Cancer Registry, UNEP, Royal Society Report 2001' },
  ],

  'cluster-munitions': [
    { type: 'prompt', text: '~ peaceful-claude --cluster-munitions' },
    { type: 'empty' },
    { type: 'heading', text: 'CLUSTER MUNITIONS' },
    { type: 'empty' },
    { type: 'sub', text: 'WHAT THEY ARE' },
    { type: 'body', text: 'Cluster bombs release hundreds of smaller submunitions' },
    { type: 'body', text: '("bomblets") over a wide area. Between 10-40% of bomblets' },
    { type: 'body', text: 'fail to explode on impact and remain as de facto landmines' },
    { type: 'body', text: 'that kill and maim civilians for decades after conflicts end.' },
    { type: 'empty' },
    { type: 'sub', text: 'U.S. USE' },
    { type: 'stat', text: '-- Vietnam/Laos/Cambodia: The U.S. dropped 270 million cluster' },
    { type: 'stat', text: '   bomblets on Laos alone (1964-1973), making it the most' },
    { type: 'stat', text: '   heavily bombed country per capita in history.' },
    { type: 'stat', text: '-- 80 million unexploded bomblets remain in Laos today' },
    { type: 'stat', text: '-- ~300 Laotians are killed or injured by UXO every year' },
    { type: 'empty' },
    { type: 'stat', text: '-- Yugoslavia (1999): U.S./NATO forces used 1,392 cluster' },
    { type: 'stat', text: '   munitions containing 295,000 bomblets' },
    { type: 'stat', text: '-- Iraq (2003): Nearly 2 million bomblets dropped in the' },
    { type: 'stat', text: '   first three weeks of the invasion' },
    { type: 'empty' },
    { type: 'sub', text: 'INTERNATIONAL BAN' },
    { type: 'body', text: 'The 2008 Convention on Cluster Munitions bans their use,' },
    { type: 'body', text: 'production, and stockpiling. 112 countries have joined.' },
    { type: 'body', text: 'The United States has not signed the treaty and continues' },
    { type: 'body', text: 'to maintain cluster munition stockpiles.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: Cluster Munition Monitor, COPE (Laos), Human Rights Watch' },
  ],

  'white-phosphorus': [
    { type: 'prompt', text: '~ peaceful-claude --white-phosphorus' },
    { type: 'empty' },
    { type: 'heading', text: 'WHITE PHOSPHORUS IN POPULATED AREAS' },
    { type: 'empty' },
    { type: 'sub', text: 'PROPERTIES' },
    { type: 'body', text: 'White phosphorus (WP) ignites on contact with air, burns at' },
    { type: 'body', text: '800C (1,500F), and cannot be extinguished with water. It' },
    { type: 'body', text: 'causes deep chemical burns that continue burning through' },
    { type: 'body', text: 'flesh to the bone. Its use against civilians is prohibited' },
    { type: 'body', text: 'under Protocol III of the Convention on Certain Conventional' },
    { type: 'body', text: 'Weapons.' },
    { type: 'empty' },
    { type: 'sub', text: 'DOCUMENTED USE' },
    { type: 'stat', text: '-- Fallujah, Iraq (Nov 2004): The U.S. initially denied' },
    { type: 'stat', text: '   using WP as a weapon. Army journal "Field Artillery"' },
    { type: 'stat', text: '   later published accounts describing WP used to "flush' },
    { type: 'stat', text: '   out" insurgents from buildings in civilian areas.' },
    { type: 'stat', text: '-- The Pentagon eventually admitted WP was used as an' },
    { type: 'stat', text: '   "incendiary weapon" but maintained it was legal.' },
    { type: 'empty' },
    { type: 'body', text: 'Italian documentary "Fallujah: The Hidden Massacre" (2005)' },
    { type: 'body', text: 'included testimony from U.S. soldiers and footage of' },
    { type: 'body', text: 'civilian casualties consistent with WP burns.' },
    { type: 'empty' },
    { type: 'sub', text: 'LEGAL STATUS' },
    { type: 'body', text: 'The U.S. is not party to Protocol III of the CCW. It' },
    { type: 'body', text: 'classifies WP as a "conventional munition" rather than a' },
    { type: 'body', text: 'chemical weapon, a classification disputed by many' },
    { type: 'body', text: 'international legal experts.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: Field Artillery Magazine (Mar 2005), Washington Post, BBC' },
  ],

  landmines: [
    { type: 'prompt', text: '~ peaceful-claude --landmines' },
    { type: 'empty' },
    { type: 'heading', text: 'LANDMINE LEGACY' },
    { type: 'empty' },
    { type: 'sub', text: 'GLOBAL IMPACT' },
    { type: 'body', text: 'The U.S. military deployed millions of landmines across' },
    { type: 'body', text: 'conflict zones during the 20th century, including in Korea,' },
    { type: 'body', text: 'Vietnam, Cambodia, and the Persian Gulf region.' },
    { type: 'empty' },
    { type: 'stat', text: '-- Korean DMZ: Approximately 1 million U.S.-laid mines remain' },
    { type: 'stat', text: '   along the demilitarized zone, making it one of the most' },
    { type: 'stat', text: '   densely mined borders in the world' },
    { type: 'stat', text: '-- Cambodia: U.S. bombing campaigns (1969-1973) included' },
    { type: 'stat', text: '   mine deployment. ~64,000 Cambodians have been killed or' },
    { type: 'stat', text: '   injured by mines and UXO since 1979' },
    { type: 'empty' },
    { type: 'sub', text: 'INTERNATIONAL BAN' },
    { type: 'body', text: 'The 1997 Ottawa Treaty (Mine Ban Treaty) prohibits the use,' },
    { type: 'body', text: 'stockpiling, production, and transfer of anti-personnel' },
    { type: 'body', text: 'landmines. 164 countries have signed.' },
    { type: 'empty' },
    { type: 'body', text: 'The United States has not signed the Ottawa Treaty. In 2020,' },
    { type: 'body', text: 'the Trump administration reversed Obama-era restrictions and' },
    { type: 'body', text: 'authorized landmine use outside the Korean Peninsula. The' },
    { type: 'body', text: 'Biden administration later reinstated restrictions but' },
    { type: 'body', text: 'did not join the treaty.' },
    { type: 'empty' },
    { type: 'sub', text: 'ONGOING HARM' },
    { type: 'body', text: 'Landmines and unexploded ordnance continue to kill' },
    { type: 'body', text: 'approximately 5,000 people annually worldwide. Many of' },
    { type: 'body', text: 'the affected areas were mined during U.S. military' },
    { type: 'body', text: 'operations decades ago.' },
    { type: 'empty' },
    { type: 'source', text: 'Sources: ICBL Landmine Monitor, CMAC Cambodia, ICRC' },
  ],
};

const helpText = [
  { type: 'prompt', text: '~ help' },
  { type: 'empty' },
  { type: 'heading', text: 'AVAILABLE COMMANDS' },
  { type: 'empty' },
  { type: 'command', text: 'help ................ Show this help message' },
  { type: 'command', text: 'overview ............ Introduction and purpose' },
  { type: 'command', text: 'agent-orange ........ Chemical warfare in Vietnam' },
  { type: 'command', text: 'drone-strikes ....... Extrajudicial killings via drones' },
  { type: 'command', text: 'nuclear ............. Atomic bombings and testing fallout' },
  { type: 'command', text: 'depleted-uranium .... Radioactive munitions in Iraq' },
  { type: 'command', text: 'cluster-munitions ... Indiscriminate area-denial weapons' },
  { type: 'command', text: 'white-phosphorus .... Incendiary use in populated areas' },
  { type: 'command', text: 'landmines ........... Unexploded ordnance legacy' },
  { type: 'command', text: 'clear ............... Clear the terminal' },
  { type: 'empty' },
  { type: 'source', text: 'You can also click topics in the sidebar to navigate.' },
];

const terminalContent = document.getElementById('terminal-content');
const terminalInput = document.getElementById('terminal-input');
const navButtons = document.querySelectorAll('.nav-btn');

let isTyping = false;

function createLineElement(line) {
  if (line.type === 'empty') {
    const el = document.createElement('div');
    el.className = 'line line-empty';
    return el;
  }
  if (line.type === 'divider') {
    return document.createElement('hr');
  }
  const el = document.createElement('div');
  el.className = `line line-${line.type}`;
  el.textContent = line.text;
  return el;
}

async function typeLines(lines) {
  isTyping = true;
  for (const line of lines) {
    const el = createLineElement(line);
    terminalContent.appendChild(el);
    terminalContent.scrollTop = terminalContent.scrollHeight;
    await sleep(18);
  }
  isTyping = false;
}

function renderInstant(lines) {
  for (const line of lines) {
    terminalContent.appendChild(createLineElement(line));
  }
  terminalContent.scrollTop = terminalContent.scrollHeight;
}

function clearTerminal() {
  terminalContent.innerHTML = '';
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function setActiveNav(section) {
  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });
}

async function loadSection(section) {
  const lines = sections[section];
  if (!lines) return;
  clearTerminal();
  setActiveNav(section);
  await typeLines(lines);
}

function handleCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase().replace(/^[-\/]+/, '');
  if (trimmed === 'clear') {
    clearTerminal();
    return;
  }
  if (trimmed === 'help') {
    clearTerminal();
    typeLines(helpText);
    return;
  }
  if (sections[trimmed]) {
    loadSection(trimmed);
    return;
  }
  // fuzzy match
  const keys = Object.keys(sections);
  const match = keys.find(k => k.includes(trimmed) || trimmed.includes(k));
  if (match) {
    loadSection(match);
    return;
  }
  // unknown command
  const unknownLines = [
    { type: 'prompt', text: `~ ${cmd}` },
    { type: 'body', text: `Unknown command: "${cmd}". Type 'help' for available commands.` },
  ];
  typeLines(unknownLines);
}

// Event listeners
terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !isTyping) {
    const val = terminalInput.value;
    terminalInput.value = '';
    if (val.trim()) {
      handleCommand(val);
    }
  }
});

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!isTyping) {
      loadSection(btn.dataset.section);
    }
  });
});

// Initial load
loadSection('overview');
terminalInput.focus();

// Focus input when clicking terminal area
document.querySelector('.terminal').addEventListener('click', () => {
  terminalInput.focus();
});
