/* ═══════════════════════════════════════════════════════════════════════════
   ❤️  THE MICHU QUEST — DXB to TRV  ❤️  (മലയാളം)
   ═══════════════════════════════════════════════════════════════════════════
   Edit anything here. Save and refresh `wife.html`.
═══════════════════════════════════════════════════════════════════════════ */

window.CONFIG = {

  // ─── PERSONAL ─────────────────────────────────────────────────────────────
  wifeName:      'Misiriya',
  wifeNickname:  'Michu',
  husbandName:   'Yasief',
  startingHearts: 5,
  restartKeyword: 'Kidukroos2026',   // Secret word on win screen to restart

  // ─── FIREBASE (cloud sync — same state across all browsers/devices) ─────
  firebase: {
    apiKey:            "AIzaSyCCO3c773L81S18Nw4GDtg7Tf9jPhORv4k",
    authDomain:        "michu-c6627.firebaseapp.com",
    projectId:         "michu-c6627",
    storageBucket:     "michu-c6627.firebasestorage.app",
    messagingSenderId: "666542539000",
    appId:             "1:666542539000:web:fdf7de33ee71aff13d3b0d"
  },

  // ─── PHOTOS (place these jpg files in the Wife/ folder) ──────────────────
  photos: {
    wedding: 'Intro Pic.jpeg',       // intro screen + scratch reveal
    funny:   'Win Pic.jpeg',         // win screen
  },

  // ─── BACKGROUND SONG (YouTube — starts when she clicks Start) ────────────
  song: {
    // Add one or more YouTube video IDs here to create a playlist.
    youtubeIds: ['dFyLEkVpzWI', 'Fd7-FybJlbs'],
  },  

  // ─── DISTANCE / TIME ─────────────────────────────────────────────────────
  distanceKm:        2940,            // DXB ↔ TRV
  lastMetDate:       '2026-01-20',    // for "days apart" calculation
  daysApartFallback: 111,             // used if today's date isn't computable
  daysApartTolerance: 0,              // exact day count required (no ± tolerance)

  // ─── HEART-GIVING PASSWORDS (each can be used ONCE for +3 hearts) ────────
  hearts: {
    perPassword: 3,
    passwords: [
      'Kundi', 'Kidukroos', 'AcidKundi', 'Pedukroos', 'Dakkras',
      'ZebraMoolam', 'StrawberryKundi', 'Hydrose', 'Jibbras69',
      'BeautifulDabras', 'MasalaKundi', 'AppleKavil', 'CakeMoolam', 'ILoveMichu', 'Kodamanjil', 'Superkidukk', 'MajorMoolam', 'EnteMichu', 'Kundilove', 'DabraDabra', 'MoolamMagic', 'KundiPower', 'Periyakundi2026'
    ],
    wrongMessages: [
      'യാസിഫിനോട് ചോദിക്കു',          // 1st wrong attempt
      'നീ ആള് കൊള്ളാലോ 😂'           // 2nd+ wrong attempt
    ],
    usedAllMessage: 'രഹസ്യ വാക്കുകൾ തീർന്നു. എന്നെ വിളിക്കൂ. 📞❤️',
  },

  // ─── FINAL LOVE MESSAGE (shown on win screen) ────────────────────────────
  finalMessage:
    'അവസാനം കണ്ടുപിടിച്ച എത്തി അല്ലെ...\n' +
    'നീ ഇപ്പോഴും എന്റെ മുത്തുമണി ആണ് ഡി മിച്ചു\n' +
    'ലവ് യു ഉമ്മ ഉമ്മ ഉമ്മ',

  // ─── LEVELS (15 total) ───────────────────────────────────────────────────
  levels: [

    // 1️⃣  Wedding Date
    {
      type:   'text',
      title:  'ലെവൽ 1 — നമ്മുടെ ദിവസം',
      prompt: 'ഗെയിം തുടങ്ങാൻ  വിവാഹ ദിവസം എഴുതുക (DD/MM/YYYY)',
      hints:  ['Hint നോക്കുന്ന കിടുക്ക്😏, നമ്മുടെ ജീവിതത്തിലെ ഏറ്റവും സന്തോഷം നിറഞ്ഞ ദിവസം.',],
      answer: '05/01/2026', // <-- ❗ CHANGE THIS to your actual wedding date
      reward: 'അതെ! ആ ദിവസം ഞാൻ ഒരിക്കലും മറക്കില്ല. ❤️',
    },

    // 2️⃣  Anniyan — text answer
    {
      type:   'text',
      title:  'ലെവൽ 2 — മറ്റൊരു മുഖം',
      prompt: 'ഒറ്റ വാക്കിൽ, എന്റെ സ്വഭാവം നീ എങ്ങനെ വിശേഷിപ്പിക്കും? (In English)',
      hints:  ['ഞാൻ ചിലപ്പോൾ പെട്ടെന്ന് മാറും — അറിയാമല്ലോ?', 'ഒരു ഹിറ്റ് സിനിമയുടെ പേരാണ് ഉത്തരം.'],
      answer: 'anniyan',
      reward: 'Correct! എന്റെ എല്ലാ വ്യക്തിത്വങ്ങളും നിന്നെ ഭ്രാന്തമായി സ്നേഹിക്കുന്നു 😘',
    },

    // 3️⃣  Snoring — text answer (multiple synonyms accepted)
    {
      type:   'text',
      title:  'ലെവൽ 3 — Night Music',
      prompt: 'ഞാൻ ഉറങ്ങിക്കഴിഞ്ഞാൽ നീ കേൾക്കാൻ കാത്തിരിക്കുന്ന ശബ്ദം ഇംഗ്ലീഷിൽ എന്ത് വാക്ക്?',
      hints:  ['രാത്രി ഞാൻ ഉറങ്ങുമ്പോൾ നീ മാത്രം കേൾക്കും.'],
      answers: ['snoring','snore','snores','snored','snorer','snoring sound','snore sound','sleep noise'],
      reward: 'നിന്റെ കാതുകൾക്ക് സംഗീതം, അല്ലേ? 😂',
    },

    // 4️⃣  Distance drag — bridge DXB ↔ TRV
    {
      type:       'distance',
      title:      'ലെവൽ 4 — ദൂരം മറികടക്കാം',
      prompt:     'വിമാനം ദുബായിൽ നിന്ന് തിരുവനന്തപുരത്തേക്ക് വലിച്ച് കൊണ്ടു പോകൂ. തടസ്സങ്ങൾ ഒഴിവാക്കൂ!',
      hints:      ['വിമാനം മെല്ലെ പിടിച്ച് വലിക്കൂ. ഒഴുകുന്ന തടസ്സങ്ങൾക്കിടയിലൂടെ വളഞ്ഞുപുളഞ്ഞ് പോകൂ.'],
      obstacles:  ['Wi-Fi പോയി', 'Time Zones', 'Miss you', 'Long Calls', 'Net ഇല്ല', 'Madam', 'Work', 'അസുഖം', 'ക്ഷീണം', 'ഉറക്കം'],
      reward:     '2,940 കിലോമീറ്റർ നിന്നോട് അടുത്തു. ❤️',
    },

    // 5️⃣  Days apart — number answer
    {
      type:    'number',
      title:   'ലെവൽ 5 — TIMES APART',
      prompt:  'നമ്മൾ അവസാനം കണ്ടതിനു ശേഷം എത്ര ദിവസമായി?',
      hints:   ['ഓരോ ദിവസവും ഞാൻ എണ്ണുന്നുണ്ട് — നീയും എണ്ണു.'],
      // computed live in code (days since CONFIG.lastMetDate, ± tolerance)
      reward:  'യുഗങ്ങൾ പോലെ തോന്നുന്നു. ഓരോ ദിവസവും നിന്നെ കൂടുതൽ മിസ് ചെയ്യിക്കുന്നു 🥹',
    },

    // 6️⃣  Kundi — text answer
    {
      type:   'text',
      title:  'ലെവൽ 6 — My Word',
      prompt: 'ഒറ്റ വാക്ക് മാത്രം. നിന്നെ ചിരിപ്പിക്കാൻ ഞാൻ എപ്പോഴും പറയുന്ന വാക്ക്. 😏',
      hints:  ['Hint ഒന്നുമില്ല നിനക്ക് അറിയാം 😂 (write in English letters)'],
      answer: 'kundi',
      reward: '😂😂😂കൊച്ചു കള്ളി! നിനക്ക് കിട്ടുമെന്നു എനിക്കറിയാമായിരുന്നു 😉!',
    },

    // 7️⃣  Catch the button
    {
      type:       'catch',
      title:      'ലെവൽ 7 — പിടിക്കാമെങ്കിൽ പിടിക്കൂ',
      prompt:     'ബട്ടൺ തൊടാൻ ശ്രമിക്കൂ. 😏',
      hints:      ['പിന്തുടരുക. കുറേ ശ്രമിച്ചാൽ അത് മടുത്ത് നിൽക്കും.'],
      buttonText: 'രഹസ്യത്തിന് എന്നെ തൊട് 💌',
      catches:    6,                          // number of attempts before it stops moving
      reward:     'പിടിക്കാൻ നീ അല്ലേലും മിടുക്കി   ആണല്ലോ ! എന്റെ കുണ്ടിയിൽ പിടിച്ച പോലെ . 💘',
    },

    // 8️⃣  Hold the heart for 10 seconds
    {
      type:       'hold',
      title:      'ലെവൽ 8 — ക്ഷമയുടെ പരീക്ഷണം',
      prompt:     'എന്റെ ഹൃദയം അമർത്തി പിടിക്കൂ. വിടരുത്. ❤️',
      hints:      ['10 സെക്കൻഡ് വിരൽ പൊക്കാതെ. നമ്മുടെ പ്രണയം പോലെ — ഒരിക്കലും വിടരുത്.'],
      durationMs: 10000,
      reward:     'കൊച്ചു കള്ളി എന്റെ ഹൃദയത്തിലും പിടിച്ചു . 🥹❤️',
    },

    // 9️⃣  Scratch and reveal
    {
      type:        'scratch',
      title:       'ലെവൽ 9 — ദുബായിയിൽ നിന്ന് ഒരു സർപ്രൈസ്',
      prompt:      'ഫോട്ടോ ചുരണ്ടി സർപ്രൈസ് കാണൂ!',
      hints:       ['വിരൽ / മൗസ് ഫോട്ടോയിൽ വലിച്ച് മായ്ച്ചു കളയൂ.'],
      coverPhoto:  'Together.jpeg',                  // ← front image (gets scratched off)
      revealPhoto: 'Funny.jpeg',                     // ← image revealed underneath
      revealText:  'ഹി ഹി ഹി 😂😂, നീ ഇപ്പോഴും എന്റെ ജാക്ക്പോട്ടാണ്. 🎰❤️',
      reward:      'ഹി ഹി ഹി 😂😂, നീ ഇപ്പോഴും എന്റെ ജാക്ക്പോട്ടാണ്. 🎰❤️',
    },

    // 🔟  Hidden glasses
    {
      type:   'hidden',
      title:  'ലെവൽ 10 — എന്റെ കണ്ണട എവിടെ?!',
      prompt: 'ഇത് എപ്പോഴും കൂടെ ഉണ്ടാകും. കണ്ടെത്തി തൊടൂ.',
      hints:  ['ശ്രദ്ധിച്ച് നോക്കൂ — കുട്ടിക്കാലം മുതൽ കൂടെ ഉണ്ട്.'],
      reward: 'കണ്ടോ? തിരുവനന്തപുരത്ത് നിന്നു പോലും, എന്റെ കണ്ണട കണ്ടെത്താൻ നീ സഹായിക്കുന്നു! 🤓❤️',
    },

    // 1️⃣1️⃣  Memory Match — flip cards to find pairs
    {
      type:    'memory',
      title:   'ലെവൽ 11 — ഓർമ്മകളുടെ ജോഡി',
      prompt:  'കാർഡുകൾ തിരിച്ച് ജോഡികൾ കണ്ടെത്തൂ. 6 ജോഡി മുഴുവനായും ഒത്തുചേർന്നാൽ ജയിച്ചു.',
      hints:   ['ഒരേസമയം 2 കാർഡുകൾ തിരിക്കാം. ഒത്തുചേർന്നില്ലെങ്കിൽ വീണ്ടും അടഞ്ഞുപോകും.'],
      symbols: ['❤️','🌹','💌','💕','💖','🔑'],   // 6 pairs = 12 cards
      reward:  'ഓരോ ജോഡിയും നമ്മൾ പോലെ ഒത്തുചേർന്നു. 💕',
    },

    // 1️⃣2️⃣  Word Unscramble — rearrange letters
    {
      type:   'unscramble',
      title:  'ലെവൽ 12 — അക്ഷരങ്ങൾ ക്രമീകരിക്കൂ',
      prompt: 'അക്ഷരങ്ങൾ ടാപ്പ് ചെയ്ത് ശരിയായ ക്രമത്തിൽ വയ്ക്കൂ. (എന്റെ ഓമനപ്പേര്)',
      hints:  ['ഞാൻ നിന്നെ സ്നേഹത്തോടെ വിളിക്കുന്ന ഓമനപ്പേര്.'],
      word:   'MICHU',
      reward: 'അതുതന്നെ — എന്റെ മിച്ചു. 💕',
    },

    // 1️⃣3️⃣  Bubble Pop — tap floating hearts
    {
      type:        'pop',
      title:       'ലെവൽ 13 — ഹൃദയങ്ങൾ പൊട്ടിക്കൂ',
      prompt:      'പൊങ്ങിയിറങ്ങുന്ന ഹൃദയങ്ങൾ ടാപ്പ് ചെയ്ത് പൊട്ടിക്കൂ. 30 സെക്കൻഡിൽ 12 എണ്ണം!',
      hints:       ['വേഗത്തിൽ ടാപ്പ് ചെയ്യൂ — ഹൃദയം മുകളിലേക്ക് പോകുന്നു.'],
      target:      12,
      durationMs:  30000,
      reward:      'നീ എന്റെ എല്ലാ ഹൃദയങ്ങളും കീഴടക്കി! 💖',
    },

    // 1️⃣4️⃣  Connect the Dots — tap numbered hearts in order
    {
      type:   'connect',
      title:  'ലെവൽ 14 — ഹൃദയങ്ങൾ ബന്ധിപ്പിക്കൂ',
      prompt: '1 മുതൽ 10 വരെ ഹൃദയങ്ങൾ ക്രമത്തിൽ ടാപ്പ് ചെയ്യൂ. തെറ്റിയാൽ ആദ്യം മുതൽ!',
      hints:  ['മെല്ലെ, ശ്രദ്ധയോടെ. ഓരോ ഹൃദയത്തിലും ഒരു സംഖ്യയുണ്ട്.'],
      total:  10,
      reward: 'നീ എല്ലാം ശരിയായി ബന്ധിപ്പിച്ചു — നമ്മൾ പോലെ. 💝',
    },

    // 1️⃣5️⃣  Quiz — multiple choice about us
    {
      type:      'quiz',
      title:     'ലെവൽ 15 — നമ്മളെ കുറിച്ച്',
      prompt:    'നമ്മളെ കുറിച്ച് ചോദ്യങ്ങൾ. ശരിയായ ഉത്തരം തിരഞ്ഞെടുക്കൂ.',
      hints:     ['തെറ്റിയാൽ വീണ്ടും ശ്രമിക്കാം — പക്ഷേ മുന്നോട്ട് പോകണം.'],
      questions: [
        {
          q: 'ഞാൻ ഇപ്പോൾ ഏത് നഗരത്തിലാണ്?',
          options: ['DMCC', 'DIP ', 'Jabel Ali', 'Dubai Marina'],
          answer: 1,
        },
        {
          q: 'നീ ഇപ്പോൾ ഏത് സംസ്ഥാനത്താണ്?',
          options: ['കോതമംഗലം', 'കേരളം', 'കർണാടകം', 'ആന്ധ്ര'],
          answer: 1,
          reward: 'ഹി ഹി, നീ എവിടെയാണ് എന്ന് എനിക്കും അറിയാം 😉😜'
        },
        {
          q: 'നമ്മൾ ഏറ്റവും കൂടുതൽ ഉപയോഗിക്കുന്നത്?',
          options: ['Whatsapp', 'Botim', 'Email', 'Instagram'],
          answer: 1,
        },
      ],
      reward: 'കള്ളി തന്നെ എല്ലാം അറിയാം ! 💖',
    },

    // 1️⃣6️⃣  Lock Combination — turn dials to special date
    {
      type:   'lock',
      title:  'ലെവൽ 16 — രഹസ്യ പൂട്ട്',
      prompt: 'ഡയലുകൾ ▲ ▼ കൊണ്ട് തിരിച്ച് ശരിയായ കോമ്പിനേഷൻ വയ്ക്കൂ.',
      hints:  ['ഒരു പ്രത്യേക തിയ്യതി ഓർമ്മയുണ്ടോ? ആ അക്കങ്ങൾ ശ്രദ്ധിച്ച് നോക്കൂ.', 'പൂട്ട് തുറന്നാൽ കഥ പൂർത്തിയാകും.'],
      combo:  [2, 2, 3],     // ← customize: array of digits 0-9
      reward: 'പൂട്ട് തുറന്നു — എന്റെ ഹൃദയത്തിന്റെ പൂട്ട് നീ തുറന്നു. 💝',
    },

  ],
};
