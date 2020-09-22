/**Structure Explanation:
 * Name: used for CSS classes, short name. Changes flexible.
 * id  : used for Indexing/Export code. Changes kept to minimum.
 * cat : Deprecated(never used).
 * text: In-game description.
 * color(234): Border, Fill, Sym1, Sym2 color respectively.
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
   "text": "(Trigger) On Melee Death: Revive into this empty location with value decreased by 12. If this unit's value is less than 12 this ability cannot activate.",
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
   "color2": [200,255,200],
   "symbol1": "\u25fd"
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
   "name": "moveleapchain",
   "text": "Move or begin Leap-Attack chain, landing one space over the enemy and repeating consecutively in the same direction.",
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
   "name": "nullghost",
   "text": "(Magic) Target enemy can no longer block movement and their value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue907"
 }, {
   "id": "66",
   "cat": "official",
   "name": "void",
   "text": "[Pay 2]: (Ranged) Convert target enemy default moveset into basic move/teleport abilities, and negate their augments, if any.",
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
   "cat": "legacy",
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
   "name": "leapchain",
   "text": "Begin Leap-Attack chain, landing one space over the enemy and repeating consecutively in the same direction.",
   "color": [127,127,127],
   "color2": [255, 255, 255],
   "color3": [255,0,0],
   "symbol1": "\u26AB",
   "hide": true
 }, {
   "id": "60b",
   "cat": "legacy",
   "name": "moveleapattack",
   "text": "Move or Leap-Attack.",
   "color": [0,0,255],
   "color3": [255,0,0],
   "symbol1": "o",
   "hide": true
 }, {
   "id": "60c",
   "cat": "variation",
   "name": "leapattack",
   "text": "Leap-Attack only.",
   "color": [127,127,127],
   "color2": [255, 255, 255],
   "color3": [255,0,0],
   "symbol1": "o",
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
   "text": "(Path) Attack only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue703",
   "hide": true
 }, {
   "id": "65a",
   "cat": "legacy",
   "name": "null",
   "text": "(Magic) Target enemy value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [153,153,153],
   "symbol1": "\ue907",
   "hide": true
 }, {
   "id": "31b",
   "cat": "limbo",
   "name": "hiroshima",
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
   "color3": [153,0,153],
   "symbol1": "\u2665",
   "hide": true
 }, {
   "id": "a2",
   "cat": "adoption",
   "name": "mutualpoison",
   "long": "s]ru:(thispoison#flag@3&attack)&poison#flag@3&attack",
   "text": "(Magic) Poison self and enemy unit, destroying them in 3 turns.",
   "color": [0,101,24],
   "color3": [0,76,18],
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
   "symbol1": "\u028c",
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
   "id": "c1",
   "cat": "custom",
   "name": "custom1",
   "long": "z]",
   "text": "Custom spell 1 (Double Click Menu Icon to Edit)",
   "color": [245,46,46],
   "symbol1": "1"
 }, {
   "id": "c2",
   "cat": "custom",
   "name": "custom2",
   "long": "z]",
   "text": "Custom spell 2 (Double Click Menu Icon to Edit)",
   "color": [84,99,255],
   "symbol1": "2"
 }, {
   "id": "c3",
   "cat": "custom",
   "name": "custom3",
   "long": "z]",
   "text": "Custom spell 3 (Double Click Menu Icon to Edit)",
   "color": [255,199,23],
   "symbol1": "3"
 }, {
   "id": "c4",
   "cat": "custom",
   "name": "custom4",
   "long": "z]",
   "text": "Custom spell 4 (Double Click Menu Icon to Edit)",
   "color": [31,158,64],
   "symbol1": "4"
 }, {
   "id": "c5",
   "cat": "custom",
   "name": "custom5",
   "long": "z]",
   "text": "Custom spell 5 (Double Click Menu Icon to Edit)",
   "color": [255,102,25],
   "symbol1": "5"
 }, {
   "id": "c6",
   "cat": "custom",
   "name": "custom6",
   "long": "z]",
   "text": "Custom spell 6 (Double Click Menu Icon to Edit)",
   "color": [36,212,196],
   "symbol1": "6"
 }, {
   "id": "c7",
   "cat": "custom",
   "name": "custom7",
   "long": "z]",
   "text": "Custom spell 7 (Double Click Menu Icon to Edit)",
   "color": [212,28,229],
   "symbol1": "7"
 }, {
   "id": "c8",
   "cat": "custom",
   "name": "custom8",
   "long": "z]",
   "text": "Custom spell 8 (Double Click Menu Icon to Edit)",
   "color": [74,69,89],
   "symbol1": "8"
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
    "On Death: Lose 2[+1] morale."
];
LABELS = {
    rank: ["Minion", "Champion"],
    faction: ["Basic", "Clan", "Arcane", "Forest"],
    rarity: ["Common", "Rare", "Epic", "Legendary"]
}
LEVELS = ["base", "plus", "plusplus", "plusplusplus"];

TOOLTIPS = {
    ts0: "Pen Size 2",
    ts1: "Pen Size 3",
    ts2: "Pen Size 5",
    ts3: "Pen Size 10:\nI don't see a use of this outside erasers tbh",
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
"[コスト３] 。",
"(魔法) 味方を加護し、２ターンまで近距離で取られなくなる。",
"[コスト１]: (魔法) 敵駒を「ユウレイ」に変化する。",
"(防御不能) 元地点からテレポートすることができる。",
"(条件付き) 近距離で取られるとき、可能ならここで味方の「スライム」を召喚する。",
"(条件付き) 近距離で取られるとき、可能なら１０コストを減ってここで復活する。",
"(防御不能) 敵生駒を取る。",
"(条件付き) 敵駒がいるとき、手番の始まりで目標を取る。",
"指定された目標",
"「指定された目標」をこのマスに移送する。",
"[コスト１]: (遠距離) 目標を３マスまで吹っ飛ばす。",
"[コスト６]: (遠距離) 同じコスト「わかれたフタゴ」二つに、このマスに分割する。",
"(魔法) このマスに「王将」を移送する。",
"(防御不能) テレポートするや味方と入れ替えることができる。",
"(魔法) 自分を破壊して、最近取られた、この駒のコストの二倍以下の味方の成駒を復活する。",
"[コスト１]: (条件付き) 味方がいるとき、可能なら手番の始まりで目標を癒し、邪魔効果をなくする。",
"[コスト２]: (魔法) 味方の「ドクロ」を強化し、あるいは敵生駒を味方の「ガイコツ」に変化する。",
"(受動) 一回だけ攻撃をブロックする。\n(能動) 進むや取ることができる。",
"(条件付き) 取られるとき、この範囲の敵全体を凍り付く。",
"(魔法) 自分をここに破壊して、敵駒を凍り付き、３ターンまで何もできなくなる。",
"(制止不能) 「コウモリ」に変化して、このマスに飛び越す。",
"一回だけ、味方の成駒と取り変えて、二つ駒を中間に移動する。",
"[コスト１]: 位置をマークして、４ターン後でいる駒を「魔法」で撃つ。",
"(魔法, 条件付き) 敵駒がいるとき、可能なら敵手番の終わりで目標を１マスで近くに移動する。",
"(遠距離) 目標を撃つ。",
"(魔法) 目標を「指定された目標」に移送する",
"[コスト１]: (魔法) 目標を「指定された目標」までに移動する。",
"(条件付き) 味方の成駒が敵ターゲットされるとき、自分を目標と入り替えて攻撃を受けてしまう。",
"(魔法) 敵駒の種類に変化する。",
"(魔法) 目標を１マスまで吹っ飛ばして、２ターンで凍り付ける。",
"(受動) このマスの駒で近距離で取られるとき、攻撃者と共に取られる。",
"[コスト１]: (魔法) 目標を３マスまで吹っ飛ばす。",
"(遠距離) 敵駒を魅惑され,３ターンまで敵手番の終わりで攻撃者へ移動してしまう。",
"(魔法) 自分を破壊し、この位置をマークする。この位置は２０ターン後で:\n敵駒がいれば、「魔法」で撃つ。\n味方の駒がいれば、２ターンで加護する。\n何もいなければ、自分を復活する。",
"敵駒を３マスまで吹っ飛ばす。何と衝突すれば、敵駒を取ることができる。",
"(防御不能) このマスの駒を取る。",
"[コスト１]: (魔法) 「石柱」を召喚し、あるいは敵駒を石化し、４ターンまで何もできなくなる。",
"[コスト３]: (魔法) 位置をマークして、６ターン後でいる駒を撃って、そして隣の駒を１マスまで吹っ飛ばす。"];

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
