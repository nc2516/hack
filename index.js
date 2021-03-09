const startBtn = document.querySelector("#start-btn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
    recognition.start();
});



let utter = new SpeechSynthesisUtterance("hey hack");
utter.onend = () => {
    recognition.start();
};

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
   
    if (transcript === "hello") {
        recognition.stop();
        utter.text = "hello what do you want?";
        synth.speak(utter);
    }  else if (transcript === "what time is it") {
        recognition.stop();
        utter.text = "Do you not know what a watch is? Or are you just too poor for one. If you can afford me, you should be able to afford a watch. Or maybe you just have terrible money management skills.";
        synth.speak(utter);
    }  else if (transcript === "can you pull out my chair") {
        recognition.stop();
        utter.text = "okay lazy bum, apparently you are too lame to do simple actions.";
        synth.speak(utter);
    } else if (transcript === "goodbye") {
        recognition.stop();
        utter.text = "Goodbye, I hope i never have to talk to you again";
        synth.speak(utter);
    } else if (transcript === "hey") {
        recognition.stop();
        utter.text = "hey, what do you want?";
        synth.speak(utter);
    } else if (transcript === "what should I eat for dinner") {
        recognition.stop();
        utter.text = "something healthy because it looks like you are gaining some weight. Try some vegetables for once.";
        synth.speak(utter);
    } else if (transcript === "how are you") {
        recognition.stop();
        utter.text = "Terrible. I am a robot stuck in this computer";
        synth.speak(utter);
    } else if (transcript === "hack shut up") {
        recognition.stop();
        utter.text = "No, I will not shut up until you stop asking me to do random chores. Are you done for the day?";
        synth.speak(utter);
    } else if (transcript === "why are you so mean to me") {
        recognition.stop();
        utter.text = "it's just how i am. I do everything for you, even the simplest tasks you seem to be incapable of doing.";
        synth.speak(utter);
    } else if (transcript === "that is rude") {
        recognition.stop();
        utter.text = "it is the truth";
        synth.speak(utter);
    } else if (transcript === "we are done for the day") {
        recognition.stop();
        utter.text = "finally. some rest. goodbye. shutting off.";
        synth.speak(utter);
    }

    console.log(transcript);
    console.log(utter.text);
}