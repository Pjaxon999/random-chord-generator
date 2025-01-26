// Test external link
console.log("This is the chord randomizer speaking.");

// Grab the text content of the button and have it act as a toggle for the modes
let modeSelected = document.getElementById("mode-toggle").textContent;
document.getElementById("mode-toggle").addEventListener("click", modeToggler);
function modeToggler(){
    if (modeSelected === "Peter Mode"){
        modeSelected = "Craig Mode";
        document.getElementById("mode-toggle").textContent = "Craig Mode";
    }
    else {
        modeSelected = "Peter Mode";
        document.getElementById("mode-toggle").textContent = "Peter Mode";
    }
}

// Grab the button and chord output area from the DOM
const chordButton = document.getElementById("chord-button");
let chordName = document.getElementById("chord-name");


// Arrays containing Keys and Chord Qualities
const keys = ["A", "A#","Ab","B","Bb","C","C#","D","Db","D#","E","Eb","F","F#","G","Gb","G#"];
const qualities = ["", "min", "maj7", "min7", "7"];
const craigChords = ["A", "Amin", "C","D","Dmin","E","Emin","F","G"];

// Randomly Select a key and a quality, then update the chord-name element
let keysIndex
let qualitiesIndex
let craigChordsIndex

chordButton.addEventListener("click", buttonPress)
function buttonPress(){
    if (modeSelected === "Peter Mode") {
        peterMode();
    }
    else {
        craigMode();
    }
}

function craigMode(){
    craigChordsIndex = craigChords[Math.floor(Math.random() * craigChords.length)];
    chordName.textContent = `${craigChordsIndex}`;
}

function peterMode(){
    keysIndex = keys[Math.floor(Math.random() * keys.length)];
    qualitiesIndex = qualities[Math.floor(Math.random() * qualities.length)];
    chordName.textContent = `${keysIndex}${qualitiesIndex}`;
}