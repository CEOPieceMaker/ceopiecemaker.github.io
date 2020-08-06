/**Structure Explanation:
 * Name: used for CSS classes, short name. Changes flexible.
 * id  : used for Indexing/Export code. Changes kept to minimum.
 * cat : Deprecated(never used).
 * text: In-game description.
 * Others self-explanatory.
 */
MOVES = [{
   "id": "1",
   "cat": "official",
   "name": "moveattack",
   "long": "b]mn:move/attack",
   "text": "Move or Attack.",
   "color": [0,0,0]
 }, {
   "id": "2",
   "cat": "official",
   "name": "move",
   "long": "b]mn:move",
   "text": "Move only.",
   "color": [0,0,255]
 }, {
   "id": "3",
   "cat": "official",
   "name": "attack",
   "long": "b]mn:attack",
   "text": "Attack only.",
   "color": [252,13,27]
 }, {
   "id": "4",
   "cat": "official",
   "name": "jump",
   "long": "b]mu:move/attack",
   "text": "(Unblockable) Move or Attack.",
   "color": [20,151,24]
 }, {
   "id": "5",
   "cat": "official",
   "name": "jumpswap",
   "long": "b]mu:move/attack/swap",
   "text": "(Unblockable) Move, Attack, or swap places with ally.",
   "color": [255,210,0]
 }, {
   "id": "6",
   "cat": "official",
   "name": "teleport",
   "long": "b]mu:move",
   "text": "(Unblockable) Teleport.",
   "color": [121,19,153]
 }, {
   "id": "7",
   "cat": "official",
   "name": "magic",
   "long": "b]ru:attack",
   "text": "(Magic) Destroy target.",
   "color": [253,117,34]
 }, {
   "id": "8",
   "cat": "official",
   "name": "plant",
   "long": "2p]ru:transform@SAPLING/summon@SAPLING",
   "text": "[Pay 1]: (Magic) Summon Sapling or transform enemy into ally Sapling.",
   "color": [0,101,24]
 }, {
   "id": "9",
   "cat": "official",
   "name": "charm",
   "long": "c]ru:minion?charm#set@ally",
   "text": "(Magic) Charm enemy minion.",
   "color": [255,0,255]
 }, {
   "id": "10",
   "cat": "official",
   "name": "skeleton",
   "long": "4p]ru:summon@SKELETON&set@value=0",
   "text": "[Pay 5]: (Magic) Summon Value 0 Skeleton.",
   "color": [102,102,102],
   "color3": [0,0,0],
   "symbol1": "\u26e7"
 }, {
   "id": "11",
   "cat": "official",
   "name": "movestart",
   "long": "b]mn:startpos?move",
   "text": "Move from starting position.",
   "color": [11,36,251],
   "symbol1": "\u274b"
 }, {
   "id": "12",
   "cat": "official",
   "name": "poison",
   "long": "s]ru:poison#flag@3&attack",
   "text": "(Magic) Poison enemy unit, destroying them in 3 turns.",
   "color": [0,101,24],
   "symbol1": "\u00d7"
 }, {
   "id": "13",
   "cat": "official",
   "name": "freeze",
   "long": "s]ru:freeze#flag@3-move",
   "text": "(Magic) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\u00d7"
 }, {
   "id": "14",
   "cat": "official",
   "name": "petrify",
   "long": "s]rn:petrify#flag@5-move",
   "text": "(Ranged) Petrify enemy unit for 5 turns, making them unable to act.",
   "color": [94,94,94],
   "symbol1": "\u00d7"
 }, {
   "id": "15",
   "cat": "official",
   "name": "polymorph",
   "long": "c]ru:set@type=(RANDOMMINION)",
   "text": "(Magic) Polymorph target into random minion.",
   "color": [255,0,255],
   "symbol1": "\u00d7",
   "hide": true
 }, {
   "id": "16",
   "cat": "official",
   "name": "haul",
   "long": "c]ru:set@pos=(RANDOM)",
   "text": "(Magic) Teleport unit to random location.",
   "color": [102,0,102],
   "symbol1": "\ufe56",
   "hide": true
 }, {
   "id": "17",
   "cat": "official",
   "name": "teleportmasshaul",
   "long": "bc]mu:move&1(RANGE)/@set@pos=(RANDOM)",
   "text": "(Unblockable) Teleport to empty location and Mass-Teleport all adjacent units to random locations.",
   "color": [102,0,102],
   "symbol1": "\ufe56",
   "symbol2": "\u2747",
   "hide": true
 }, {
   "id": "18",
   "cat": "official",
   "name": "sorcer",
   "long": "3]",
   "text": "[Pay 3] .",
   "color": [255,0,0],
   "color2": [127,0,0],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "19",
   "cat": "official",
   "name": "enchant",
   "long": "s]ru:ally?enchant#flag@2(ENCHANT)",
   "text": "(Magic) Enchant ally, making them immune to melee death for 2 turns.",
   "color": [0,102,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\u25cb"
 }, {
   "id": "20",
   "cat": "official",
   "name": "soulkeep",
   "long": "1cp]ru:transform@GHOST",
   "text": "[Pay 1]: (Magic) Transform enemy into ally Ghost.",
   "color": [208,88,161],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\ue900"
 }, {
   "id": "21",
   "cat": "official",
   "name": "teleportstart",
   "long": "b]mu:startpos?move",
   "text": "(Unblockable) Teleport from starting position.",
   "color": [121,19,153],
   "symbol1": "\u274b"
 }, {
   "id": "22",
   "cat": "official",
   "name": "slime",
   "long": "pt]:meleedeath?this+move?summon@SLIME",
   "text": "(Trigger) On Melee Death: Summon ally Slime into this empty location. If this unit is Frozen or Petrified this ability cannot activate.",
   "color": [0,153,0],
   "color2": [255,255,255],
   "color3": [0,204,0],
   "symbol1": "\ue902"
 }, {
   "id": "23",
   "cat": "official",
   "name": "moon",
   "long": "pt]:meleedeath?summon@this&set@value-=10",
   "text": "(Trigger) On Melee Death: Revive into this empty location with value decreased by 10. If this unit's value is less than 10 this ability cannot activate.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u263d"
 }, {
   "id": "24",
   "cat": "official",
   "name": "jumpattackminion",
   "long": "b]mu:minion?attack",
   "text": "(Unblockable) Attack Minion.",
   "color": [138,63,63],
   "color2": [255,255,255],
   "color3": [195,63,63],
   "symbol1": "\u239a"
 }, {
   "id": "25",
   "cat": "official",
   "name": "triggerattack",
   "long": "bt]mn:start?attack",
   "text": "(Trigger) Enemy Unit: Instantly attack this target at the start of your turn.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\u25c7"
 }, {
   "id": "26",
   "cat": "official",
   "name": "abilitytarget",
   "long": "a]",
   "text": "Ability Target.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2609"
 }, {
   "id": "27",
   "cat": "official",
   "name": "portal",
   "long": "u]:Aset@pos=\this",
   "text": "Teleport Ability Target to this empty location.",
   "color": [102,0,154],
   "color2": [255,255,255],
   "color3": [192,0,255],
   "color4": [0,0,0],
   "symbol1": "\u25cf",
   "symbol2": "o" /*25e6*/
 }, {
   "id": "28",
   "cat": "official",
   "name": "push",
   "long": "1c]rn:push#\\(mn:move@3(AWAY))",
   "text": "[Pay 1]: (Ranged) Push unit up to 3 spaces away from caster.",
   "color": [87,218,40],
   "color2": [255,255,255],
   "symbol1": "\u25cc"
 }, {
   "id": "29",
   "cat": "official",
   "name": "gemini",
   "long": "6cp]rn:summon@GEMINITWIN&set@tier=this&thisset@type=GEMINITWIN",
   "text": "[Pay 4]: (Ranged) Summon GeminiTwin and transform into GeminiTwin, each having value equal to this unit.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u264a"
 }, {
   "id": "30",
   "cat": "official",
   "name": "teleportking",
   "long": "cu]ru:(KING)set@pos=\this",
   "text": "(Magic) Teleport ally King to this empty location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u25c7",
   "symbol2": "\u25fd"
 }, {
   "id": "31",
   "cat": "official",
   "name": "teleportswap",
   "long": "b]mu:move/swap",
   "text": "(Unblockable) Teleport or swap places with ally.",
   "color": [121,19,153],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}"
 }, {
   "id": "32",
   "cat": "official",
   "name": "lifestone",
   "long": "cp]ru:summon@(CAN-REVIVE)&thisattack",
   "text": "(Magic) Revive most recently fallen ally champion of value 2x this unit's value or less, and destroy this unit.",
   "color": [0,0,0],
   "color2": [58,233,93],
   "symbol1": "\uea42"
 }, {
   "id": "33",
   "cat": "official",
   "name": "heal",
   "long": "1st]:ally?status?deflag",
   "text": "[Pay 1]: (Trigger) Ally Status Effect: Instantly cure this target at the start of your turn, removing all negative status effects.",
   "color": [0,0,0],
   "color2": [58,233,93],
   "symbol1": "\uea43"
 }, {
   "id": "34",
   "cat": "official",
   "name": "necromance",
   "long": "2cp]ru:ally?type==SKELETON?transform@BONEPILE",
   "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or transform target enemy minion into ally BonePile.",
   "color": [0,0,0],
   "color2": [227,0,0],
   "symbol1": "\ue901"
 }, {
   "id": "35",
   "cat": "official",
   "name": "moveattackblock",
   "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one normal attack from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u2219"
 }, {
   "id": "36",
   "cat": "official",
   "name": "freezeexplosion",
   "long": "st]:death?minion?freeze#flag@3-move",
   "text": "(Trigger) On Death: Freeze enemy minions in this area.",
   "color": [107,205,253],
   "symbol1": "\u25fc"
 }, {
   "id": "37",
   "cat": "official",
   "name": "freezestrike",
   "long": "bs]ru:thisattack&freeze#flag@3-move",
   "text": "(Magic) Destroy self at target location and Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "color3": [181,230,254],
   "color4": [107,205,253],
   "symbol2": "\u2738"
 }, {
   "id": "38",
   "cat": "official",
   "name": "bat",
   "long": "p]mz:thisset@type=BAT&move",
   "text": "(Unstoppable) Transform into Bat and fly to location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue903"
 }, {
   "id": "39",
   "cat": "official",
   "name": "castle",
   "long": "c]:ally?!minion?swap&(MOVETOGETHER)&(LOSEABILITY)",
   "text": "Swap places with ally Champion, then move this unit and Champion together, and lose this ability.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2656"
 }, {
   "id": "40",
   "cat": "official",
   "name": "thunder",
   "long": "1m]:flag@4&(ru:attack)",
   "text": "[Pay 1]: Mark location to be destroyed by Magic 4 turns after activating.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u26a1"
 }, {
   "id": "41",
   "cat": "official",
   "name": "attract",
   "long": "ct]ru:end?!ally?\\(mn:move@-1(AWAY))",
   "text": "(Magic, Trigger) Enemy Unit: Pull target 1 space in the direction of this unit at the end of your opponent's turn.",
   "color": [255,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25c7"
 }, {
   "id": "42",
   "cat": "official",
   "name": "shoot",
   "long": "b]rn:attack",
   "text": "(Ranged) Destroy target.",
   "color": [255,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2316"
 }, {
   "id": "43",
   "cat": "official",
   "name": "beacon",
   "long": "cu]ru:set@pos=Athis",
   "text": "(Magic) Target unit is teleported to Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "symbol1": "\u25ef"
 }, {
   "id": "44",
   "cat": "official",
   "name": "gravity",
   "long": "1cu]ru:\\(mn:move@A-(AWAY))",
   "text": "[Pay 1]: (Magic) Move target unit toward Ability Target.",
   "color": [0,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25ef"
 }, {
   "id": "45",
   "cat": "official",
   "name": "omnishield",
   "long": "bt]:ally?(CHAMPION)?targeted?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally Champion targeted by enemy ability or attack: this unit instantly swaps places with targeted champion.",
   "color": [0,0,153],
   "color2": [153,255,255],
   "symbol1": "\ue905"
 }, {
   "id": "46",
   "cat": "official",
   "name": "envy",
   "long": "c]ru:thisset@type=\this&thisset@tier=\this",
   "text": "(Magic) Transform into target enemy unit type.",
   "color": [127,192,127],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\u2b50"
 }, {
   "id": "47",
   "cat": "official",
   "name": "splash",
   "long": "cs]ru:push#\\(mn:move@1(AWAY))?&freeze#flag@3-move",
   "text": "(Magic) Push enemy unit 1 space away from caster and freeze it for 2 turns.",
   "color": [0,153,255],
   "color2": [255,255,255],
   "symbol1": "\ue904"
 }, {
   "id": "48",
   "cat": "official",
   "name": "pike",
   "long": "bt]:targeted@(m*:attack)?attack",
   "text": "(Passive) On Melee Death from this location: Destroy the attacker.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\uEA5E"
 }, {
   "id": "49",
   "cat": "official",
   "name": "magicpush",
   "long": "1c]ru:push#\\(mn:move@3(AWAY))",
   "text": "[Pay 1]: (Magic) Push unit up to 3 spaces away from caster.",
   "color": [87,218,40],
   "color2": [200,255,200],
   "symbol1": "\u25cb",
   "symbol2": "\u2742"
 }, {
   "id": "50",
   "cat": "official",
   "name": "compel",
   "long": "cs]rn:compel#flag@2(ct]start?mn:move@-1(AWAY)",
   "text": "(Ranged) Compel enemy unit, making them move in the direction of this ability at the start of each turn, for 3 turns.",
   "color": [255,63,255],
   "color2": [255,255,255],
   "symbol1": "\u2661"
 }, {
   "id": "51",
   "cat": "official",
   "name": "butterfly",
   "text": "(Magic) Destroy self and mark location with effect after 20 turns, depending on target: Destroy by Magic if enemy, Enchant for 2 turns if ally, or revive this unit if empty.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\uE906"
 }, {
   "id": "52",
   "cat": "official",
   "name": "rush",
   "text": "Rush enemy, moving towards and pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
   "color": [255,0,0],
   "color2": [255,255,255],
   "color3": [189,189,189],
   "color4": [0,0,0],
   "symbol1": "\u2b24",
   "symbol2": "\u25cc"
 }, {
   "id": "53",
   "cat": "official",
   "name": "jumpattack",
   "long": "b]mu:attack",
   "text": "(Unblockable) Attack only.",
   "color": [255,0,0],
   "color2": [127,0,0]
 }, {
   "id": "54",
   "cat": "official",
   "name": "stone",
   "text": "[Pay 1]: (Magic) Create StonePillar in this empty location, or petrify enemy for 4 turns, making them unable to act.",
   "color": [94,94,94],
   "color3": [59,59,59],
   "color4": [0,0,0],
   "symbol1": "\u25ae",
   "symbol2": "\u25af"
 }, {
   "id": "55",
   "cat": "official",
   "name": "meteor",
   "text": "[Pay 2]: (Magic) After 6 turns any unit in the marked location is destroyed and all adjacent units are pushed away 1 space.",
   "color": [205,85,23],
   "color3": [0,0,0],
   "symbol1": "\uea78"
 }, {
   "id": "56",
   "cat": "official",
   "name": "verticalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue702"
 }, {
   "id": "57",
   "cat": "official",
   "name": "horizontalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue700"
 }, {
   "id": "58",
   "cat": "official",
   "name": "antidiagonalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue701"
 }, {
   "id": "59",
   "cat": "official",
   "name": "diagonalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue703"
 }, {
   "id": "60",
   "cat": "official",
   "name": "moveleapattack",
   "text": "Move or Leap-Attack.",
   "color": [0,0,255],
   "color3": [255,0,0],
   "symbol1": "\u26AB"
 }, {
   "id": "61",
   "cat": "official",
   "name": "verticalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [153,0,0],
   "symbol1": "\ue702"
 }, {
   "id": "62",
   "cat": "official",
   "name": "horizontalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [153,0,0],
   "symbol1": "\ue700"
 }, {
   "id": "63",
   "cat": "official",
   "name": "antidiagonalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [153,0,0],
   "symbol1": "\ue701"
 }, {
   "id": "64",
   "cat": "official",
   "name": "diagonalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [153,0,0],
   "symbol1": "\ue703"
 }, {
   "id": "65",
   "cat": "official",
   "name": "null",
   "text": "(Magic) Target enemy value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue907"
 }, {
   "id": "66",
   "cat": "official",
   "name": "void",
   "text": "[Pay 1]: (Ranged) Convert target enemy default moveset into basic move/teleport abilities, and negate their augments, if any.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\uea81"
 }, {
   "id": "0a",
   "cat": "variation",
   "name": "swap",
   "long": "b]mu:swap",
   "text": "(Unblockable) Swap places with ally.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "0b",
   "cat": "variation",
   "name": "swapenemy",
   "long": "b]mu:!ally?swap",
   "text": "(Unblockable) Swap places with enemy.",
   "color": [127,0,59],
   "hide": true
 }, {
   "id": "0c",
   "cat": "variation",
   "name": "swapall",
   "long": "b]mu:*ally?swap",
   "text": "(Unblockable) Swap places with unit.",
   "color": [127,105,0],
   "hide": true
 }, {
   "id": "9a",
   "cat": "variation",
   "name": "charmall",
   "long": "c]ru:*minion?charm#set@ally",
   "text": "(Magic) Charm enemy unit.",
   "color": [255,0,255],
   "symbol1": "\ufe62",
   "hide": true
 }, {
   "id": "15a",
   "cat": "variation",
   "name": "polymorphall",
   "long": "c]ru:set@type=(RANDOM)",
   "text": "(Magic) Polymorph target into random unit.",
   "color": [255,0,255],
   "symbol1": "\ufe62",
   "symbol2": "\u00d7",
   "hide": true
 }, {
   "id": "18a",
   "cat": "variation",
   "name": "protosorcerattack",
   "long": "3cs]ru:sorcerize#flag@2(2(RANGE)/@+(mu:attack))",
   "text": "[Pay 3]: (Magic) Sorcerize enemy unit, making them prone to melee attack from any caster's ally piece in Range 2, for 2 turns.",
   "color": [255,0,0],
   "color2": [0,0,0],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18b",
   "cat": "variation",
   "name": "protosorcerdeimmune",
   "long": "2s]:sorcerize#flag@2(LOSEIMMUNE)",
   "text": "[Pay 2]: Sorcerize enemy unit, making them lose any immunity for 2 turns.",
   "color": [0,178,255],
   "color2": [0,64,127],
   "color3": [0,255,255],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18c",
   "cat": "variation",
   "name": "protosorcerenchant",
   "long": "2cs]ru:sorcerize#flag@2(t]:death?enchant#flag@2(ENCHANT))",
   "text": "[Pay 2]: (Magic) Sorcerize enemy unit, making them enchant attacker on Death in 2 turns.",
   "color": [0,178,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18d",
   "cat": "variation",
   "name": "protosorcerdetarget",
   "long": "s]ru:sorcerize#flag@3-target",
   "text": "(Magic) Sorcerize enemy unit, making them unable to target units for 3 turns.",
   "color": [0,178,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\u00d7",
   "hide": true
 }, {
   "id": "19a",
   "cat": "variation",
   "name": "magicenchant",
   "long": "s]ru:ally?enchant#flag@2(ENCHANT)@(r*:attack)",
   "text": "(Magic) Enchant ally, making them immune to Magic and Ranged attacks for 2 turns.",
   "color": [255,102,0],
   "color2": [0,0,0],
   "color3": [255,178,0],
   "symbol1": "\u25cb",
   "hide": true
 }, {
   "id": "19b",
   "cat": "variation",
   "name": "omnienchant",
   "long": "3s]ru:ally?enchant#flag@2(ENHCANT)@(**:attack)",
   "text": "[Pay 3]: (Magic) Enchant ally, making them immune to enemy abilities or attacks for 2 turns.",
   "color": [208,208,127],
   "color2": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u25cb",
   "hide": true
 }, {
   "id": "25a",
   "cat": "variation",
   "name": "burn",
   "long": "bt]ru:start?attack",
   "text": "(Magic, Trigger) Enemy Unit: Instantly destroy this target at the start of your turn.",
   "color": [253,117,34],
   "color3": [127,59,17],
   "symbol1": "\uea15",
   "hide": true
 }, {
   "id": "25b",
   "cat": "variation",
   "name": "frostburn",
   "long": "st]ru:start?attack#flag@1-move",
   "text": "(Magic, Trigger) Enemy Unit: Instantly freeze this target for 1 turn at the start of your turn.",
   "color": [107,205,253],
   "color3": [59,108,127],
   "symbol1": "\uea21",
   "hide": true
 }, {
   "id": "27a",
   "cat": "variation",
   "name": "swapportal",
   "long": "pu]ru:A\\swap",
   "text": "(Magic) Target Unit is swapped with Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "color4": [0,0,0],
   "symbol1": "\u2609",
   "symbol2": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "49a",
   "cat": "variation",
   "name": "magicpull",
   "long": "1c]ru:pull#\\(mn:move@-3(AWAY))",
   "text": "[Pay 1]: (Magic) Pull unit up to 3 spaces towards caster.",
   "color": [155,20,208],
   "color2": [220,200,255],
   "symbol1": "\u25cb",
   "symbol2": "\u2742",
   "hide": true
 }, {
   "id": "31a",
   "cat": "variation",
   "name": "moveswap",
   "long": "b]mn:move/swap",
   "text": "Move or swap places with ally.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "34a",
   "cat": "variation",
   "name": "downgradenecromance",
   "long": "1cp]ru:ally?type==SKELETON?set@tier+=1/minion?(set@tier-=1/tier==0?attack)",
   "text": "[Pay 1]: (Magic) Upgrade ally Skeleton, Downgrade enemy minion, or destroy enemy Tier-1 minion.",
   "color": [0,0,0],
   "color2": [227,227,0],
   "symbol1": "\ue901",
   "hide": true
 }, {
   "id": "34b",
   "cat": "variation",
   "name": "destroynecromance",
   "long": "2cp]ru:ally?type==SKELETON?set@tier+=1/attack",
   "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or destroy enemy minion.",
   "color": [0,0,0],
   "color2": [227,113,0],
   "symbol1": "\ue901",
   "hide": true
 }, {
   "id": "35a",
   "cat": "variation",
   "name": "moveblock",
   "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move)",
   "text": "(Passive) Block one melee attack from this location, and lose this ability. \n(Active) Move only.",
   "color": [0,0,255],
   "color3": [255,255,255],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35b",
   "cat": "variation",
   "name": "rangedblock",
   "long": "bv]:block@(rn:attack)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one ranged destroy from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [127,255,127],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "37a",
   "cat": "variation",
   "name": "explosion",
   "long": "bt]:death?minion?attack",
   "text": "(Trigger) On Death: Destroy enemy minions in trigger area.",
   "color": [255,102,0],
   "symbol1": "\u25fc",
   "hide": true
 }, {
   "id": "41a",
   "cat": "variation",
   "name": "unattract",
   "long": "ct]ru:end?!ally?\\(mn:move@1(AWAY))",
   "text": "(Magic, Trigger) Enemy Unit: At the end of your opponent's turn, target moves 1 space away from this unit.",
   "color": [63,127,63],
   "color2": [255,255,255],
   "symbol1": "\u25c7",
   "hide": true
 }, {
   "id": "43a",
   "cat": "variation",
   "name": "beaconally",
   "long": "cu]ru:set@pos=Athis",
   "text": "(Magic) Target ally is teleported to Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "symbol1": "\u25ef",
   "symbol2": "o" /*25e6*/,
   "hide": true
 }, {
   "id": "44a",
   "cat": "variation",
   "name": "antigravity",
   "long": "1cu]ru:\\(mn:Amove@\this)",
   "text": "[Pay 1]: (Magic) Ability Target is moved to this unblocked empty space.",
   "color": [0,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25cc",
   "hide": true
 }, {
   "id": "44b",
   "cat": "variation",
   "name": "gravityfreeze",
   "long": "1cu]ru:\\(mn:move@A-(AWAY))&freeze#flag@3-move",
   "text": "[Pay 2]: (Magic) Move target unit in the direction of Ability Target until blocked or Ability Target is reached, then freeze target for 1 turn.",
   "color": [0,127,255],
   "color2": [255,255,255],
   "symbol1": "\u25ef",
   "hide": true
 }, {
   "id": "45a",
   "cat": "variation",
   "name": "meleeshieldall",
   "long": "bt]:ally?targeted@(mn:attack)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy normal attack: this unit instantly swaps places with targeted unit.",
   "color": [153,0,0],
   "color2": [255,158,153],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45b",
   "cat": "variation",
   "name": "spellshieldall",
   "long": "bt]:ally?targeted@(r*:*)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted unit.",
   "color": [153,78,0],
   "color2": [255,255,153],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45c",
   "cat": "variation",
   "name": "omnishieldall",
   "long": "bt]:ally?targeted?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy ability or attack: this unit instantly swaps places with targeted unit.",
   "color": [0,0,153],
   "color2": [153,255,255],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45d",
   "cat": "variation",
   "name": "spellshield",
   "long": "bt]:ally?(CHAMPION)?targeted@(r*:*)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally Champion targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted champion.",
   "color": [153,78,0],
   "color2": [255,255,153],
   "symbol1": "\ue905",
   "hide": true
 }, {
   "id": "48a",
   "cat": "variation",
   "name": "wisp",
   "long": "t]:targeted:(REFLECT)",
   "text": "(Passive) On Target from this location: Reflect ability.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\uEA14",
   "hide": true
 }, {
   "id": "60a",
   "cat": "variation",
   "name": "leapattack",
   "text": "Leap-Attack only.",
   "color": [127,127,127],
   "color2": [255, 255, 255],
   "color3": [255,0,0],
   "symbol1": "\u26AB",
   "hide": true
 }, {
   "id": "61a",
   "cat": "variation",
   "name": "verticalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue702",
   "hide": true
 }, {
   "id": "62a",
   "cat": "variation",
   "name": "horizontalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue700",
   "hide": true
 }, {
   "id": "63a",
   "cat": "variation",
   "name": "antidiagonalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue701",
   "hide": true
 }, {
   "id": "64a",
   "cat": "variation",
   "name": "diagonalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue703",
   "hide": true
 }, {
   "id": "31b",
   "cat": "limbo",
   "name": "ximaera",
   "long": "b]mu:move/*ally?swap",
   "text": "(Unblockable) Teleport or swap places with unit.",
   "color": [19,121,153],
   "hide": true
 }, {
   "id": "a1",
   "cat": "adoption",
   "name": "flirt",
   "long": "cs]ru:flag@3&charm#set@ally",
   "text": "(Magic) Flirt with enemy minion, charming them in 3 turns.",
   "color": [255,0,255],
   "symbol1": "\u2665",
   "hide": true
 }, {
   "id": "a2",
   "cat": "adoption",
   "name": "mutualpoison",
   "long": "s]ru:(thispoison#flag@3&attack)&poison#flag@3&attack",
   "text": "(Magic) Poison self and enemy unit, destroying them in 3 turns.",
   "color": [0,101,24],
   "symbol1": "\uea27",
   "hide": true
 }, {
   "id": "a3",
   "cat": "adoption",
   "name": "levitate",
   "long": "s]ru:flag@2-((mn:attack)/\\mn:attack)",
   "text": "(Magic) Levitate unit for 2 turns, making them unable to use or be targeted by normal Attacks.",
   "color": [121,19,153],
   "color3": [255,255,0],
   "symbol1": "^",
   "hide": true
 }, {
   "id": "a4",
   "cat": "adoption",
   "name": "notarget",
   "long": "v]:-\\**:*",
   "text": "(Passive) Can't be targeted from this location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2300",
   "hide": true
 }, {
   "id": "a5",
   "cat": "adoption",
   "name": "replaceabilitytarget",
   "long": "m]:(REPLACEABILITYTARGET)",
   "text": "Remove this unit's other Ability Targets, then this location becomes this unit's Ability Target.",
   "color": [0,0,0],
   "color2": [127,127,255],
   "symbol1": "\u2609",
   "hide": true
 }, {
   "id": "a6",
   "cat": "adoption",
   "name": "jumpallymoveattack",
   "long": "b]m(ALLYUNBLOCKABLE)n:move/attack",
   "text": "Move or Attack. Cannot be blocked by Ally units.",
   "color": [0,0,0],
   "symbol1": "\u25e0",
   "symbol2": "o" /*25e6*/,
   "hide": true
 }, {
   "id": "a7",
   "cat": "adoption",
   "name": "demote",
   "long": "3c]ru:set@type=(DEMOTION)",
   "text": "[Pay 3]: (Magic) Demote enemy champion, transforming them into their minion counterpart, if possible.",
   "color": [255,0,0],
   "color2": [241,241,140],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "a8",
   "cat": "adoption",
   "name": "backtech",
   "long": "1cs]ru:flag@3(t](\targeted)?mn:move@1(TOHOME))",
   "text": "[Pay 1]: (Magic) Back-tech unit, making them move 1 square in the opposite direction of target after targeting enemy for 3 turns.",
   "color": [127,127,191],
   "color3": [64,64,95],
   "symbol1": "\u25cc",
   "hide": true
 }, {
   "id": "55a",
   "cat": "limbo",
   "name": "destroysplash",
   "long": "1c]ru:attack&1(RANGE)\\Amove@1(AWAY))",
   "text": "[Pay 3]: (Magic) Destroy target and push adjacent enemy units 1 space away.",
   "color": [0,101,24],
   "color2": [255,255,255],
   "symbol1": "\u2747",
   "hide": true
 }, {  
   "id": "1a",
   "cat": "limited",
   "name": "moveattackswap",
   "long": "b]mn:move/attack/swap",
   "text": "Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
    "id": "27b",
    "cat": "limited",
    "name": "magicportal",
    "long": "pu]ru:Aset@pos=\\this",
    "text": "(Magic) Ability Target is teleported to this empty location.",
    "color": [155,20,208],
    "color2": [255,255,255],
    "symbol1": "\u2609",
    "hide": true
 }, {
    "id": "43b",
    "cat": "limited",
    "name": "rangedbeacon",
    "long": "cu]rn:set@pos=Athis",
    "text": "(Ranged) Target unit is teleported to Ability Target.",
    "color": [155,20,208],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "52a",
    "cat": "limited",
    "name": "arcanerush",
    "long": "c]mu:(RUSH)",
    "text": "(Unblockable) Rush enemy, pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
    "color": [255,0,0],
    "color2": [200,200,200],
    "color3": [0,0,0],
    "color4": [0,0,0],
    "symbol1": "\u25cb",
    "symbol2": "\u2742",
    "hide": true
 }, {
    "id": "60b",
    "cat": "limited",
    "name": "jumpleap",
    "text": "(Unblockable) Move or Leap-Attack.",
    "color": [121,19,153],
    "color3": [0,255,0],
    "symbol1": "\u26AB",
    "hide": true
 }, {
   "id": "66a",
   "cat": "limited",
   "name": "oldvoid",
   "text": "(Magic) Convert target enemy default moveset into basic move/teleport abilities, and negate their augments, if any.",
   "color": [255,255,255],
   "color2": [0,0,0],
   "symbol1": "\uea81",
   "hide": true
 }, {
   "id": "65a",
   "cat": "limited",
   "name": "newnull",
   "text": "(Magic) Target enemy becomes unable to block movement and their value becomes 0.",
   "color": [255,255,255],
   "color2": [0,0,0],
   "symbol1": "\ue907",
   "hide": true
 }, {
   "id": "65b",
   "cat": "limited",
   "name": "newnullany",
   "text": "(Magic) Target becomes unable to block movement and their value becomes 0.",
   "color": [255,255,0],
   "color2": [0,0,0],
   "symbol1": "\ue907",
   "hide": true
 }, {
   "id": "53a",
   "cat": "limited",
   "name": "jumpattackswap",
   "long": "b]mu:attack/swap",
   "text": "(Unblockable) Attack or swap places with ally.",
   "color": [255,0,0],
   "color2": [127,0,0],
   "color3": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "53b",
   "cat": "limited",
   "name": "attackswap",
   "long": "b]mn:attack/swap",
   "text": "Attack or swap places with ally.",
   "color": [252,13,27],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
    "id": "4a",
    "cat": "limited",
    "name": "superjump",
    "long": "b]mz:move/attack",
    "text": "(Unstoppable) Move or Attack.",
    "color": [200,151,24],
    "hide": true
 }, {
    "id": "6a",
    "cat": "limited",
    "name": "fly",
    "long": "b]mz:move",
    "text": "(Unstoppable) Fly.",
    "color": [0,255,200],
    "hide": true
 }, {
   "id": "5a",
   "cat": "limited",
   "name": "superjumpswap",
   "long": "b]mz:move/attack/swap",
   "text": "(Unstoppable) Move, Attack, or swap places with ally.",
   "color": [210,210,255],
   "hide": true
 }, {
    "id": "7a",
    "cat": "limited",
    "name": "moonflare",
    "long": "b]rz:attack",
    "text": "(Magic) Destroy target, even if you can't act normally.",
    "color": [34,117,253],
    "hide": true
 }, {
   "id": "35c",
   "cat": "limited",
   "name": "superblock",
   "long": "bv]:block@(**:*)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one ability from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,255,0],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35d",
   "cat": "limited",
   "name": "ventus",
   "text": "(Passive) When targeted from this location, push enemy as far as possible away. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [127,0,255],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "0d",
   "cat": "limited",
   "name": "blockableswap",
   "long": "b]mn:swap",
   "text": "Swap places with ally.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "31c",
   "cat": "limited",
   "name": "blockableximaera",
   "long": "b]mn:move/*ally?swap",
   "text": "Move or swap places with unit.",
   "color": [19,121,153],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "b1",
   "cat": "limited",
   "name": "annihilate",
   "long": "c]rz:(REMOVE)",
   "text": "(Magic) Remove target from the game, ignoring all abilities, passives, and status effects.",
   "color": [200,200,200],
   "color3": [253,117,34],
   "symbol1": "\u2217",
   "hide": true
 }, {
    "id": "b2",
    "cat": "limited",
    "name": "clear",
    "long": "ms]:*ally?status?deflag?&*ally?enchant?deflag?&deflag",
    "text": "Clear unit and location, removing all status effects and location effects.",
    "color": [220,220,220],
    "color2": [255,255,255],
    "color3": [0, 0, 0],
    "symbol1": "\u2300",
    "hide": true
 }, {
    "id": "b3",
    "cat": "limited",
    "name": "decimate",
    "long": "c]ru:set@value-=3",
    "text": "(Magic) Target loses 3 value. If unit has 3 value or less, destroy it instead.",
    "color": [64,0,255],
    "color2": [0,0,0],
    "symbol1": "\ufe63",
    "hide": true
 }, {
    "id": "b4",
    "cat": "limited",
    "name": "banish",
    "long": "c]ru:*ally?set@pos=startpos",
    "text": "(Magic) Teleport unit back to starting position.",
    "color": [0,0,0],
    "color2": [0,127,127],
    "color3": [0,255,255],
    "color4": [0,255,255],
    "symbol1": "\u0058",
    "symbol2": "\u2219",
    "hide": true
 }, {
    "id": "b5",
    "cat": "limited",
    "name": "hobble",
    "long": "b]mf:move",
    "text": "Move only. Blocked by threatened squares.",
    "color": [0,0,255],
    "color2": [255,255,255],
    "hide": true
 }, {
    "id": "b6",
    "cat": "limited",
    "name": "protosorcertarget",
    "long": "s]ru:sorcerize#flag@3-!(target?!ally)",
    "text": "(Magic) Enrage target, forcing them to target enemy units if they are capable of targeting any for 3 turns.",
    "color": [255,0,0],
    "color2": [0,0,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b7",
    "cat": "limited",
    "name": "protosorcerdestroy",
    "long": "cs]ru:sorcerize#flag@3(t]:targeted?block@(**:*)&thisattack)",
    "text": "(Magic) Weaken target, causing them to be destroyed by any ability for 3 turns.",
    "color": [0,0,255],
    "color2": [0,0,0],
    "symbol1": "\uffec",
    "hide": true
 }, {
    "id": "b8",
    "cat": "limited",
    "name": "protosorcerantienchant",
    "long": "cs]ru:sorcerize#flag@3(@+(move:attack))",
    "text": "(Magic) Disenchant target, allowing them to be attacked by Move for 3 turns.",
    "color": [0,0,255],
    "color2": [0,0,127],
    "symbol1": "\uffec",
    "hide": true
 }, {
    "id": "b9",
    "cat": "limited",
    "name": "teledestroy",
    "long": "b]mu:move/ru:attack",
    "text": "(Unblockable) Teleport or (Magic) Destroy target.",
    "color": [253,117,34],
    "color3": [121,19,153],
    "symbol1": "\u25aa",
    "hide": true
 }, {
    "id": "b10",
    "cat": "limited",
    "name": "provoke",
    "long": "bt]:start?\(m*:attack)",
    "text": "(Trigger) Enemy Unit: At the start of your turn, target unit instantly attacks this unit.",
    "color": [255,255,255],
    "color2": [0,0,0],
    "color3": [255,255,255],
    "symbol1": "\u25c7",
    "hide": true
 }, {
    "id": "b11",
    "cat": "limited",
    "name": "bullrush",
    "long": "c]mn:push#\\(mn:move@3(AWAY))",
    "text": "Move to unit and push them up to 3 spaces away.",
    "color": [87,218,40],
    "color2": [255,255,255],
    "symbol1": "\u2b1a",
    "hide": true
 }, {
    "id": "b12",
    "cat": "limited",
    "name": "locationblock",
    "long": "m]:flag@4(-move&(BLOCK))",
    "text": "Marked location cannot be moved on if there isn't a unit there and blocks movement.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\u2742",
    "symbol2": "\u2747",
    "hide": true
 }, {
    "id": "b13",
    "cat": "limited",
    "name": "bonusmove",
    "long": "b]mn:move&(BONUS)",
    "text": "[Bonus Action] Move only.",
    "color": [0,0,255],
    "color3": [255,255,255],
    "symbol1": "\u22a1",
    "hide": true
 }, {
    "id": "b14",
    "cat": "limited",
    "name": "pullunder",
    "long": "c]ru:(EXILE)3@pos",
    "text": "(Magic) Exile unit, then return them in 3 turns.",
    "color": [0,80,150],
    "color3": [0,0,0],
    "symbol1": "\u2742",
    "hide": true
 }, {
    "id": "b15",
    "cat": "limited",
    "name": "lock",
    "text": "(Magic) Lock enemy unit, making them unable to act or be displaced for 3 turns.",
    "color": [100,100,150],
    "color3": [0,0,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b16",
    "cat": "limited",
    "name": "dummypolymorph",
    "text": "(Magic) Transform minion or champion into Dummy.",
    "color": [255,255,0],
    "color3": [0,0,0],
    "symbol1": "\uea00",
    "hide": true
 }, {
    "id": "b17",
    "cat": "limited",
    "name": "deepstrike",
    "text": "Exile self and mark location for return in 3 turns. If location is occupied upon return the occupant is removed from the game.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uec24",
    "hide": true
 }, {
    "id": "b18",
    "cat": "limited",
    "name": "goto",
    "long": "b]:move",
    "text": "Teleport self to this empty location.",
    "color": [102,0,102],
    "hide": true
 }, {
    "id": "b19",
    "cat": "limited",
    "name": "setpos",
    "long": "b]:move/attack",
    "text": "Teleport self to this empty location or attack target.",
    "color": [20,60,20],
    "hide": true
 }, {
    "id": "b20",
    "cat": "limited",
    "name": "zap",
    "long": "b]r:attack",
    "text": "Destroy target.",
    "color": [253,69,34],
    "hide": true
 }, {
    "id": "b21",
    "cat": "predux",
    "name": "specialtykill",
    "text": "(Magic) Enemy unit loses all abilities that aren’t a melee move or melee attack.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uea26",
    "hide": true
 }, {
    "id": "b22",
    "cat": "predux",
    "name": "bind",
    "text": "Bind enemy unit, removing all of its abilities on corresponding ability targets.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uec5d",
    "hide": true
 }, {
    "id": "b23",
    "cat": "predux",
    "name": "freezeshot",
    "text": "(Ranged) Destroy target and freeze adjacent units perpendicular to target for 1 turn. Cannot target units immune to freeze.",
    "color": [107,205,253],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "b24",
    "cat": "predux",
    "name": "invigorate",
    "text": "(Magic) Invigorate ally unit, making them able to act regardless of negative status effects for 2 turns.",
    "color": [0,0,0],
    "color2": [58,233,93],
    "symbol1": "\u274b",
    "hide": true
 }, {
    "id": "b25",
    "cat": "predux",
    "name": "agility",
    "text": "(Trigger) At the end of your turn teleport to this empty location before returning to your previous position at the end of your opponent's turn.",
    "color": [121,19,153],
    "color2": [255,255,255],
    "symbol1": "\u25c7",
    "symbol2": "\uea14",
    "hide": true
 }, {
    "id": "b26",
    "cat": "predux",
    "name": "confuse",
    "text": "(Magic) Confuse enemy unit for 3 turns, making them unable to target empty locations.",
    "color": [160,127,253],
    "symbol1": "\ue904",
    "hide": true
 }, {
    "id": "b27",
    "cat": "predux",
    "name": "autominotaur",
    "text": "(Trigger) Enemy King: Swap with target at the start of your turn.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [19,121,153],
    "symbol1": "\uec32",
    "hide": true
 }, {
    "id": "b28",
    "cat": "predux",
    "name": "morph",
    "text": "(Magic) Transform self into most recently fallen unit of value X or less, where X is twice this unit's value.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uea22",
    "hide": true
 }, {
    "id": "b29",
    "cat": "predux",
    "name": "finalblast",
    "text": "(Magic) Remove target from the game, ignoring all abilities, passives, and status effects; poison ally King for 3 turns, and lose this ability.",
    "color": [200,200,200],
    "color3": [127,59,17],
    "symbol1": "\u2728",
    "hide": true
 }, {
    "id": "b30",
    "cat": "predux",
    "name": "finalrespite",
    "text": "(Magic) Enchant self and target ally for 2 turns and lose 5 value. If this unit reaches 0 value this ability can't be used.",
    "color": [0,102,255],
    "color2": [0,0,0],
    "color3": [0,255,255],
    "symbol1": "\uea2a",
    "hide": true
 }, {
    "id": "b31",
    "cat": "limited",
    "name": "useability",
    "text": "(Ranged) Use Ability.",
    "color": [255,255,0],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "b32",
    "cat": "limited",
    "name": "magicuseability",
    "text": "(Magic) Use Ability.",
    "color": [255,255,0],
    "hide": true
 }, {
    "id": "b33",
    "cat": "limited",
    "name": "verticalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [0,0,0],
    "color2": [153,77,0],
    "symbol1": "\ue702",
    "hide": true
 }, {
    "id": "b34",
    "cat": "limited",
    "name": "horizontalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [0,0,0],
    "color2": [153,77,0],
    "symbol1": "\ue700",
    "hide": true
 }, {
    "id": "b35",
    "cat": "limited",
    "name": "antidiagonalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [0,0,0],
    "color2": [153,77,0],
    "symbol1": "\ue701",
    "hide": true
 }, {
    "id": "b36",
    "cat": "limited",
    "name": "diagonalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [0,0,0],
    "color2": [153,77,0],
    "symbol1": "\ue703",
    "hide": true
  }, {
   "id": "b37",
   "cat": "limited",
   "name": "verticalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue702",
   "hide": true
 }, {
   "id": "b38",
   "cat": "limited",
   "name": "horizontalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue700",
   "hide": true
 }, {
   "id": "b39",
   "cat": "limited",
   "name": "antidiagonalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue701",
   "hide": true
 }, {
   "id": "b40",
   "cat": "limited",
   "name": "diagonalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue703",
   "hide": true
 }, {
   "id": "c1",
   "cat": "custom",
   "name": "custom1",
   "long": "z]",
   "text": "Custom ability 1 (Double Click Menu Icon to Edit)",
   "color": [245,46,46],
   "symbol1": "1"
 }, {
   "id": "c2",
   "cat": "custom",
   "name": "custom2",
   "long": "z]",
   "text": "Custom ability 2 (Double Click Menu Icon to Edit)",
   "color": [84,99,255],
   "symbol1": "2"
 }, {
   "id": "c3",
   "cat": "custom",
   "name": "custom3",
   "long": "z]",
   "text": "Custom ability 3 (Double Click Menu Icon to Edit)",
   "color": [255,199,23],
   "symbol1": "3"
 }, {
   "id": "c4",
   "cat": "custom",
   "name": "custom4",
   "long": "z]",
   "text": "Custom ability 4 (Double Click Menu Icon to Edit)",
   "color": [31,158,64],
   "symbol1": "4"
 }, {
   "id": "c5",
   "cat": "custom",
   "name": "custom5",
   "long": "z]",
   "text": "Custom ability 5 (Double Click Menu Icon to Edit)",
   "color": [255,102,25],
   "symbol1": "5"
 }, {
   "id": "c6",
   "cat": "custom",
   "name": "custom6",
   "long": "z]",
   "text": "Custom ability 6 (Double Click Menu Icon to Edit)",
   "color": [36,212,196],
   "symbol1": "6"
 }, {
   "id": "c7",
   "cat": "custom",
   "name": "custom7",
   "long": "z]",
   "text": "Custom ability 7 (Double Click Menu Icon to Edit)",
   "color": [212,28,229],
   "symbol1": "7"
 }, {
   "id": "c8",
   "cat": "custom",
   "name": "custom8",
   "long": "z]",
   "text": "Custom ability 8 (Double Click Menu Icon to Edit)",
   "color": [74,69,89],
   "symbol1": "8"
 }, {
   "id": "c9",
   "cat": "custom",
   "name": "custom9",
   "long": "z]",
   "text": "Custom ability 9 (Double Click Menu Icon to Edit)",
   "color": [125,125,125],
   "symbol1": "9"
 }, {
   "id": "c10",
   "cat": "custom",
   "name": "custom10",
   "long": "z]",
   "text": "Custom ability 10 (Double Click Menu Icon to Edit)",
   "color": [200,200,200],
   "symbol1": "A"
 }, {
   "id": "c11",
   "cat": "custom",
   "name": "custom11",
   "long": "z]",
   "text": "Custom ability 11 (Double Click Menu Icon to Edit)",
   "color": [200,180,100],
   "symbol1": "B"
 }, {
   "id": "c12",
   "cat": "custom",
   "name": "custom12",
   "long": "z]",
   "text": "Custom ability 12 (Double Click Menu Icon to Edit)",
   "color": [255,0,0],
   "symbol1": "C"
 }, {
   "id": "c13",
   "cat": "custom",
   "name": "custom13",
   "long": "z]",
   "text": "Custom ability 13 (Double Click Menu Icon to Edit)",
   "color": [0,255,0],
   "symbol1": "D"
 }, {
   "id": "c14",
   "cat": "custom",
   "name": "custom14",
   "long": "z]",
   "text": "Custom ability 14 (Double Click Menu Icon to Edit)",
   "color": [0,0,255],
   "symbol1": "E"
 }, {
   "id": "c15",
   "cat": "custom",
   "name": "custom15",
   "long": "z]",
   "text": "Custom ability 15 (Double Click Menu Icon to Edit)",
   "color": [255,255,0],
   "symbol1": "F"
 }, {
   "id": "c16",
   "cat": "custom",
   "name": "custom16",
   "long": "z]",
   "text": "Custom ability 16 (Double Click Menu Icon to Edit)",
   "nobox": true
 }, {
    "id": "moonfox",
    "cat": "custom",
    "name": "custommoonfox",
    "long": "z]",
    "text": "Moonfox (Do not click!)",
    "color": [253,117,34],
    "symbol1": "\ue9f9",
    "hide": true
 }];

/* Self reminder
\\ when creating an ability of slightly different properties, prefer these changes:
\\ "\ufe62" Targets all
\\ "\u22c6" Magic
\\ "\u2295" Ranged
*/

PASSIVES = ["Does not block movement.",
    "Vanishes after attacking.",
    "Vanishes after Magic.",
    "Immune to Poison.",
    "Immune to Petrify.",
    "Immune to Freeze.",
    "(Ranged-Immune)",
    "(Magic-Immune)",
    "(Status-Immune)",
    "(Trigger-Immune)",
    "(Displacement-Immune)",
    "Promotes to PieceName[+].",
    "On Death: Lose 2[+1] morale.",
    "Can't be targeted beyond Range 2."
];
LABELS = {
    rank: ["Minion", "Champion", "King", "Outcast"],
    faction: ["Basic", "Clan", "Arcane", "Forest", "Unique", "Hero"],
    rarity: ["Common", "Rare", "Epic", "Legendary"]
}
LEVELS = ["base", "plus", "plusplus", "plusplusplus"];

TOOLTIPS = {
    ts0: "Pen Size 2",
    ts1: "Pen Size 3",
    ts2: "Pen Size 5",
    ts3: "Pen Size 10:\nI don't see a use of this outside erasers tbh",
    ts4: "Pen Size 1:\nFor those who are perfectionists",
    ts5: "Pen Size 0:\nI hope you like shapes with no outlines...",
    ts6: "Pen Size 1/2:\nIn case you are StratShotPlayer",
    ts7: "Pen Size 4:\nThick but not too thick",
    tf0: "Coloring of the base",
    tf1: "Coloring of the middle part (what do you call those? :v)",
    tf2: "Coloring of the \"head\" part",
    tf3: "Coloring of the darker parts in a piece",
    tt0: "Marker Tool:\nSmooths out after drawing.",
    tt1: "Line Tool",
    tt2: "Path Tool:\nHold Shift to start a new path.\nClick and drag to add new points.\nRelease Shift to finish.",
    tt3: "Eraser Tool:\nThat thing you guys asked me to keep.",
    tt4: "Line Eraser Tool:\nThat thing you guys asked me to keep even though it was a glitch.",
    tt5: "Closed Path Tool:\nHold Shift to start a new shape.\nClick and drag to add new points.\nRelease Shift to finish and close path.",
    do0: "Undo:\nUndo a Path.",
    do1: "Redo:\nRedo an undone Path.",
    do2: "Download:\nUseless.",
    do3: "Clear:\nRemove all Paths. Cannot be undone.",
};

var translation = ["進むや取ることができる。",
"このマスに進む。",
"このマスの駒を取る。",
"(防御不能) 進むや取ることができる。",
"(防御不能) 進む、取るや味方と入れ替えることができる。",
"(防御不能) テレポートする。",
"(魔法) 目標を撃つ。",
"[コスト２]: (魔法) 敵駒を味方の「ナエギ」に変化し、あるいは「ナエギ」を召喚する。",
"(魔法) 敵生駒を仲間とする。",
"[コスト４]: (魔法) コスト０の「ドクロ」を召喚する。",
"元地点から進むことができる。",
"(魔法) 敵駒を毒殺し、３ターン後で取る。",
"(魔法) 敵駒を凍り付き、３ターンまで何もできなくなる。",
"(遠距離) 敵駒を石化し、５ターンまで何もできなくなる。",
"(魔法) 目標をでたらめに選んだ生駒に変化する。",
"(魔法) 目標をでたらめに選んだ地点に移送する。",
"(防御不能) このマスに進んで、隣の駒をでたらめに移送する。",
"[コスト ３] 。",
"(魔法) 味方を加護し、２ターンまで近距離で取られなくなる。",
"[コスト １]: (魔法) 敵駒を「ユウレイ」に変化する。",
"(防御不能) 元地点からテレポートすることができる。",
"(条件付き) 近距離で取られるとき、可能ならここで味方の「スライム」を召喚する。",
"(条件付き) 近距離で取られるとき、可能なら１０コストを減ってここで復活する。",
"(防御不能) 敵生駒を取る。",
"(条件付き) 敵駒がいるとき、手番の始まりで目標を取る。",
"指定された目標",
"「指定された目標」をこのマスに移送する。",
"[コスト １]: (遠距離) 目標を３マスまで吹っ飛ばす。",
"[コスト ６]: (遠距離) 同じコスト「わかれたフタゴ」二つに、このマスに分割する。",
"(魔法) このマスに「王将」を移送する。",
"(防御不能) テレポートするや味方と入れ替えることができる。",
"(魔法) 自分を破壊して、最近取られた、この駒のコストの二倍以下の味方の成駒を復活する。",
"[コスト １]: (条件付き) 味方がいるとき、可能なら手番の始まりで目標を癒し、邪魔効果をなくする。",
"[コスト ２]: (魔法) 味方の「ドクロ」を強化し、あるいは敵生駒を味方の「ガイコツ」に変化する。",
"(受動) 一回だけ攻撃をブロックする。\n(能動) 進むや取ることができる。",
"(条件付き) 取られるとき、この範囲の敵全体を凍り付く。",
"(魔法) 自分をここに破壊して、敵駒を凍り付き、３ターンまで何もできなくなる。",
"(制止不能) 「コウモリ」に変化して、このマスに飛び越す。",
"一回だけ、味方の成駒と取り変えて、二つ駒を中間に移動する。",
"[コスト １]: 位置をマークして、４ターン後でいる駒を「魔法」で撃つ。",
"(魔法, 条件付き) 敵駒がいるとき、可能なら敵手番の終わりで目標を１マスで近くに移動する。",
"(遠距離) 目標を撃つ。",
"(魔法) 目標を「指定された目標」に移送する",
"[コスト １]: (魔法) 目標を「指定された目標」までに移動する。",
"(条件付き) 味方の成駒が敵ターゲットされるとき、自分を目標と入り替えて攻撃を受けてしまう。",
"(魔法) 敵駒の種類に変化する。",
"(魔法) 目標を１マスまで吹っ飛ばして、２ターンで凍り付ける。",
"(受動) このマスの駒で近距離で取られるとき、攻撃者と共に取られる。",
"[コスト １]: (魔法) 目標を３マスまで吹っ飛ばす。",
"(遠距離) 敵駒を魅惑され,３ターンまで敵手番の終わりで攻撃者へ移動してしまう。",
"(魔法) 自分を破壊し、この位置をマークする。この位置は２０ターン後で:\n敵駒がいれば、「魔法」で撃つ。\n味方の駒がいれば、２ターンで加護する。\n何もいなければ、自分を復活する。",
"敵駒を３マスまで吹っ飛ばす。何と衝突すれば、敵駒を取ることができる。",
"(防御不能) このマスの駒を取る。",
"[コスト １]: (魔法) 「石柱」を召喚し、あるいは敵駒を石化し、４ターンまで何もできなくなる。",
"[コスト ３]: (魔法) 位置をマークして、６ターン後でいる駒を撃って、そして隣の駒を１マスまで吹っ飛ばす。"];

/* K It's over

_.forEach(translation, function(m, ix) {
   MOVES[ix].text = m;
});

//*/

// ORGANIZATION PURPOSE ARRAYS
var SMOVE = {}, //Lookup key by move name
    IMOVE = [], //Lookup key by move id
    SLEVEL = [];//Lookup key by level id

function makeLookup () {
    _.forEach(MOVES, function(m, ix) {
        SMOVE[m.name] = ix;
        IMOVE[m.id] = ix;
    });

    _.forEach(LEVELS, function(m, ix) {
        SLEVEL[m] = ix;
    });
}
