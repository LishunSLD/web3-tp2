import * as Tone from "tone.js";

const player = new Tone.Player("../../assets/audio/the_setup_stealth.mp3").toDestination();

document.querySelector(".buttonstart").addEventListener("click", async () => {
    await Tone.start();

    Tone.loaded().then(() => {
        player.start();
    });
});

document.querySelector(".buttonstop").addEventListener("click", () => {
    player.stop();
});