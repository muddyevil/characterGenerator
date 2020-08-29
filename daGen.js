// origins

console.log("Warden:")

// gender 

let wardenGenderArr = ["Male", "Female"];

let wardenGender = wardenGenderArr[Math.floor(Math.random()*wardenGenderArr.length)];

console.log("Gender: " + wardenGender);

// race

let wardenRaceArr = ["Human", "Dwarf", "Elf"];

let wardenRace = wardenRaceArr[Math.floor(Math.random()*wardenRaceArr.length)];

console.log("Race: " + wardenRace);

// class 

function callClass() {
    if (wardenRace === "Dwarf") {
    let dwarfClassArr = ["Warrior", "Rogue"];
    let dwarfClass = dwarfClassArr[Math.floor(Math.random()*dwarfClassArr.length)];
    return dwarfClass;
} else {
    let classArr = ["Warrior", "Mage", "Rogue"];
    let humElfClass = classArr[Math.floor(Math.random()*classArr.length)];
    return humElfClass;
};
};

console.log("Class: " + callClass());


// background

if (callClass === "Mage") {
    console.log("Background: Magi")
} else if (wardenRace === "Human") {
    console.log("Background: Human Noble")
} else if (wardenRace === "Elf") {
    let elfBackArr = ["City Elf", "Dalish Elf"];
    let elfBack = elfBackArr[Math.floor(Math.random()*elfBackArr.length)];
    console.log("Background: " + elfBack);
} else if (wardenRace === "Dwarf") {
    let dwaBackArr = ["Dwarven Noble", "Dwarven Commoner"];
    let dwaBack = dwaBackArr[Math.floor(Math.random()*dwaBackArr.length)];
    console.log("Background: " + dwaBack);
};

// romance

if (wardenGender === "Male") {
    let maleRomanceArr = ["Morrigan", "Leliana", "Zevran"];
    let maleRomance = maleRomanceArr[Math.floor(Math.random()*maleRomanceArr.length)];
    console.log("Romancing: " + maleRomance);
} else {
    let femaleRomanceArr = ["Alistair", "Leliana", "Zevran"];
    let femaleRomance = femaleRomanceArr[Math.floor(Math.random()*femaleRomanceArr.length)];
    console.log("Romancing: " + femaleRomance);
};

// 2

console.log("Hawke:")

// gender

let hawkeGenderArr = ["Male", "Female"];

let hawkeGender = hawkeGenderArr[Math.floor(Math.random()*hawkeGenderArr.length)];

console.log("Gender: " + hawkeGender);

// class

let hawkeClassArr = ["Rogue", "Warrior", "Mage"];
let hawkeClass = hawkeClassArr[Math.floor(Math.random()*hawkeClassArr.length)];
console.log("Class: " + hawkeClass);

// romance

let hawkeRomanceArr = ["Fenris", "Anders", "Merrill", "Isabela"]
let hawkeRomance = hawkeRomanceArr[Math.floor(Math.random()*hawkeRomanceArr.length)];
console.log("Romancing: " + hawkeRomance);

// personality

let hawkePersonalityArr = ["Green", "Purple", "Red", "Mixed"]; 
let hawkePersonality = hawkePersonalityArr[Math.floor(Math.random()*hawkePersonalityArr.length)];
console.log("Personality: " + hawkePersonality);

// inquisition

console.log("Inquisitor:")

// gender

let inquisitorGenderArr = ["Male", "Female"];

let inquisitorGender = inquisitorGenderArr[Math.floor(Math.random()*inquisitorGenderArr.length)];

console.log("Gender: " + inquisitorGender);

// race


let inquisitorRaceArr = ["Human", "Dwarf", "Elf", "Qunari"];

let inquisitorRace = inquisitorRaceArr[Math.floor(Math.random()*inquisitorRaceArr.length)];

console.log("Race: " + inquisitorRace);

// class

function callInquisitorClass() {
    if (inquisitorRace === "Dwarf") {
    let dwarfClassArr = ["Warrior", "Rogue"];
    let dwarfClass = dwarfClassArr[Math.floor(Math.random()*dwarfClassArr.length)];
    return dwarfClass;
} else {
    let classArr = ["Warrior", "Mage", "Rogue"];
    let humElfClass = classArr[Math.floor(Math.random()*classArr.length)];
    return humElfClass;
};
};

console.log("Class: " + callInquisitorClass());

// romance

if (inquisitorRace === "Elf" & inquisitorGender === "Female") {
    let elfFemaleRomanceArr = ["Blackwall", "Cullen", "Iron Bull", "Josephine", "Sera", "Solas (I am so so sorry)"];
    let elfFemaleRomance = elfFemaleRomanceArr[Math.floor(Math.random()*elfFemaleRomanceArr.length)];
    console.log("Romancing: " + elfFemaleRomance);
} else if (inquisitorRace === "Human" & inquisitorGender === "Female") {
    let humanFemaleRomanceArr = ["Blackwall", "Cullen", "Iron Bull", "Josephine", "Sera"];
    let humanFemaleRomance = humanFemaleRomanceArr[Math.floor(Math.random()*humanFemaleRomanceArr.length)];
    console.log("Romancing: " + humanFemaleRomance);
} else if (inquisitorGender === "Female") {
    let femaleInqRomanceArr = ["Blackwall", "Sera", "Iron Bull", "Josephine"]
    let femaleInqRomance = femaleInqRomanceArr[Math.floor(Math.random()*femaleInqRomanceArr.length)];
    console.log("Romancing: " + femaleInqRomance)
} else {
    let maleInqRomanceArr = ["Dorian", "Cassandra", "The Iron Bull", "Josephine"];
    let maleInqRomance = maleInqRomanceArr[Math.floor(Math.random()*maleInqRomanceArr.length)];
    console.log("Romancing: " + maleInqRomance);
};
