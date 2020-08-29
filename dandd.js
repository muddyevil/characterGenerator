// race

function setRace() {

// Randomise Race

let raceArr = ["Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Satyr", "Shifter", "Simic Hybrid", "Siren", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Verdan", "Warforged", "Yuan-Ti Pureblood"];

let race = raceArr[Math.floor(Math.random()*raceArr.length)];

console.log(race);

// Subraces

if (race === "Aasimar") {
    let aasArr = ["Fallen Aasimar", "Protector Aasimar", "Scourge Aasimar", "Variant Aasimar"];
    let aas = aasArr[Math.floor(Math.random()*aasArr.length)];
    console.log(aas);
} else if (race === "Dwarf") {
    let dwaArr = ["Grey Dwarf", "Hill Dwarf", "Mark of Warding Dwarf", "Mountain Dwarf"];
    let dwa = dwaArr[Math.floor(Math.random()*dwaArr.length)];
    console.log(dwa);
} else if (race === "Elf") {
    let elfArr = ["Aereni High Elf", "Aereni Wood Elf", "Avariel", "Drow", "Eladrin", "High Elf", "Mark of Shadow Elf", "Sea Elf", "Shadar-Kai", "Valenar High Elf", "Valenar Wood Elf", "Wood Elf"];
    let elf = elfArr[Math.floor(Math.random()*elfArr.length)];
    console.log(elf);
} else if (race === "Genasi") {
    let genArr = ["Earth Genasi", "Air Genasi", "Fire Genasi", "Water Genasi"];
    let gen = genArr[Math.floor(Math.random()*genArr.length)];
    console.log(gen);
} else if (race === "Gith") {
    let gitArr = ["Githyanki", "Githzerai"];
    let git = gitArr[Math.floor(Math.random()*gitArr.length)];
    console.log(git);
} else if (race === "Gnome") {
    let gnoArr = ["Deep Gnome", "Forest Gnome", "Mark of Scribing Gnome", "Rock Gnome"];
    let gno = gnoArr[Math.floor(Math.random()*gnoArr.length)];
    console.log(gno);
} else if (race === "Halfling") {
    let halArr = ["Lightfoot Halfling", "Ghostwise Halfling", "Stout Halfling", "Mark of Hospitality Halfling", "Mark of Healing Halfling"];
    let hal = halArr[Math.floor(Math.random()*halArr.length)];
    console.log(hal);
} else if (race === "Human") {
    let humArr = ["Just a bog standard human", "Variant Human", "Mark of Sentinel Human", "Mark of Finding Human", "Mark of Handling Human", "Mark of Making Human", "Mark of Passage Human"];
    let hum = humArr[Math.floor(Math.random()*humArr.length)];
    console.log(hum);
} else if (race === "Shifter") {
    let shiArr = ["Beasthide Shifter", "Longtooth Shifter", "Swiftstride Shifter", "Wildhunt Shifter"];
    let shi = shiArr[Math.floor(Math.random()*shiArr.length)];
    console.log(shi);
} else if (race === "Tiefling") {
    let tieArr = ["Baalzebub Tiefling", "Dispater Tiefling", "Feral Tiefling", "Fierna Tiefling", "Glasya Tiefling", "Levistus Tiefling", "Mammon Tiefling", "Mephistopheles Tiefling", "Base Tiefling", "Variant Feral Tiefling", "Variant Tiefling", "Zariel Tiefling"];
    let tie = tieArr[Math.floor(Math.random()*tieArr.length)];
    console.log(tie);
} else {
}
}

setRace();

// class

function setClass () {

    let classArr = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Mystic", "Paladin", "Ranger", "Rogue", "Rune Scribe", "Sorceror", "Warlock", "Wizard", "Blood Hunter"];

    let clas = classArr[Math.floor(Math.random()*classArr.length)];

    console.log(clas);

// subclasses

    if (clas === "Artificer") {
        let artArr = ["Alchemist", "Artillerist", "Battle Smith"];

        let art = artArr[Math.floor(Math.random()*artArr.length)];

        console.log(art);
    } else if (clas === "Barbarian") {
    let barbArr = ["Ancestral Guardian", "Beast", "Battlerager", "Berserker", "Storm Herald", "Totem Warrior", "Wild Soul", "Zealot"];

    let barb = barbArr[Math.floor(Math.random()*barbArr.length)];

    console.log(barb);
} else if (clas === "Bard") {
    let bardArr = ["College of Creation", "College of Eloquence", "College of Glamour", "College of Lore", "College of Satire", "College of Spirits", "College of Swords", "College of Valor", "College of Whispers"];

    let bard = bardArr[Math.floor(Math.random()*bardArr.length)];

    console.log(bard);
} else if (clas === "Cleric") {
    let cleArr = ["Ambition Domain", "Arcana Domain", "Beauty Domain", "City Domain", "Darkness Domain", "Death Domain", "Destruction Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", "Love Domain", "Nature Domain", "Order Domain", "Protection Domain", "Solidarity Domain", "Strength Domain", "Tempest Domain", "Trickery Domain", "Twilight Domain", "Unity Domain", "War Domain", "Zeal Domain"];

    let cle = cleArr[Math.floor(Math.random()*cleArr.length)];

    console.log(cle);
} else if (clas === "Druid") {
    let druArr = ["Circle of Dreams", "Circle of the Land", "Circle of the Moon", "Circle of the Shepard", "Circle of Spores", "Circle of Stars", "Circle of Twilight", "Circle of Wildfire"];

    let dru = druArr[Math.floor(Math.random()*druArr.length)];

    console.log(dru);
} else if (clas === "Fighter") {
    let figArr = ["Arcane Archer", "Brute", "Battle Master", "Cavalier", "Champion", "Echo Knight", "Eldritch Knight", "Knight", "Monster Hunter", "Psi Knight", "Psychic Warrior", "Rune Night", "Samurai", "Scout", "Sharpshooter", "Slayer", "Warlord", "Weapon Master"];

    let fig = figArr[Math.floor(Math.random()*figArr.length)];

    console.log(fig);
} else if (clas === "Monk") {
    let monArr = ["Astral Self", "Drunken Master", "Four Elements", "Kensei", "Long Death", "Mercy", "Open Hand", "Shadow", "Soul Knife", "Sun Soul", "Tranquility"];

    let mon = monArr[Math.floor(Math.random()*monArr.length)];

    console.log(mon);
} else if (clas === "Mystic") {
    let mysArr = ["Avatar", "Awakened", "Immortal", "Nomad", "Soul Knife", "Wu Jen"];

    let mys = mysArr[Math.floor(Math.random()*mysArr.length)];

    console.log(mys);
} else if (clas === "Paladin") {
    let palArr = ["Oath of the Ancients", "Oath of Conquest", "Oath of the Crown", "Oath of Devotion", "Oath of Glory", "Oath of Heroism", "Oathbreaker", "Oath of Redemption", "Oath of Treachery", "Oath of Vengeance", "Oath of Watchers"];

    let pal = palArr[Math.floor(Math.random()*palArr.length)];

    console.log(pal);
} else if (clas === "Rune Scribe") {
    console.log();
} else if (clas === "Ranger") {
    let ranArr = ["Beast Conclave", "Deep Stalker Conclave", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Hunter Conclave", "Monster Slayer", "Primeval Guardian", "Swarmkeeper"];

    let ran = ranArr[Math.floor(Math.random()*ranArr.length)];

    console.log(ran);
} else if (clas === "Rogue") {
    let rogArr = ["Acrobat", "Arcane Trickster", "Assassin", "Inquisitive", "Mastermind", "Phantom", "Revived", "Scout", "Soulknife", "Swashbuckler", "Thief"];

    let rog = rogArr[Math.floor(Math.random()*rogArr.length)];

    console.log(rog);
}  else if (clas === "Sorcerer") {
    let sorArr = ["Aberrant Mind", "Clockwork Soul", "Divine Soul", "Draconic", "Favoured Soul", "Giant Soul", "Pheonix", "Psionic Soul", "Pyromancer", "Sea", "Shadow", "Stone", "Storm", "Wild"];

    let sor = sorArr[Math.floor(Math.random()*sorArr.length)];

    console.log(sor);
} else if (clas === "Warlock") {
    let warArr = ["Archfey", "Celestial", "Fiend", "Genie", "Ghost in the Machine", "Great Old One", "Hexblade", "Kraken", "Lolth", "Lurker in the Deep", "Noble Genie", "Raven Queen", "Seeker", "Undead", "Undying", "Undying Light"];

    let war = warArr[Math.floor(Math.random()*warArr.length)];

    console.log(war);
} else if (clas === "Wizard") {
    let wizArr = ["Abjuration", "Bladesinging", "Bladesinging but better", "Chronurgy", "Conjuration", "Divination", "Enchantmet", "Evocation", "Graviturgy", "Illusion", "Invention", "Lore Mastery", "Necromancy", "Onomancy", "Psionics", "Scribes", "Technomancy", "Theurgy", "Transmutation", "War"];

    let wiz = wizArr[Math.floor(Math.random()*wizArr.length)];

    console.log(wiz);
} else {
    console.log("");
};
};

setClass();
