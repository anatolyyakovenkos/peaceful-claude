const sections = {
  overview: {
    gradient: '',
    query: 'Tell me about U.S. weapons crimes',
    lines: [
      { type: 'heading', text: 'Weapons and Accountability: A Historical Record' },
      { type: 'body', text: 'This project documents historically verified instances where United States weapons programs caused civilian harm or violated international humanitarian law.' },
      { type: 'spacer' },
      { type: 'body', text: 'All entries are sourced from declassified government documents, congressional testimony, international court rulings, and investigative journalism.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Purpose' },
      { type: 'body', text: 'Accountability requires memory. Peace requires truth. This project exists not to condemn a nation, but to honor the principle that no power is above scrutiny, and no civilian death should be forgotten or dismissed as collateral damage.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Explore Topics' },
      { type: 'tags', items: [
        { label: 'Agent Orange', section: 'agent-orange', style: 1 },
        { label: 'Drone Program', section: 'drone-strikes', style: 2 },
        { label: 'Nuclear Weapons', section: 'nuclear', style: 3 },
        { label: 'Depleted Uranium', section: 'depleted-uranium', style: 4 },
        { label: 'Cluster Munitions', section: 'cluster-munitions', style: 5 },
        { label: 'White Phosphorus', section: 'white-phosphorus', style: 1 },
        { label: 'Landmines', section: 'landmines', style: 2 },
      ]},
    ],
  },

  'agent-orange': {
    gradient: 'g2',
    query: 'What was Agent Orange?',
    lines: [
      { type: 'heading', cls: 'g2', text: 'Operation Ranch Hand: Agent Orange in Vietnam' },
      { type: 'sub', text: 'Timeline' },
      { type: 'body', text: '1962-1971: The U.S. military sprayed approximately 20 million gallons of herbicides over Vietnam, Laos, and Cambodia as part of Operation Ranch Hand. The most widely used agent was Agent Orange, which contained the toxic contaminant dioxin (TCDD), one of the most poisonous substances known.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Human Cost' },
      { type: 'stat', text: '3 million+ Vietnamese people exposed' },
      { type: 'stat', text: '150,000+ children born with birth defects attributed to dioxin' },
      { type: 'stat', text: 'Multiple generations affected through epigenetic damage' },
      { type: 'stat', text: 'Cancers, neurological disorders, and immune deficiencies persist among exposed populations to this day' },
      { type: 'spacer' },
      { type: 'sub', text: 'U.S. Veterans' },
      { type: 'body', text: 'American service members were also devastated. The VA has recognized 14 diseases linked to Agent Orange exposure. Hundreds of thousands of U.S. veterans filed claims.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Accountability' },
      { type: 'body', text: 'Internal Dow Chemical memos from 1965 show the company knew dioxin was extraordinarily toxic. The U.S. government was warned but continued spraying for six more years. Vietnam has received limited remediation aid. No formal reparations have been made to Vietnamese victims.' },
      { type: 'source', text: 'Sources: Stellman et al. (Nature, 2003), VA.gov, Red Cross Vietnam' },
    ],
  },

  'drone-strikes': {
    gradient: 'g3',
    query: 'What about the U.S. drone program?',
    lines: [
      { type: 'heading', cls: 'g3', text: 'The U.S. Drone Warfare Program' },
      { type: 'sub', text: 'Overview' },
      { type: 'body', text: 'Since 2001, the U.S. has conducted thousands of drone strikes across at least seven countries: Afghanistan, Pakistan, Yemen, Somalia, Iraq, Syria, and Libya. Many strikes were carried out under classified "signature strike" rules, targeting individuals based on behavioral patterns rather than confirmed identity.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Civilian Toll' },
      { type: 'stat', text: '8,858-16,901 total deaths from U.S. drone strikes (2001-2020)' },
      { type: 'stat', text: '910-2,200 confirmed civilians killed' },
      { type: 'stat', text: '283-454 of the confirmed civilians were children' },
      { type: 'spacer' },
      { type: 'sub', text: 'Notable Incidents' },
      { type: 'body', text: 'Sep 2012: A U.S. drone struck a vehicle in Yemen, killing 12 civilians including 3 children, in what officials later admitted was a case of mistaken identity.' },
      { type: 'spacer' },
      { type: 'body', text: 'Aug 2021: A drone strike in Kabul killed 10 members of the Ahmadi family, including 7 children. The Pentagon initially called it a "righteous strike" before admitting the target was an aid worker, not a combatant. No one was disciplined.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Concerns' },
      { type: 'body', text: 'The UN Special Rapporteur on extrajudicial killings has repeatedly stated that many U.S. drone strikes violate international law, as they occur outside recognized armed conflict zones and without due process.' },
      { type: 'source', text: 'Sources: Bureau of Investigative Journalism, NYT "The Drone Papers", UN OHCHR' },
    ],
  },

  nuclear: {
    gradient: 'g4',
    query: 'What about nuclear weapons use?',
    lines: [
      { type: 'heading', cls: 'g4', text: 'Nuclear Weapons: Bombings and Testing' },
      { type: 'sub', text: 'Hiroshima and Nagasaki (1945)' },
      { type: 'body', text: 'The United States remains the only country to have used nuclear weapons in armed conflict.' },
      { type: 'spacer' },
      { type: 'stat', text: 'Hiroshima (Aug 6): ~80,000 killed instantly, ~60,000 more dead by year end from radiation' },
      { type: 'stat', text: 'Nagasaki (Aug 9): ~40,000 killed instantly, ~30,000 more dead by year end' },
      { type: 'stat', text: 'Total estimated deaths: 200,000+ by end of 1945' },
      { type: 'stat', text: 'Survivors (hibakusha) suffered cancers, birth defects, and radiation illness for decades' },
      { type: 'spacer' },
      { type: 'sub', text: 'Nuclear Testing' },
      { type: 'body', text: 'The U.S. conducted 1,032 nuclear tests between 1945 and 1992.' },
      { type: 'spacer' },
      { type: 'stat', text: 'Marshall Islands: 67 tests at Bikini and Enewetak Atolls. The 1954 Castle Bravo test was 1,000x more powerful than Hiroshima. Fallout contaminated inhabited islands.' },
      { type: 'stat', text: 'Nevada Test Site: Over 900 tests. Downwind communities experienced elevated cancer rates. The government denied the connection for decades.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Accountability' },
      { type: 'body', text: 'The Radiation Exposure Compensation Act (1990) provided limited payments to some U.S. "downwinders." Marshall Islanders have called the $150M compact settlement grossly inadequate for the permanent loss of their homeland.' },
      { type: 'source', text: 'Sources: Atomic Heritage Foundation, Bulletin of Atomic Scientists, ICAN' },
    ],
  },

  'depleted-uranium': {
    gradient: '',
    query: 'What is depleted uranium?',
    lines: [
      { type: 'heading', text: 'Depleted Uranium Munitions' },
      { type: 'sub', text: 'Usage' },
      { type: 'body', text: 'The U.S. military fired depleted uranium (DU) munitions extensively during the 1991 Gulf War and 2003 Iraq invasion. DU is a dense, mildly radioactive metal used in armor-piercing rounds. On impact, it aerosolizes into fine radioactive dust that persists in soil and water.' },
      { type: 'spacer' },
      { type: 'stat', text: '320+ tons of DU munitions fired in 1991 Gulf War' },
      { type: 'stat', text: '1,000-2,000 tons estimated in 2003 Iraq invasion' },
      { type: 'stat', text: 'DU particles have a radioactive half-life of 4.5 billion years' },
      { type: 'spacer' },
      { type: 'sub', text: 'Health Impact' },
      { type: 'body', text: 'Basra, Iraq recorded a 17-fold increase in childhood cancers between 1993 and 2007. Doctors in Fallujah reported birth defect rates exceeding those of Hiroshima survivors.' },
      { type: 'spacer' },
      { type: 'body', text: 'U.S. and U.K. veterans who handled DU munitions have also reported elevated rates of cancers and Gulf War syndrome.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Status' },
      { type: 'body', text: 'The UN General Assembly has passed multiple resolutions requesting studies on DU health effects. The U.S. has consistently voted against these resolutions and maintains that DU munitions are legal.' },
      { type: 'source', text: 'Sources: WHO Iraq Cancer Registry, UNEP, Royal Society Report 2001' },
    ],
  },

  'cluster-munitions': {
    gradient: 'g2',
    query: 'What are cluster munitions?',
    lines: [
      { type: 'heading', cls: 'g2', text: 'Cluster Munitions' },
      { type: 'sub', text: 'What They Are' },
      { type: 'body', text: 'Cluster bombs release hundreds of smaller submunitions ("bomblets") over a wide area. Between 10-40% of bomblets fail to explode on impact and remain as de facto landmines that kill and maim civilians for decades after conflicts end.' },
      { type: 'spacer' },
      { type: 'sub', text: 'U.S. Use' },
      { type: 'stat', text: 'Vietnam/Laos: The U.S. dropped 270 million cluster bomblets on Laos alone (1964-1973), making it the most heavily bombed country per capita in history' },
      { type: 'stat', text: '80 million unexploded bomblets remain in Laos today' },
      { type: 'stat', text: '~300 Laotians are killed or injured by UXO every year' },
      { type: 'spacer' },
      { type: 'stat', text: 'Yugoslavia (1999): U.S./NATO forces used 1,392 cluster munitions containing 295,000 bomblets' },
      { type: 'stat', text: 'Iraq (2003): Nearly 2 million bomblets dropped in the first three weeks of the invasion' },
      { type: 'spacer' },
      { type: 'sub', text: 'International Ban' },
      { type: 'body', text: 'The 2008 Convention on Cluster Munitions bans their use, production, and stockpiling. 112 countries have joined. The United States has not signed the treaty and continues to maintain cluster munition stockpiles.' },
      { type: 'source', text: 'Sources: Cluster Munition Monitor, COPE (Laos), Human Rights Watch' },
    ],
  },

  'white-phosphorus': {
    gradient: 'g3',
    query: 'Has the U.S. used white phosphorus?',
    lines: [
      { type: 'heading', cls: 'g3', text: 'White Phosphorus in Populated Areas' },
      { type: 'sub', text: 'Properties' },
      { type: 'body', text: 'White phosphorus (WP) ignites on contact with air, burns at 800C (1,500F), and cannot be extinguished with water. It causes deep chemical burns that continue burning through flesh to the bone. Its use against civilians is prohibited under Protocol III of the Convention on Certain Conventional Weapons.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Documented Use' },
      { type: 'stat', text: 'Fallujah, Iraq (Nov 2004): The U.S. initially denied using WP as a weapon' },
      { type: 'stat', text: 'Army journal "Field Artillery" later published accounts describing WP used to "flush out" insurgents from buildings in civilian areas' },
      { type: 'stat', text: 'The Pentagon eventually admitted WP was used as an "incendiary weapon" but maintained it was legal' },
      { type: 'spacer' },
      { type: 'body', text: 'Italian documentary "Fallujah: The Hidden Massacre" (2005) included testimony from U.S. soldiers and footage of civilian casualties consistent with WP burns.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Status' },
      { type: 'body', text: 'The U.S. is not party to Protocol III of the CCW. It classifies WP as a "conventional munition" rather than a chemical weapon, a classification disputed by many international legal experts.' },
      { type: 'source', text: 'Sources: Field Artillery Magazine (Mar 2005), Washington Post, BBC' },
    ],
  },

  landmines: {
    gradient: 'g4',
    query: 'What about landmines?',
    lines: [
      { type: 'heading', cls: 'g4', text: 'Landmine Legacy' },
      { type: 'sub', text: 'Global Impact' },
      { type: 'body', text: 'The U.S. military deployed millions of landmines across conflict zones during the 20th century, including in Korea, Vietnam, Cambodia, and the Persian Gulf region.' },
      { type: 'spacer' },
      { type: 'stat', text: 'Korean DMZ: Approximately 1 million U.S.-laid mines remain along the demilitarized zone' },
      { type: 'stat', text: 'Cambodia: ~64,000 Cambodians have been killed or injured by mines and UXO since 1979' },
      { type: 'spacer' },
      { type: 'sub', text: 'International Ban' },
      { type: 'body', text: 'The 1997 Ottawa Treaty (Mine Ban Treaty) prohibits the use, stockpiling, production, and transfer of anti-personnel landmines. 164 countries have signed.' },
      { type: 'spacer' },
      { type: 'body', text: 'The United States has not signed the Ottawa Treaty. In 2020, the Trump administration reversed Obama-era restrictions and authorized landmine use outside the Korean Peninsula. The Biden administration later reinstated restrictions but did not join the treaty.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Ongoing Harm' },
      { type: 'body', text: 'Landmines and unexploded ordnance continue to kill approximately 5,000 people annually worldwide. Many of the affected areas were mined during U.S. military operations decades ago.' },
      { type: 'source', text: 'Sources: ICBL Landmine Monitor, CMAC Cambodia, ICRC' },
    ],
  },
};

const helpLines = [
  { type: 'heading', text: 'Available Commands' },
  { type: 'spacer' },
  { type: 'command', text: 'overview ............ Introduction and purpose' },
  { type: 'command', text: 'agent-orange ........ Chemical warfare in Vietnam' },
  { type: 'command', text: 'drone-strikes ....... Extrajudicial killings via drones' },
  { type: 'command', text: 'nuclear ............. Atomic bombings and testing fallout' },
  { type: 'command', text: 'depleted-uranium .... Radioactive munitions in Iraq' },
  { type: 'command', text: 'cluster-munitions ... Indiscriminate area-denial weapons' },
  { type: 'command', text: 'white-phosphorus .... Incendiary use in populated areas' },
  { type: 'command', text: 'landmines ........... Unexploded ordnance legacy' },
  { type: 'command', text: 'clear ............... Clear conversation' },
];

const conversation = document.getElementById('conversation');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send-btn');
const threads = document.querySelectorAll('.thread');
const newChatBtn = document.getElementById('new-chat');

let isAnimating = false;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function setActiveThread(section) {
  threads.forEach(t => t.classList.toggle('active', t.dataset.section === section));
}

function createUserMsg(text) {
  const el = document.createElement('div');
  el.className = 'msg msg-user';
  el.textContent = text;
  return el;
}

function buildClaudeMsg(lines) {
  const msg = document.createElement('div');
  msg.className = 'msg msg-claude';

  for (const line of lines) {
    if (line.type === 'heading') {
      const el = document.createElement('div');
      el.className = `msg-heading ${line.cls || ''}`;
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'sub') {
      const el = document.createElement('div');
      el.className = 'msg-sub';
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'body') {
      const el = document.createElement('div');
      el.className = 'msg-body';
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'stat') {
      const el = document.createElement('div');
      el.className = 'msg-stat';
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'source') {
      const el = document.createElement('div');
      el.className = 'msg-source';
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'command') {
      const el = document.createElement('div');
      el.className = 'msg-command';
      el.textContent = line.text;
      msg.appendChild(el);
    } else if (line.type === 'spacer') {
      const el = document.createElement('div');
      el.className = 'msg-spacer';
      msg.appendChild(el);
    } else if (line.type === 'tags') {
      const row = document.createElement('div');
      row.className = 'tag-row';
      for (const item of line.items) {
        const btn = document.createElement('button');
        btn.className = `tag tag-${item.style}`;
        btn.textContent = item.label;
        btn.addEventListener('click', () => {
          if (!isAnimating) loadSection(item.section);
        });
        row.appendChild(btn);
      }
      msg.appendChild(row);
    }
  }

  return msg;
}

async function loadSection(section, customQuery) {
  const data = sections[section];
  if (!data) return;

  isAnimating = true;
  setActiveThread(section);

  const userMsg = createUserMsg(customQuery || data.query);
  conversation.appendChild(userMsg);
  conversation.scrollTop = conversation.scrollHeight;

  await sleep(300);

  const claudeMsg = buildClaudeMsg(data.lines);
  claudeMsg.style.opacity = '0';
  conversation.appendChild(claudeMsg);
  conversation.scrollTop = conversation.scrollHeight;

  await sleep(50);
  claudeMsg.style.opacity = '';

  conversation.scrollTop = conversation.scrollHeight;
  isAnimating = false;
}

function handleCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase().replace(/^[-\/]+/, '');

  if (trimmed === 'clear') {
    conversation.innerHTML = '';
    return;
  }

  if (trimmed === 'help') {
    const userMsg = createUserMsg('help');
    conversation.appendChild(userMsg);
    const claudeMsg = buildClaudeMsg(helpLines);
    conversation.appendChild(claudeMsg);
    conversation.scrollTop = conversation.scrollHeight;
    return;
  }

  if (sections[trimmed]) {
    loadSection(trimmed, cmd.trim());
    return;
  }

  const keys = Object.keys(sections);
  const match = keys.find(k => k.includes(trimmed) || trimmed.includes(k));
  if (match) {
    loadSection(match, cmd.trim());
    return;
  }

  const userMsg = createUserMsg(cmd);
  conversation.appendChild(userMsg);
  const errMsg = buildClaudeMsg([
    { type: 'body', text: `I don't have information on "${cmd}". Type "help" to see available topics.` },
  ]);
  conversation.appendChild(errMsg);
  conversation.scrollTop = conversation.scrollHeight;
}

function submit() {
  if (isAnimating) return;
  const val = input.value.trim();
  input.value = '';
  if (val) handleCommand(val);
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submit();
});

sendBtn.addEventListener('click', submit);

threads.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!isAnimating) loadSection(btn.dataset.section);
  });
});

newChatBtn.addEventListener('click', () => {
  conversation.innerHTML = '';
  setActiveThread('overview');
  loadSection('overview');
});

// Initial load
loadSection('overview');
input.focus();

conversation.addEventListener('click', (e) => {
  if (e.target === conversation) input.focus();
});
