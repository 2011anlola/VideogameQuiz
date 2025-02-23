const quizDataEasyEnglish = [
    {
      game: "Minecraft",
      question: "What block is commonly used for building houses and is found abundantly in the Overworld?",
      correctAnswer: "Oak Wood Planks",
      wrongAnswers: ["Cobblestone", "Dirt", "Sand"]
    },
    {
      game: "Super Mario Bros.",
      question: "What's the name of the princess Mario often needs to rescue?",
      correctAnswer: "Princess Peach",
      wrongAnswers: ["Princess Daisy", "Rosalina", "Pauline"]
    },
    {
      game: "Pac-Man",
      question: "What fruit is a power-up in this classic arcade game?",
      correctAnswer: "Cherry",
      wrongAnswers: ["Apple", "Banana", "Orange"]
    },
    {
      game: "Tetris",
      question: "What happens when you complete a horizontal line of blocks?",
      correctAnswer: "It disappears",
      wrongAnswers: ["Nothing", "It explodes", "It turns into a different shape"]
    },
    {
      game: "Space Invaders",
      question: "What are the enemies in this game?",
      correctAnswer: "Aliens",
      wrongAnswers: ["Robots", "Ghosts", "Zombies"]
    },
    {
      game: "Sonic the Hedgehog",
      question: "What does this speedy hedgehog collect?",
      correctAnswer: "Rings",
      wrongAnswers: ["Coins", "Gems", "Stars"]
    },
    {
      game: "Donkey Kong",
      question: "What does the main character throw at the hero?",
      correctAnswer: "Barrels",
      wrongAnswers: ["Bananas", "Rocks", "Coconuts"]
    },
    {
      game: "The Legend of Zelda",
      question: "What is the name of the hero in this series?",
      correctAnswer: "Link",
      wrongAnswers: ["Zelda", "Ganon", "Epona"]
    },
    {
      game: "Pokémon",
      question: "What do trainers use to catch Pokémon?",
      correctAnswer: "Poké Balls",
      wrongAnswers: ["Nets", "Traps", "Sticks"]
    },
    {
      game: "Mortal Kombat",
      question: "What is the phrase shouted during a finishing move?",
      correctAnswer: "Finish Him!",
      wrongAnswers: ["Get over here!", "Hadoken!", "Ka-boom!"]
    },
    {
      game: "Street Fighter II",
      question: "What special move does Ryu use?",
      correctAnswer: "Hadoken",
      wrongAnswers: ["Shoryuken", "Tatsumaki Senpukyaku", "Yoga Flame"]
    },
    {
      game: "Mega Man",
      question: "What does the main character shoot?",
      correctAnswer: "Mega Buster shots",
      wrongAnswers: ["Missiles", "Lasers", "Fireballs"]
    },
    {
      game: "Metroid",
      question: "Who is the protagonist of this series?",
      correctAnswer: "Samus Aran",
      wrongAnswers: ["Link", "Mega Man", "Fox McCloud"]
    },
    {
      game: "Kirby",
      question: "What is Kirby's signature ability?",
      correctAnswer: "Copy ability",
      wrongAnswers: ["Super speed", "Invisibility", "Super strength"]
    },
    {
      game: "Animal Crossing",
      question: "What currency is used in this game?",
      correctAnswer: "Bells",
      wrongAnswers: ["Coins", "Rupees", "Dollars"]
    },
    {
      game: "Harvest Moon",
      question: "What is the primary activity in this game?",
      correctAnswer: "Farming",
      wrongAnswers: ["Fighting", "Racing", "Building"]
    },
    {
      game: "Spyro the Dragon",
      question: "What does Spyro collect?",
      correctAnswer: "Gems",
      wrongAnswers: ["Coins", "Crystals", "Stars"]
    },
    {
      game: "Crash Bandicoot",
      question: "What does Crash collect?",
      correctAnswer: "Wumpa Fruit",
      wrongAnswers: ["Apples", "Bananas", "Oranges"]
    },
    {
      game: "Rayman",
      question: "What is Rayman missing?",
      correctAnswer: "Limbs",
      wrongAnswers: ["Shoes", "Gloves", "A hat"]
    },
    {
      game: "Banjo-Kazooie",
      question: "What do Banjo and Kazooie collect?",
      correctAnswer: "Jiggies",
      wrongAnswers: ["Coins", "Feathers", "Musical Notes"]
    },
    {
      game: "Conker's Bad Fur Day",
      question: "What animal is the main character?",
      correctAnswer: "Squirrel",
      wrongAnswers: ["Bear", "Fox", "Rabbit"]
    },
    {
      game: "Jak and Daxter",
      question: "What is Daxter?",
      correctAnswer: "Ottsel",
      wrongAnswers: ["Dog", "Cat", "Weasel"]
    },
    {
      game: "Ratchet & Clank",
      question: "What is Ratchet?",
      correctAnswer: "Lombax",
      wrongAnswers: ["Robot", "Alien", "Human"]
    },
    {
      game: "Sly Cooper",
      question: "What animal is Sly?",
      correctAnswer: "Raccoon",
      wrongAnswers: ["Fox", "Cat", "Mouse"]
    },
    {
      game: "Kingdom Hearts",
      question: "What weapon does Sora use?",
      correctAnswer: "Keyblade",
      wrongAnswers: ["Sword", "Staff", "Axe"]
    },
    {
      game: "Final Fantasy VII",
      question: "What is Cloud's iconic weapon?",
      correctAnswer: "Buster Sword",
      wrongAnswers: ["Masamune", "Gunblade", "Broadsword"]
    },
    {
      game: "Chrono Trigger",
      question: "What era does the main character start in?",
      correctAnswer: "Present",
      wrongAnswers: ["Past", "Future", "Apocalyptic Future"]
    },
    {
      game: "EarthBound",
      question: "What is Ness's primary weapon?",
      correctAnswer: "Baseball bat",
      wrongAnswers: ["Slingshot", "Yo-yo", "Frying pan"]
    },
    {
      game: "Super Metroid",
      question: "What planet does Samus explore?",
      correctAnswer: "Planet Zebes",
      wrongAnswers: ["Planet Tallon IV", "Planet SR388", "Aether"]
    },
    {
      game: "Castlevania: Symphony of the Night",
      question: "Who is the main character?",
      correctAnswer: "Alucard",
      wrongAnswers: ["Simon Belmont", "Richter Belmont", "Dracula"]
    },
      {
      game: "Mega Man X",
      question: "What is X's primary weapon?",
      correctAnswer: "X-Buster",
      wrongAnswers: ["Saber", "Shotgun", "Plasma Gun"]
    },
    {
      game: "Street Fighter",
      question: "What fighting style does Ryu use?",
      correctAnswer: "Ansatsuken",
      wrongAnswers: ["Muay Thai", "Tae Kwon Do", "Capoeira"]
    },
    {
        game: "Frogger",
        question: "What is the primary objective in this game?",
        correctAnswer: "Cross the road and river",
        wrongAnswers: ["Collect coins", "Defeat enemies", "Solve puzzles"]
    }
];

const quizDataModerateEnglish = [
    {
      game: "The Legend of Zelda: Ocarina of Time",
      question: "What instrument does the hero play to control time?",
      correctAnswer: "Ocarina",
      wrongAnswers: ["Flute", "Harp", "Lyre"]
    },
    {
      game: "Super Mario 64",
      question: "How many stars are there to collect in this game?",
      correctAnswer: "120",
      wrongAnswers: ["100", "150", "240"]
    },
    {
      game: "Metroid Prime",
      question: "What is the name of Samus's ship?",
      correctAnswer: "The Hunter",
      wrongAnswers: ["The Falcon", "The Milano", "The Normandy"]
    },
    {
      game: "Resident Evil 4",
      question: "What is the name of the village where the protagonist starts his mission?",
      correctAnswer: "El Pueblo",
      wrongAnswers: ["Los Pueblos", "La Aldea", "Villa Lobos"]
    },
    {
      game: "Silent Hill 2",
      question: "What is the name of the town where the game takes place?",
      correctAnswer: "Silent Hill",
      wrongAnswers: ["Brahms", "Red Creek", "Shepherd's Glen"]
    },
    {
      game: "Grand Theft Auto V",
      question: "What are the names of the three main characters?",
      correctAnswer: "Michael, Franklin, and Trevor",
      wrongAnswers: ["Niko, Roman, and Little Jacob", "Carl, Ryder, and Sweet", "Tommy, Lance, and Sonny"]
    },
    {
      game: "The Elder Scrolls V: Skyrim",
      question: "What is the name of the dragon that Alduin revives?",
      correctAnswer: "Sahloknir",
      wrongAnswers: ["Odahviing", "Paarthurnax", "Durnehviir"]
    },
    {
      game: "Fallout 3",
      question: "What is the name of the vault the player character comes from?",
      correctAnswer: "Vault 101",
      wrongAnswers: ["Vault 111", "Vault 87", "Vault 21"]
    },
    {
      game: "Mass Effect 2",
      question: "What is the name of the ship the player commands?",
      correctAnswer: "SSV Normandy SR-2",
      wrongAnswers: ["SSV Enterprise", "SSV Destiny", "SSV Daedalus"]
    },
    {
      game: "BioShock",
      question: "What is the name of the underwater city in the game?",
      correctAnswer: "Rapture",
      wrongAnswers: ["Columbia", "Poseidon", "Atlantis"]
    },
    {
      game: "Portal 2",
      question: "What is the name of the AI that guides the player?",
      correctAnswer: "GLaDOS",
      wrongAnswers: ["HAL 9000", "Skynet", "Cortana"]
    },
    {
      game: "Half-Life 2",
      question: "What is the name of the city the player starts in?",
      correctAnswer: "City 17",
      wrongAnswers: ["City 42", "City 27", "City 1"]
    },
    {
      game: "Team Fortress 2",
      question: "How many playable classes are there?",
      correctAnswer: "9",
      wrongAnswers: ["6", "10", "12"]
    },
    {
      game: "Left 4 Dead",
      question: "What are the common infected called?",
      correctAnswer: "The Horde",
      wrongAnswers: ["Zombies", "Ghouls", "Freaks"]
    },
    {
      game: "Counter-Strike: Global Offensive",
      question: "What is the name of the most iconic map?",
      correctAnswer: "Dust2",
      wrongAnswers: ["Inferno", "Mirage", "Cache"]
    },
    {
      game: "Dota 2",
      question: "How many players are on each team?",
      correctAnswer: "5",
      wrongAnswers: ["3", "4", "6"]
    },
    {
      game: "League of Legends",
      question: "What is the name of the in-game currency?",
      correctAnswer: "Gold",
      wrongAnswers: ["IP", "RP", "Essence"]
    },
    {
      game: "Overwatch",
      question: "How many roles are there in a team?",
      correctAnswer: "3 (Tank, Damage, Support)",
      wrongAnswers: ["2 (Attack, Defense)", "4 (Assault, Sniper, Medic, Heavy)", "5 (Leader, Soldier, Scout, Engineer, Medic)"]
    },
    {
      game: "Hearthstone",
      question: "How many classes are there?",
      correctAnswer: "11",
      wrongAnswers: ["9", "10", "12"]
    },
    {
      game: "StarCraft II",
      question: "What are the three playable races?",
      correctAnswer: "Terran, Zerg, Protoss",
      wrongAnswers: ["Human, Alien, Robot", "Earth, Mars, Venus", "Alliance, Horde, Scourge"]
    },
    {
      game: "Diablo III",
      question: "How many classes are there at launch?",
      correctAnswer: "5",
      wrongAnswers: ["3", "4", "6"]
    },
    {
      game: "Path of Exile",
      question: "What is the name of the primary currency?",
      correctAnswer: "Orbs",
      wrongAnswers: ["Coins", "Gems", "Shards"]
    },
    {
      game: "World of Warcraft",
      question: "What are the two main factions?",
      correctAnswer: "Alliance and Horde",
      wrongAnswers: ["Humans and Orcs", "Night Elves and Tauren", "Dwarves and Trolls"]
    },
    {
      game: "Guild Wars 2",
      question: "How many playable races are there?",
      correctAnswer: "5",
      wrongAnswers: ["4", "6", "8"]
    },
    {
      game: "Final Fantasy XIV",
      question: "What is the name of the main city in A Realm Reborn?",
      correctAnswer: "Ul'dah",
      wrongAnswers: ["Gridania", "Limsa Lominsa", "Ishgard"]
    },
    {
      game: "Monster Hunter World",
      question: "What is the name of the handler's Palico?",
      correctAnswer: "The Admiral",
      wrongAnswers: ["Meowscular Chef", "The Commander", "The Huntsman"]
    },
    {
      game: "Dark Souls",
      question: "What is the name of the undead settlement?",
      correctAnswer: "Undead Burg",
      wrongAnswers: ["Firelink Shrine", "Anor Londo", "Blighttown"]
    },
    {
      game: "Bloodborne",
      question: "What is the name of the city where the game takes place?",
      correctAnswer: "Yharnam",
      wrongAnswers: ["Lordran", "Lothric", "Drangleic"]
    },
    {
      game: "Sekiro: Shadows Die Twice",
      question: "What is the name of the protagonist's sword?",
      correctAnswer: "Kusabimaru",
      wrongAnswers: ["Ashina", "Fushigiri", "Mikiri"]
    },
    {
      game: "Nioh",
      question: "What is the name of the protagonist?",
      correctAnswer: "William Adams",
      wrongAnswers: ["Jin Sakai", "Hanzo Hattori", "Date Masamune"]
    },
    {
      game: "Devil May Cry 5",
      question: "Who is the son of Sparda?",
      correctAnswer: "Dante",
      wrongAnswers: ["Vergil", "Nero", "V"]
    },
    {
      game: "Bayonetta",
      question: "What is the name of Bayonetta's Umbra Watch?",
      correctAnswer: " Scarborough Fair",
      wrongAnswers: ["Onyx Roses", "Love is a Blue Shell", "Durga"]
    },
    {
      game: "Kingdom Hearts",
      question: "What is the name of Sora's best friend?",
      correctAnswer: "Riku",
      wrongAnswers: ["Kairi", "Mickey", "Donald"]
    }
]

const quizDataHardEnglish = [
    {
      game: "The Legend of Zelda: Majora's Mask",
      question: "What are the names of the three goddesses whose masks are required to stop the moon's fall?",
      correctAnswer: "Din, Nayru, and Farore",
      wrongAnswers: ["Hylia, Lanayru, and Gerudo", "The Great Deku Tree, Darunia, and Ruto", "The Queen of Fairies, the King of Ikana, and the Mayor of Clock Town"]
    },
    {
      game: "Super Mario Galaxy 2",
      question: "What is the name of the Luma who accompanies Mario on his adventure?",
      correctAnswer: "Lubba",
      wrongAnswers: ["Polari", "Rosalina", "Co-Star Luma"]
    },
    {
      game: "Metroid Fusion",
      question: "What is the name of the parasite that infects Samus?",
      correctAnswer: "X Parasite",
      wrongAnswers: ["Metroid DNA", "Ing", "Chozo essence"]
    },
    {
      game: "Resident Evil 2",
      question: "What is the name of the police station in Raccoon City?",
      correctAnswer: "Raccoon City Police Department (RPD)",
      wrongAnswers: ["Raccoon City Hall", "Umbrella Corporation HQ", "Kendo's Gun Shop"]
    },
    {
      game: "Silent Hill 3",
      question: "What is the name of the protagonist?",
      correctAnswer: "Heather Mason",
      wrongAnswers: ["James Sunderland", "Harry Mason", "Maria"]
    },
    {
      game: "Grand Theft Auto: San Andreas",
      question: "What is the name of the protagonist?",
      correctAnswer: "Carl Johnson (CJ)",
      wrongAnswers: ["Tommy Vercetti", "Niko Bellic", "Michael De Santa"]
    },
    {
      game: "The Elder Scrolls IV: Oblivion",
      question: "What is the name of the Daedric Prince of Madness?",
      correctAnswer: "Sheogorath",
      wrongAnswers: ["Mehrunes Dagon", "Molag Bal", "Hermaeus Mora"]
    },
    {
      game: "Fallout: New Vegas",
      question: "What is the name of the dam that is a key location in the game?",
      correctAnswer: "Hoover Dam",
      wrongAnswers: ["Parker Dam", "Glen Canyon Dam", "Grand Coulee Dam"]
    },
    {
      game: "Mass Effect 3",
      question: "What is the name of the Reaper homeworld?",
      correctAnswer: "Rannoch",
      wrongAnswers: ["Palaven", "Earth", "The Citadel"]
    },
    {
      game: "BioShock Infinite",
      question: "What is the name of the floating city?",
      correctAnswer: "Columbia",
      wrongAnswers: ["Rapture", "Dunwall", "Pandora"]
    },
    {
      game: "Portal",
      question: "What is the name of the testing facility the player navigates?",
      correctAnswer: "Aperture Science Enrichment Center",
      wrongAnswers: ["Black Mesa Research Facility", "Los Alamos National Laboratory", "MIT"]
    },
    {
      game: "Half-Life",
      question: "What is the name of the research facility where the game begins?",
      correctAnswer: "Black Mesa Research Facility",
      wrongAnswers: ["Aperture Science Enrichment Center", "Los Alamos National Laboratory", "MIT"]
    },
    {
      game: "Team Fortress Classic",
      question: "What company developed this game?",
      correctAnswer: "Valve Corporation",
      wrongAnswers: ["Epic Games", "Activision", "Blizzard Entertainment"]
    },
    {
      game: "Left 4 Dead 2",
      question: "What are the names of the four survivors in the sequel?",
      correctAnswer: "Nick, Rochelle, Ellis, and Coach",
      wrongAnswers: ["Bill, Zoey, Louis, and Francis", "Rick, Carl, Michonne, and Daryl", "Joel, Ellie, Tess, and Bill"]
    },
    {
      game: "Counter-Strike 1.6",
      question: "What does the acronym 'CT' stand for?",
      correctAnswer: "Counter-Terrorist",
      wrongAnswers: ["Counter-Strike", "Critical Team", "Combat Team"]
    },
    {
      game: "Dota",
      question: "What is the name of the Radiant's ancient?",
      correctAnswer: "The Tree of Life",
      wrongAnswers: ["The Frozen Throne", "The World Tree", "The Fountain of Life"]
    },
    {
      game: "League of Legends",
      question: "What is the name of the neutral monster that grants a powerful buff?",
      correctAnswer: "Baron Nashor",
      wrongAnswers: ["Dragon", "Rift Herald", "Elder Dragon"]
    },
    {
      game: "Overwatch",
      question: "What is the name of the organization that the heroes belong to?",
      correctAnswer: "Overwatch",
      wrongAnswers: ["Talon", "Blackwatch", "Vishkar Corporation"]
    },
    {
      game: "Hearthstone",
      question: "What is the name of the card pack that rotates out of standard format each year?",
      correctAnswer: "Standard",
      wrongAnswers: ["Wild", "Classic", "Expansion"]
    },
    {
      game: "StarCraft",
      question: "What is the name of the Zerg queen unit?",
      correctAnswer: "Queen",
      wrongAnswers: ["Larva", "Overlord", "Hydralisk"]
    },
    {
      game: "Diablo II",
      question: "What are the names of the five playable acts?",
      correctAnswer: "I, II, III, IV, and V",
      wrongAnswers: ["A, B, C, D, and E", "North, East, South, West, and Central", "Alpha, Beta, Gamma, Delta, and Epsilon"]
    },
    {
      game: "Path of Exile",
      question: "What is the name of the endgame map system?",
      correctAnswer: "The Atlas of Worlds",
      wrongAnswers: ["The Labyrinth", "The Crucible", "The Vaal Temple"]
    },
    {
      game: "World of Warcraft",
      question: "What is the name of the final boss in the Wrath of the Lich King expansion?",
      correctAnswer: "The Lich King",
      wrongAnswers: ["Kil'jaeden", "Illidan Stormrage", "Deathwing"]
    },
    {
      game: "Guild Wars",
      question: "What are the names of the original three campaigns?",
      correctAnswer: "Prophecies, Factions, and Nightfall",
      wrongAnswers: ["Core, Factions, and Nightfall", "Prophecies, Ascalon, and Nightfall", "Factions, Nightfall, and Eye of the North"]
    },
    {
      game: "Final Fantasy XI",
      question: "What is the name of the main continent?",
      correctAnswer: "Vana'diel",
      wrongAnswers: ["Eorzea", "Hydaelyn", "Spira"]
    },
    {
      game: "Monster Hunter",
      question: "What is the name of the guild that hunters belong to?",
      correctAnswer: "Hunters Guild",
      wrongAnswers: ["Explorers' Guild", "Monster Slayers' Society", "The Commission"]
    },
    {
      game: "Dark Souls III",
      question: "What is the name of the final boss?",
      correctAnswer: "Soul of Cinder",
      wrongAnswers: ["Gael, Slave Knight", "Pontiff Sulyvahn", "Nameless King"]
    },
    {
      game: "Bloodborne",
      question: "What are the names of the two factions you can join?",
      correctAnswer: "The Healing Church and the Vilebloods",
      wrongAnswers: ["The Hunters and the Beasts", "The Choir and the School of Mensis", "The League and the Executioners"]
    },
    {
      game: "Sekiro: Shadows Die Twice",
      question: "What is the name of the sculptor who carves prosthetic limbs?",
      correctAnswer: "The Sculptor",
      wrongAnswers: ["Emma", "Lord Isshin Ashina", "Genichiro Ashina"]
    },
    {
      game: "Nioh 2",
      question: "What is the protagonist's special ability?",
      correctAnswer: "Yokai Shift",
      wrongAnswers: ["Living Weapon", "Guardian Spirit", "Ninjutsu"]
    },
    {
    game: "Devil May Cry",
    question: "What is the name of Dante's sword?",
    correctAnswer: "Rebellion",
    wrongAnswers: ["Alastor", "Force Edge", "Sparda"]
    },
    {
    game: "Bayonetta 2",
    question: "What is the name of Bayonetta's rival?",
    correctAnswer: "Jeanne",
    wrongAnswers: ["Rosa", "Luka", "Rodin"]
    },
    {
    game: "Kingdom Hearts II",
    question: "What organization does Roxas belong to?",
    correctAnswer: "Organization XIII",
    wrongAnswers: ["Organization I", "Organization X", "Organization XV"]
    }
];