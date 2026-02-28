// Generate background flowers
function createFlowers() {
  const container = document.getElementById('flowers');
  const colors = ['#e8a0b4', '#b8a0e8', '#a0cce8', '#a0e8c4', '#e8c4a0', '#e8d8a0', '#e8a0a0'];

  const flowerSVGs = [
    // Simple 5-petal flower
    (c) => `<svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="18" r="10" fill="${c}"/><circle cx="18" cy="28" r="10" fill="${c}"/><circle cx="42" cy="28" r="10" fill="${c}"/><circle cx="22" cy="40" r="10" fill="${c}"/><circle cx="38" cy="40" r="10" fill="${c}"/><circle cx="30" cy="30" r="6" fill="${c}" opacity="0.6"/></svg>`,
    // Daisy
    (c) => `<svg viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="14" rx="5" ry="12" fill="${c}"/><ellipse cx="30" cy="46" rx="5" ry="12" fill="${c}"/><ellipse cx="14" cy="30" rx="12" ry="5" fill="${c}"/><ellipse cx="46" cy="30" rx="12" ry="5" fill="${c}"/><ellipse cx="19" cy="19" rx="5" ry="12" transform="rotate(45 19 19)" fill="${c}"/><ellipse cx="41" cy="41" rx="5" ry="12" transform="rotate(45 41 41)" fill="${c}"/><ellipse cx="41" cy="19" rx="5" ry="12" transform="rotate(-45 41 19)" fill="${c}"/><ellipse cx="19" cy="41" rx="5" ry="12" transform="rotate(-45 19 41)" fill="${c}"/><circle cx="30" cy="30" r="7" fill="${c}" opacity="0.5"/></svg>`,
    // Simple leaf/petal
    (c) => `<svg viewBox="0 0 40 60" fill="none"><path d="M20 5 Q35 20 35 35 Q35 55 20 55 Q5 55 5 35 Q5 20 20 5Z" fill="${c}"/><path d="M20 15 v30" stroke="${c}" stroke-width="1" opacity="0.4"/></svg>`,
    // Small blossom
    (c) => `<svg viewBox="0 0 50 50" fill="none"><circle cx="25" cy="15" r="8" fill="${c}"/><circle cx="15" cy="30" r="8" fill="${c}"/><circle cx="35" cy="30" r="8" fill="${c}"/><circle cx="25" cy="25" r="5" fill="${c}" opacity="0.5"/></svg>`,
  ];

  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'flower';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const svg = flowerSVGs[Math.floor(Math.random() * flowerSVGs.length)];
    const size = 40 + Math.random() * 80;
    el.innerHTML = svg(color);
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.opacity = 0.035 + Math.random() * 0.04;
    el.style.animationDelay = -(Math.random() * 30) + 's';
    el.style.animationDuration = (25 + Math.random() * 15) + 's';
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(el);
  }
}

// Greeting based on time
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

// Section data
const sections = {
  'agent-orange': {
    color: 'c-mint',
    query: 'What was Agent Orange?',
    lines: [
      { type: 'heading', cls: 'c-mint', text: 'Operation Ranch Hand: Agent Orange in Vietnam' },
      { type: 'sub', text: 'Timeline' },
      { type: 'body', text: '1962-1971: The U.S. military sprayed approximately 20 million gallons of herbicides over Vietnam, Laos, and Cambodia as part of Operation Ranch Hand. The most widely used agent was Agent Orange, which contained the toxic contaminant dioxin (TCDD), one of the most poisonous substances known.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Human Cost' },
      { type: 'stat', text: '3 million+ Vietnamese people exposed' },
      { type: 'stat', text: '150,000+ children born with birth defects attributed to dioxin' },
      { type: 'stat', text: 'Multiple generations affected through epigenetic damage' },
      { type: 'stat', text: 'Cancers, neurological disorders, and immune deficiencies persist to this day' },
      { type: 'spacer' },
      { type: 'sub', text: 'U.S. Veterans' },
      { type: 'body', text: 'American service members were also devastated. The VA has recognized 14 diseases linked to Agent Orange exposure. Hundreds of thousands of U.S. veterans filed claims.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Accountability' },
      { type: 'body', text: 'Internal Dow Chemical memos from 1965 show the company knew dioxin was extraordinarily toxic. The U.S. government was warned but continued spraying for six more years. No formal reparations have been made to Vietnamese victims.' },
      { type: 'source', text: 'Sources: Stellman et al. (Nature, 2003), VA.gov, Red Cross Vietnam' },
    ],
  },

  'drone-strikes': {
    color: 'c-lavender',
    query: 'Tell me about the U.S. drone program',
    lines: [
      { type: 'heading', cls: 'c-lavender', text: 'The U.S. Drone Warfare Program' },
      { type: 'sub', text: 'Overview' },
      { type: 'body', text: 'Since 2001, the U.S. has conducted thousands of drone strikes across at least seven countries: Afghanistan, Pakistan, Yemen, Somalia, Iraq, Syria, and Libya. Many strikes were carried out under classified "signature strike" rules, targeting individuals based on behavioral patterns rather than confirmed identity.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Civilian Toll' },
      { type: 'stat', text: '8,858-16,901 total deaths from U.S. drone strikes (2001-2020)' },
      { type: 'stat', text: '910-2,200 confirmed civilians killed' },
      { type: 'stat', text: '283-454 of the confirmed civilians were children' },
      { type: 'spacer' },
      { type: 'sub', text: 'Notable Incidents' },
      { type: 'body', text: 'Aug 2021: A drone strike in Kabul killed 10 members of the Ahmadi family, including 7 children. The Pentagon initially called it a "righteous strike" before admitting the target was an aid worker, not a combatant. No one was disciplined.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Concerns' },
      { type: 'body', text: 'The UN Special Rapporteur on extrajudicial killings has repeatedly stated that many U.S. drone strikes violate international law, as they occur outside recognized armed conflict zones and without due process.' },
      { type: 'source', text: 'Sources: Bureau of Investigative Journalism, NYT "The Drone Papers", UN OHCHR' },
    ],
  },

  nuclear: {
    color: 'c-coral',
    query: 'What about nuclear weapons use?',
    lines: [
      { type: 'heading', cls: 'c-coral', text: 'Nuclear Weapons: Bombings and Testing' },
      { type: 'sub', text: 'Hiroshima and Nagasaki (1945)' },
      { type: 'body', text: 'The United States remains the only country to have used nuclear weapons in armed conflict.' },
      { type: 'spacer' },
      { type: 'stat', text: 'Hiroshima (Aug 6): ~80,000 killed instantly, ~60,000 more by year end' },
      { type: 'stat', text: 'Nagasaki (Aug 9): ~40,000 killed instantly, ~30,000 more by year end' },
      { type: 'stat', text: 'Total estimated deaths: 200,000+ by end of 1945' },
      { type: 'stat', text: 'Survivors suffered cancers, birth defects, and radiation illness for decades' },
      { type: 'spacer' },
      { type: 'sub', text: 'Nuclear Testing' },
      { type: 'body', text: 'The U.S. conducted 1,032 nuclear tests between 1945 and 1992. Marshall Islands residents were exposed to fallout from 67 tests. The 1954 Castle Bravo test was 1,000x more powerful than Hiroshima. Nevada downwind communities experienced elevated cancer rates the government denied for decades.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Accountability' },
      { type: 'body', text: 'The Radiation Exposure Compensation Act (1990) provided limited payments to some "downwinders." Marshall Islanders have called the $150M compact settlement grossly inadequate for the permanent loss of their homeland.' },
      { type: 'source', text: 'Sources: Atomic Heritage Foundation, Bulletin of Atomic Scientists, ICAN' },
    ],
  },

  'depleted-uranium': {
    color: 'c-sky',
    query: 'What is depleted uranium?',
    lines: [
      { type: 'heading', cls: 'c-sky', text: 'Depleted Uranium Munitions' },
      { type: 'sub', text: 'Usage' },
      { type: 'body', text: 'The U.S. military fired depleted uranium (DU) munitions extensively during the 1991 Gulf War and 2003 Iraq invasion. DU is a dense, mildly radioactive metal used in armor-piercing rounds. On impact, it aerosolizes into fine radioactive dust that persists in soil and water.' },
      { type: 'spacer' },
      { type: 'stat', text: '320+ tons of DU munitions fired in 1991 Gulf War' },
      { type: 'stat', text: '1,000-2,000 tons estimated in 2003 Iraq invasion' },
      { type: 'stat', text: 'DU particles have a radioactive half-life of 4.5 billion years' },
      { type: 'spacer' },
      { type: 'sub', text: 'Health Impact' },
      { type: 'body', text: 'Basra, Iraq recorded a 17-fold increase in childhood cancers between 1993 and 2007. Doctors in Fallujah reported birth defect rates exceeding those of Hiroshima survivors. U.S. and U.K. veterans also reported elevated cancer rates.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Status' },
      { type: 'body', text: 'The UN General Assembly has passed multiple resolutions requesting studies on DU health effects. The U.S. has consistently voted against these resolutions and maintains that DU munitions are legal.' },
      { type: 'source', text: 'Sources: WHO Iraq Cancer Registry, UNEP, Royal Society Report 2001' },
    ],
  },

  'cluster-munitions': {
    color: 'c-gold',
    query: 'What are cluster munitions?',
    lines: [
      { type: 'heading', cls: 'c-gold', text: 'Cluster Munitions' },
      { type: 'sub', text: 'What They Are' },
      { type: 'body', text: 'Cluster bombs release hundreds of smaller submunitions ("bomblets") over a wide area. Between 10-40% fail to explode on impact and remain as de facto landmines that kill civilians for decades.' },
      { type: 'spacer' },
      { type: 'sub', text: 'U.S. Use' },
      { type: 'stat', text: '270 million cluster bomblets dropped on Laos (1964-1973)' },
      { type: 'stat', text: '80 million unexploded bomblets remain in Laos today' },
      { type: 'stat', text: '~300 Laotians killed or injured by UXO every year' },
      { type: 'spacer' },
      { type: 'stat', text: 'Yugoslavia (1999): 295,000 bomblets deployed by U.S./NATO' },
      { type: 'stat', text: 'Iraq (2003): Nearly 2 million bomblets in first three weeks' },
      { type: 'spacer' },
      { type: 'sub', text: 'International Ban' },
      { type: 'body', text: 'The 2008 Convention on Cluster Munitions bans their use, production, and stockpiling. 112 countries have joined. The United States has not signed and maintains stockpiles.' },
      { type: 'source', text: 'Sources: Cluster Munition Monitor, COPE (Laos), Human Rights Watch' },
    ],
  },

  'white-phosphorus': {
    color: 'c-peach',
    query: 'Has the U.S. used white phosphorus?',
    lines: [
      { type: 'heading', cls: 'c-peach', text: 'White Phosphorus in Populated Areas' },
      { type: 'sub', text: 'Properties' },
      { type: 'body', text: 'White phosphorus ignites on contact with air, burns at 800C (1,500F), and cannot be extinguished with water. It burns through flesh to the bone. Its use against civilians is prohibited under Protocol III of the CCW.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Documented Use' },
      { type: 'stat', text: 'Fallujah, Iraq (Nov 2004): U.S. initially denied using WP as a weapon' },
      { type: 'stat', text: 'Army journal "Field Artillery" described WP used to "flush out" people from buildings in civilian areas' },
      { type: 'stat', text: 'Pentagon eventually admitted use as "incendiary weapon" but maintained legality' },
      { type: 'spacer' },
      { type: 'body', text: 'Italian documentary "Fallujah: The Hidden Massacre" (2005) included U.S. soldier testimony and footage of civilian casualties consistent with WP burns.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Legal Status' },
      { type: 'body', text: 'The U.S. is not party to Protocol III of the CCW. It classifies WP as a "conventional munition" rather than a chemical weapon, a classification disputed by many international legal experts.' },
      { type: 'source', text: 'Sources: Field Artillery Magazine (Mar 2005), Washington Post, BBC' },
    ],
  },

  landmines: {
    color: 'c-rose',
    query: 'What about landmines?',
    lines: [
      { type: 'heading', cls: 'c-rose', text: 'Landmine Legacy' },
      { type: 'sub', text: 'Global Impact' },
      { type: 'body', text: 'The U.S. military deployed millions of landmines across conflict zones during the 20th century, including in Korea, Vietnam, Cambodia, and the Persian Gulf.' },
      { type: 'spacer' },
      { type: 'stat', text: 'Korean DMZ: ~1 million U.S.-laid mines remain' },
      { type: 'stat', text: 'Cambodia: ~64,000 killed or injured by mines and UXO since 1979' },
      { type: 'spacer' },
      { type: 'sub', text: 'International Ban' },
      { type: 'body', text: 'The 1997 Ottawa Treaty prohibits anti-personnel landmines. 164 countries have signed. The United States has not signed the treaty.' },
      { type: 'spacer' },
      { type: 'sub', text: 'Ongoing Harm' },
      { type: 'body', text: 'Landmines and unexploded ordnance kill approximately 5,000 people annually worldwide. Many affected areas were mined during U.S. military operations decades ago.' },
      { type: 'source', text: 'Sources: ICBL Landmine Monitor, CMAC Cambodia, ICRC' },
    ],
  },
};

// DOM
const landing = document.getElementById('landing');
const convView = document.getElementById('conv-view');
const convContent = document.getElementById('conv-content');
const convScroll = document.getElementById('conv-scroll');
const input = document.getElementById('input');
const convInput = document.getElementById('conv-input');
const sendBtn = document.getElementById('send-btn');
const convSendBtn = document.getElementById('conv-send-btn');
const pills = document.querySelectorAll('.pill');
const iconBtns = document.querySelectorAll('.icon-btn[data-section]');

function showLanding() {
  landing.classList.remove('hidden');
  convView.classList.add('hidden');
  convContent.innerHTML = '';
  iconBtns.forEach(b => b.classList.toggle('active-icon', b.dataset.section === 'home'));
}

function showConversation() {
  landing.classList.add('hidden');
  landing.style.display = 'none';
  convView.classList.remove('hidden');
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
    const el = document.createElement('div');
    if (line.type === 'heading') {
      el.className = `msg-heading ${line.cls || ''}`;
      el.textContent = line.text;
    } else if (line.type === 'sub') {
      el.className = 'msg-sub';
      el.textContent = line.text;
    } else if (line.type === 'body') {
      el.className = 'msg-body';
      el.textContent = line.text;
    } else if (line.type === 'stat') {
      el.className = 'msg-stat';
      el.textContent = line.text;
    } else if (line.type === 'source') {
      el.className = 'msg-source';
      el.textContent = line.text;
    } else if (line.type === 'command') {
      el.className = 'msg-command';
      el.textContent = line.text;
    } else if (line.type === 'spacer') {
      el.className = 'msg-spacer';
    }
    msg.appendChild(el);
  }
  return msg;
}

function loadSection(section, customQuery) {
  const data = sections[section];
  if (!data) return;

  showConversation();

  // Update icon bar
  iconBtns.forEach(b => b.classList.toggle('active-icon', b.dataset.section === section));

  // Add back button
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 7H4M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg> Back';
  back.addEventListener('click', () => {
    landing.style.display = '';
    showLanding();
  });
  convContent.appendChild(back);

  // User message
  convContent.appendChild(createUserMsg(customQuery || data.query));

  // Claude response
  setTimeout(() => {
    convContent.appendChild(buildClaudeMsg(data.lines));
    convScroll.scrollTop = convScroll.scrollHeight;
  }, 200);
}

function handleCommand(cmd, fromConv) {
  const trimmed = cmd.trim().toLowerCase().replace(/^[-\/]+/, '');

  if (trimmed === 'clear' || trimmed === 'home' || trimmed === 'back') {
    landing.style.display = '';
    showLanding();
    return;
  }

  if (sections[trimmed]) {
    if (fromConv) {
      convContent.appendChild(createUserMsg(cmd.trim()));
      iconBtns.forEach(b => b.classList.toggle('active-icon', b.dataset.section === trimmed));
      setTimeout(() => {
        convContent.appendChild(buildClaudeMsg(sections[trimmed].lines));
        convScroll.scrollTop = convScroll.scrollHeight;
      }, 200);
    } else {
      loadSection(trimmed, cmd.trim());
    }
    return;
  }

  const keys = Object.keys(sections);
  const match = keys.find(k => k.includes(trimmed) || trimmed.includes(k));
  if (match) {
    if (fromConv) {
      convContent.appendChild(createUserMsg(cmd.trim()));
      iconBtns.forEach(b => b.classList.toggle('active-icon', b.dataset.section === match));
      setTimeout(() => {
        convContent.appendChild(buildClaudeMsg(sections[match].lines));
        convScroll.scrollTop = convScroll.scrollHeight;
      }, 200);
    } else {
      loadSection(match, cmd.trim());
    }
    return;
  }

  // Unknown
  const target = fromConv ? convContent : convContent;
  if (!fromConv) showConversation();
  convContent.appendChild(createUserMsg(cmd));
  setTimeout(() => {
    convContent.appendChild(buildClaudeMsg([
      { type: 'body', text: `I don't have information on "${cmd}". Try one of the topics: agent-orange, drone-strikes, nuclear, depleted-uranium, cluster-munitions, white-phosphorus, or landmines.` },
    ]));
    convScroll.scrollTop = convScroll.scrollHeight;
  }, 200);
}

// Events
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value.trim()) {
    handleCommand(input.value, false);
    input.value = '';
  }
});

sendBtn.addEventListener('click', () => {
  if (input.value.trim()) {
    handleCommand(input.value, false);
    input.value = '';
  }
});

convInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && convInput.value.trim()) {
    handleCommand(convInput.value, true);
    convInput.value = '';
  }
});

convSendBtn.addEventListener('click', () => {
  if (convInput.value.trim()) {
    handleCommand(convInput.value, true);
    convInput.value = '';
  }
});

pills.forEach(p => {
  p.addEventListener('click', () => loadSection(p.dataset.section));
});

iconBtns.forEach(b => {
  b.addEventListener('click', () => {
    if (b.dataset.section === 'home') {
      landing.style.display = '';
      showLanding();
    } else if (b.dataset.section === 'search') {
      input.focus();
    } else if (sections[b.dataset.section]) {
      loadSection(b.dataset.section);
    }
  });
});

// Init
document.getElementById('greeting-text').textContent = getGreeting();
createFlowers();
input.focus();
