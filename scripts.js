// Test external link
console.log("This is the chord randomizer speaking.")

// Grab the button and chord output area from the DOM
const chordButton = document.getElementById("chord-button");
let chordName = document.getElementById("chord-name")

// Arrays containing Keys and Chord Qualities
const keys = ["A", "A#","Ab","B","Bb","C","C#","D","Db","D#","E","Eb","F","F#","G","Gb","G#"]
const qualities = ["", "min", "maj7", "min7", "7"]

// Randomly Select a key and a quality, then update the chord-name element
let keysIndex
let qualitiesIndex

chordButton.addEventListener("click", function() {
    keysIndex = keys[Math.floor(Math.random() * keys.length)];
    qualitiesIndex = qualities[Math.floor(Math.random() * qualities.length)];
    chordName.textContent = `${keysIndex}${qualitiesIndex}`;
});