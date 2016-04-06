// dexnum and pokemon data must be put before the functions for script to work
// may need to store this in a separate .js page so it'll be less cluttered!

var dexnum;

var missingno = {
    objdexnum: 0,
    objspecies: "Missingno",
    objtype1: "Normal"
};

var bulbasaur = {
    objdexnum: 1,
    objspecies: "Bulbasaur",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    objflavor_y: "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
    objflavor_oras: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."
};

var ivysaur = {
    objdexnum: 2,
    objgeneration: "I",
    objspecies: "Ivysaur",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.",
    objflavor_y: "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s coming bloom.",
    objflavor_oras: "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon."
};

var venusaur = {
    objdexnum: 3,
    objgeneration: "I",
    objspecies: "Venusaur",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "By spreading the broad petals of its flower and catching the sun’s rays, it fills its body with power.",
    objflavor_y: "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
    objflavor_oras: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people."
};

var charmander = {
    objdexnum: 4,
    objgeneration: "I",
    objspecies: "Charmander",
    objtype1: "Fire",
    objflavor_x: "The flame on its tail indicates Charmander’s life force. If it is healthy, the flame burns brightly.",
    objflavor_y: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    objflavor_oras: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
};


var charmeleon = {
    objdexnum: 5,
    objgeneration: "I",
    objspecies: "Charmeleon",
    objtype1: "Fire",
    objflavor_x: "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
    objflavor_y: "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
    objflavor_oras: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
};

var charizard = {
    objdexnum: 6,
    objgeneration: "I",
    objspecies: "Charizard",
    objtype1: "Fire",
    objtype2: "Flying",
    objflavor_x: "When expelling a blast of superhot fire, the red flame at the tip of its tail burns more intensely.",
    objflavor_y: "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
    objflavor_oras: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
};

var squirtle = {
    objdexnum: 7,
    objgeneration: "I",
    objspecies: "Squirtle",
    objtype1: "Water",
    objflavor_x: "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
    objflavor_y: "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
    objflavor_oras: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
};

var wartortle = {
    objdexnum: 8,
    objgeneration: "I",
    objspecies: "Wartortle",
    objtype1: "Water",
    objflavor_x: "When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit.",
    objflavor_y: "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.",
    objflavor_oras: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler."
};

var blastoise = {
    objdexnum: 9,
    objgeneration: "I",
    objspecies: "Blastoise",
    objtype1: "Water",
    objflavor_x: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    objflavor_y: "The pressurized water jets on this brutal Pokémon’s shell are used for high-speed tackles.",
    objflavor_oras: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
};

var caterpie = {
    objdexnum: 10,
    objgeneration: "I",
    objspecies: "Caterpie",
    objtype1: "Bug",
    objflavor_x: "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
    objflavor_y: "Its feet have suction cups designed to stick to any surface. It tenaciously climbs trees to forage.",
    objflavor_oras: "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor."
};


var metapod = {
    objdexnum: 11,
    objgeneration: "I",
    objspecies: "Metapod",
    objtype1: "Bug",
    objflavor_x: "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
    objflavor_y: "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
    objflavor_oras: "The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell."
};

var butterfree = {
    objdexnum: 12,
    objgeneration: "I",
    objspecies: "Butterfree",
    objtype1: "Bug",
    objtype2: "Flying",
    objflavor_x: "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
    objflavor_y: "The wings are protected by rain-repellent dust. As a result, this Pokémon can fly about even in rain.",
    objflavor_oras: "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest."
};

var weedle = {
    objdexnum: 13,
    objgeneration: "I",
    objspecies: "Weedle",
    objtype1: "Bug",
    objtype2: "Poison",
    objflavor_x: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
    objflavor_y: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
    objflavor_oras: "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose)."
};

var kakuna = {
    objdexnum: 14,
    objgeneration: "I",
    objspecies: "Kakuna",
    objtype1: "Bug",
    objtype2: "Poison",
    objflavor_x: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
    objflavor_y: "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
    objflavor_oras: "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch."
};

var beedrill = {
    objdexnum: 15,
    objgeneration: "I",
    objspecies: "Beedrill",
    objtype1: "Bug",
    objtype2: "Poison",
    objflavor_x: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    objflavor_y: "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
    objflavor_oras: "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm."
};

var pidgey = {
    objdexnum: 16,
    objgeneration: "I",
    objspecies: "Pidgey",
    objtype1: "Normal",
    objtype2: "Flying",
    objflavor_x: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    objflavor_y: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
    objflavor_oras: "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings."
};

var pidgeotto = {
    objdexnum: 17,
    objgeneration: "I",
    objspecies: "Pidgeotto",
    objtype1: "Normal",
    objtype2: "Flying",
    objflavor_x: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
    objflavor_y: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.",
    objflavor_oras: "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws."
};

var pidgeot = {
    objdexnum: 18,
    objgeneration: "I",
    objspecies: "Pidgeot",
    objtype1: "Normal",
    objtype2: "Flying",
    objflavor_x: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
    objflavor_y: "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
    objflavor_oras: "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon."
};

var rattata = {
    objdexnum: 19,
    objgeneration: "I",
    objspecies: "Rattata",
    objtype1: "Normal",
    objflavor_x: "Living wherever there is food available, it ceaselessly scavenges for edibles the entire day.",
    objflavor_y: "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
    objflavor_oras: "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere."
};

var raticate = {
    objdexnum: 20,
    objgeneration: "I",
    objspecies: "Raticate",
    objtype1: "Normal",
    objflavor_x: "It whittles its constantly growing fangs by gnawing on hard things. It can chew apart cinder walls.",
    objflavor_y: "The webs on its hind legs enable it to cross rivers. It searches wide areas for food.",
    objflavor_oras: "Raticate’s sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses."
};

var spearow = {
    objdexnum: 21,
    objgeneration: "I",
    objspecies: "Spearow",
    objtype1: "Normal",
    objtype2: "Flying",
    objflavor_x: "Very protective of its territory, it flaps its short wings busily to dart around at high speed.",
    objflavor_y: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
    objflavor_oras: "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger."
};

var fearow = {
    objdexnum: 22,
    objgeneration: "I",
    objspecies: "Fearow",
    objtype1: "Normal",
    objtype2: "Flying",
    objflavor_x: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
    objflavor_y: "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.",
    objflavor_oras: "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey."
};

var ekans= {
    objdexnum: 23,
    objgeneration: "I",
    objspecies: "Ekans",
    objtype1: "Poison",
    objflavor_x: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    objflavor_y: "Moving silently and stealthily, it eats the eggs of birds, such as Pidgey and Spearow, whole.",
    objflavor_oras: "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head."
};

var arbok= {
    objdexnum: 24,
    objgeneration: "I",
    objspecies: "Arbok",
    objtype1: "Poison",
    objflavor_x: "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
    objflavor_y: "To intimidate foes, it spreads its chest wide and makes eerie sounds by expelling air from its mouth.",
    objflavor_oras: "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible."
};

var pikachu= {
    objdexnum: 25,
    objgeneration: "I",
    objspecies: "Pikachu",
    objtype1: "Electric",
    objflavor_x: "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose.",
    objflavor_y: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
    objflavor_oras: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it’s evidence that this Pokémon mistook the intensity of its charge. / This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up."
};

var raichu= {
    objdexnum: 26,
    objgeneration: "I",
    objspecies: "Raichu",
    objtype1: "Electric",
    objflavor_x: "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.",
    objflavor_y: "It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size.",
    objflavor_oras: "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon’s nest. / This Pokémon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electricity."
};

var sandshrew = {
    objdexnum: 27,
    objgeneration: "I",
    objspecies: "Sandshrew",
    objtype1: "Ground",
    objflavor_x: "It burrows and lives underground. If threatened, it curls itself up into a ball for protection.",
    objflavor_y: "Disliking water, it lives in deep burrows in arid areas. It can roll itself instantly into a ball.",
    objflavor_oras: "Sandshrew’s body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies. / Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep."
};

var sandslash = {
    objdexnum: 28,
    objgeneration: "I",
    objspecies: "Sandslash",
    objtype1: "Ground",
    objflavor_x: "If it digs at an incredible pace, it may snap off its spikes and claws. They grow back in a day.",
    objflavor_y: "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
    objflavor_oras: "Sandslash’s body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones. / Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pokémon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly with its sharp claws."
};

var nidoranf = {
    objdexnum: 29,
    objgeneration: "I",
    objspecies: "Nidoran♀",
    objtype1: "Poison",
    objflavor_x: "Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.",
    objflavor_y: "Small and very docile, it protects itself with its small, poisonous horn when attacked.",
    objflavor_oras: "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn."
};

var nidorina = {
    objdexnum: 30,
    objgeneration: "I",
    objspecies: "Nidorina",
    objtype1: "Poison",
    objflavor_x: "The female has a gentle temperament. It emits ultrasonic cries that have the power to befuddle foes.",
    objflavor_y: "When feeding its young, it first chews the food into a paste, then spits it out for the offspring.",
    objflavor_oras: "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others."
};

var nidoqueen = {
    objdexnum: 31,
    objgeneration: "I",
    objspecies: "Nidoqueen",
    objtype1: "Poison",
    objtype2: "Ground",
    objflavor_x: "It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators.",
    objflavor_y: "The body is covered by stiff, needlelike scales. If it becomes excited, the needles bristle outwards.",
    objflavor_oras: "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young."
};

var nidoranm = {
    objdexnum: 32,
    objgeneration: "I",
    objspecies: "Nidoran♂",
    objtype1: "Poison",
    objflavor_x: "It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.",
    objflavor_y: "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.",
    objflavor_oras: "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notice."
};

var nidorino = {
    objdexnum: 33,
    objgeneration: "I",
    objspecies: "Nidorino",
    objtype1: "Poison",
    objflavor_x: "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
    objflavor_y: "An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.",
    objflavor_oras: "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might."
};

var nidoking = {
    objdexnum: 34,
    objgeneration: "I",
    objspecies: "Nidoking",
    objtype1: "Poison",
    objtype2: "Ground",
    objflavor_x: "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn, as it contains venom.",
    objflavor_y: "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
    objflavor_oras: "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it."
};

var clefairy = {
    objdexnum: 35,
    objgeneration: "I",
    objspecies: "Clefairy",
    objtype1: "Fairy",
    objflavor_x: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
    objflavor_y: "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
    objflavor_oras: "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other."
};

var clefable = {
    objdexnum: 36,
    objgeneration: "I",
    objspecies: "Clefable",
    objtype1: "Fairy",
    objflavor_x: "Its hearing is so acute it can hear a pin drop over half a mile away. It lives on quiet mountains.",
    objflavor_y: "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
    objflavor_oras: "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights."
};

var vulpix = {
    objdexnum: 37,
    objgeneration: "I",
    objspecies: "Vulpix",
    objtype1: "Fire",
    objflavor_x: "When it is born, it has just one snow-white tail. The tail splits from its tip as it grows older.",
    objflavor_y: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
    objflavor_oras: "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled. / Inside Vulpix’s body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pokémon releases flames from its mouth to prevent its body from growing too hot."
};

var ninetales = {
    objdexnum: 38,
    objgeneration: "I",
    objspecies: "Ninetales",
    objtype1: "Fire",
    objflavor_x: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
    objflavor_y: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
    objflavor_oras: "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe’s mind. This Pokémon is said to live for a thousand years. / Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand human speech."
};

var jigglypuff = {
    objdexnum: 39,
    objgeneration: "I",
    objspecies: "Jigglypuff",
    objtype1: "Normal",
    objtype2: "Fairy",
    objflavor_x: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody.",
    objflavor_y: "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.",
    objflavor_oras: "Jigglypuff’s vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy. / When this Pokémon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life."
};

var wigglytuff = {
    objdexnum: 40,
    objgeneration: "I",
    objspecies: "Wigglytuff",
    objtype1: "Normal",
    objtype2: "Fairy",
    objflavor_x: "Their fur feels so good that if two of them snuggle together, they won’t want to be separated.",
    objflavor_y: "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
    objflavor_oras: "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon’s eyes, it is quickly washed away. / Wigglytuff’s body is very flexible. By inhaling deeply, this Pokémon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon."
};

var zubat = {
    objdexnum: 41,
    objgeneration: "I",
    objspecies: "Zubat",
    objtype1: "Poison",
    objtype2: "Flying",
    objflavor_x: "Even though it has no eyes, it can sense obstacles using ultrasonic waves it emits from its mouth.",
    objflavor_y: "It has no eyes. Instead, it relies on its ultrasonic cries for echolocation to flit about in darkness.",
    objflavor_oras: "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned. / Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside down."
};

var golbat = {
    objdexnum: 42,
    objgeneration: "I",
    objspecies: "Golbat",
    objtype1: "Poison",
    objtype2: "Flying",
    objflavor_x: "Once it bites, it will not stop draining energy from the victim even if it gets too heavy to fly.",
    objflavor_y: "Once it starts sucking blood, it does not stop until it is full. It flies at night in search of prey.",
    objflavor_oras: "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood. / Golbat bites down on prey with its four fangs and drinks the victim’s blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon."
};

var oddish = {
    objdexnum: 43,
    objgeneration: "I",
    objspecies: "Oddish",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
    objflavor_y: "Its scientific name is “Oddium Wanderus.” At night, it is said to walk nearly 1,000 feet on its two roots.",
    objflavor_oras: "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become. / Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees."
};

var gloom = {
    objdexnum: 44,
    objgeneration: "I",
    objspecies: "Gloom",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "Smells incredibly foul! However, around one out of a thousand people enjoy sniffing its nose-bending stink.",
    objflavor_y: "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
    objflavor_oras: "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma. / From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey."
};

var vileplume = {
    objdexnum: 45,
    objgeneration: "I",
    objspecies: "Vileplume",
    objtype1: "Grass",
    objtype2: "Poison",
    objflavor_x: "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
    objflavor_y: "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
    objflavor_oras: "Vileplume’s toxic pollen triggers atrocious allergy attacks. That’s why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be. / Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them."
};

var paras = {
    objdexnum: 46,
    objgeneration: "I",
    objspecies: "Paras",
    objtype1: "Bug",
    objtype2: "Grass",
    objflavor_x: "Growing out of the bug’s back are mushrooms called tochukaso. The mushrooms grow with the bug host.",
    objflavor_y: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
    objflavor_oras: "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life."
};

var parasect = {
    objdexnum: 47,
    objgeneration: "I",
    objspecies: "Parasect",
    objtype1: "Bug",
    objtype2: "Grass",
    objflavor_x: "A mushroom grown larger than the host’s body controls Parasect. It scatters poisonous spores.",
    objflavor_y: "The larger the mushroom on its back grows, the stronger the mushroom spores it scatters.",
    objflavor_oras: "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once."
};

var venonat = {
    objdexnum: 48,
    objgeneration: "I",
    objspecies: "Venonat",
    objtype1: "Bug",
    objtype2: "Poison",
    objflavor_x: "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
    objflavor_y: "Lives in the shadows of tall trees where it eats bugs. It is attracted by light at night.",
    objflavor_oras: "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey."
};

var venomoth = {
    objdexnum: 49,
    objgeneration: "I",
    objspecies: "Venomoth",
    objtype1: "Bug",
    objtype2: "Poison",
    objflavor_x: "The scales it scatters will paralyze anyone who touches them, making that person unable to stand.",
    objflavor_y: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
    objflavor_oras: "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness."
};

var diglett = {
    objdexnum: 50,
    objgeneration: "I",
    objspecies: "Diglett",
    objtype1: "Ground",
    objflavor_x: "Lives about one yard underground where it feeds on plant roots. It sometimes appears aboveground.",
    objflavor_y: "Its skin is very thin. If it is exposed to light, its blood heats up, causing it to grow weak.",
    objflavor_oras: "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables."
};

var dugtrio = {
    objdexnum: 51,
    objgeneration: "I",
    objspecies: "Dugtrio",
    objtype1: "Ground",
    objflavor_x: "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.",
    objflavor_y: "Extremely powerful, they can dig through even the hardest ground to a depth of over 60 miles.",
    objflavor_oras: "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly."
};

var meowth = {
    objdexnum: 52,
    objgeneration: "I",
    objspecies: "Meowth",
    objtype1: "Normal",
    objflavor_x: "It is nocturnal in nature. If it spots something shiny, its eyes glitter brightly.",
    objflavor_y: "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
    objflavor_oras: "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light."
};

var persian = {
    objdexnum: 53,
    objgeneration: "I",
    objspecies: "Persian",
    objtype1: "Normal",
    objflavor_x: "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
    objflavor_y: "Its lithe muscles allow it to walk without making a sound. It attacks in an instant.",
    objflavor_oras: "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon’s surrounding vicinity. It becomes docile if grabbed by the whiskers."
};

var psyduck = {
    objdexnum: 54,
    objgeneration: "I",
    objspecies: "Psyduck",
    objtype1: "Water",
    objflavor_x: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
    objflavor_y: "It has mystical powers but doesn’t recall that it has used them. That is why it always looks puzzled.",
    objflavor_oras: "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars. / If it uses its mysterious power, Psyduck can’t remember having done so. It apparently can’t form a memory of such an event because it goes into an altered state that is much like deep sleep."
};

var golduck = {
    objdexnum: 55,
    objgeneration: "I",
    objspecies: "Golduck",
    objtype1: "Water",
    objflavor_x: "It appears by waterways at dusk. It may use telekinetic powers if its forehead glows mysteriously.",
    objflavor_y: "The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc.",
    objflavor_oras: "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer. / Golduck is the fastest swimmer among all Pokémon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas."
};

var mankey = {
    objdexnum: 56,
    objgeneration: "I",
    objspecies: "Mankey",
    objtype1: "Fighting",
    objflavor_x: "It’s unsafe to approach if it gets violently enraged for no reason and can’t distinguish friends from foes.",
    objflavor_y: "It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason.",
    objflavor_oras: "When Mankey starts shaking and its nasal breathing turns rough, it’s a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath."
};

var primeape = {
    objdexnum: 57,
    objgeneration: "I",
    objspecies: "Primeape",
    objtype1: "Fighting",
    objflavor_x: "It stops being angry only when nobody else is around. To view this moment is very difficult.",
    objflavor_y: "It is always outrageously furious. If it gives chase, it will tenaciously track the target no matter how far.",
    objflavor_oras: "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time."
};

var growlithe = {
    objdexnum: 58,
    objgeneration: "I",
    objspecies: "Growlithe",
    objtype1: "Fire",
    objflavor_x: "Very friendly and faithful to people. It will try to repel enemies by barking and biting.",
    objflavor_y: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    objflavor_oras: "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won’t forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things."
};

var arcanine = {
    objdexnum: 59,
    objgeneration: "I",
    objspecies: "Arcanine",
    objtype1: "Fire",
    objflavor_x: "A Pokémon that has long been admired for its beauty. It runs agilely as if on wings.",
    objflavor_y: "Its magnificent bark conveys a sense of majesty. Anyone hearing it can’t help but grovel before it.",
    objflavor_oras: "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon’s body is its source of power."
};

var poliwag = {
    objdexnum: 60,
    objgeneration: "I",
    objspecies: "Poliwag",
    objtype1: "Water",
    objflavor_x: "Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern.",
    objflavor_y: "The direction of the spiral on the belly differs by area. It is more adept at swimming than walking.",
    objflavor_oras: "Poliwag has a very thin skin. It is possible to see the Pokémon’s spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it."
};

var poliwhirl = {
    objdexnum: 61,
    objgeneration: "I",
    objspecies: "Poliwhirl",
    objtype1: "Water",
    objflavor_x: "It can live in or out of water. When out of water, it constantly sweats to keep its body slimy.",
    objflavor_y: "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
    objflavor_oras: "The surface of Poliwhirl’s body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle."
};

var poliwrath = {
    objdexnum: 62,
    objgeneration: "I",
    objspecies: "Poliwrath",
    objtype1: "Water",
    objtype2: "Fighting",
    objflavor_x: "With its extremely tough muscles, it can keep swimming in the Pacific Ocean without resting.",
    objflavor_y: "A swimmer adept at both the front crawl and breaststroke. Easily overtakes the best human swimmers.",
    objflavor_oras: "Poliwrath’s highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort."
};

/* TEMPLATE
var ? = {
    objdexnum: 0,
    objgeneration: "I",
    objspecies: "",
    objtype1: "",
    objtype2: "",
    objflavor_x: "",
    objflavor_y: "",
    objflavor_oras: ""
};
*/
