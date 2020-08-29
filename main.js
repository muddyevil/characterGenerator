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
    console.log("No subrace");
}
}

setRace();
