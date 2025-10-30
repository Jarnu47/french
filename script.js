let pitch;
let speed;
let voices = [];
let selectedVoiceIndex = 0;
const allVoices = speechSynthesis.getVoices();
for (let i = 0; i < allVoices.length; i++) {
    if (allVoices[i].lang === 'fr-FR') {
        voices.push(allVoices[i]);
        document.getElementById("voices").innerHTML += `<option value="${i}">${allVoices[i].name}</option>`;
    }
}
function updateSlider(slider) {
    switch (slider) {
        case 'pitch':
            pitch = document.getElementById("pitch").value / 2;
            document.getElementById("pitchDisp").innerText = pitch * 100 + "%";
            break;
        case 'speed':
            speed = document.getElementById("speed").value / 4;
            document.getElementById("speedDisp").innerText = speed * 100 + "%";
            break;
    }
}
updateSlider('pitch');
updateSlider('speed');
function speak() {
    let message = document.getElementById("text-input").value;
    let utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'fr-FR';
    utterance.pitch = pitch;
    utterance.rate = speed;
    selectedVoiceIndex = document.getElementById("voices").value;
    utterance.voice = allVoices[selectedVoiceIndex];
    window.speechSynthesis.speak(utterance);
}