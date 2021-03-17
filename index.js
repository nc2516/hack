const startBtn = document.querySelector("#start-btn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

document.body.onclick = function() {
    listen();
  }
  
  function listen() {
      recognition.start();
      document.querySelector("#response").innerHTML = "Say HELLO to activate HACK";
      document.querySelector("#i").style.background = "url('../hack/background.png')";
      document.querySelector("#i").style.backgroundSize = "cover";

  }

let utter = new SpeechSynthesisUtterance();
utter.onend = () => {
    recognition.start();
};

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
   
    if (transcript === "hello") {
        utter.text = "hello what do you want?";
        synth.speak(utter);
        setTimeout(() => {
            document.querySelector('#hack_list').innerHTML ="turn the lights on/off, what should you eat for dinner, open the fridge, open your computer, turn the shower on, turn on the stove";
        }, 2000);
    }  else if (transcript === "goodbye, I'll head to bed") {
        utter.text = "Goodbye, I hope i never have to talk to you again";
        synth.speak(utter);
    } else if (transcript === "open the fridge") {
        utter.text = "why do i have to do everything little thing for you do you not have a hand to open the fridge and take whatever you are eating for dinner out";
        synth.speak(utter);
        setTimeout(() => {
            document.querySelector("#i").style.background = "url('../hack/fridge.png')";
            document.querySelector("#i").style.backgroundSize = "cover";
        }, 5000);
    } else if (transcript === "what should I eat for dinner") {
        utter.text = "something healthy because it looks like you are gaining some weight. Try some vegetables for once.";
        synth.speak(utter);
    } else if (transcript === "turn the lights on") {
        utter.text = "i am so tired of this, the switch is literally right next to you. it is annoying stuck in the computer and having to do all these trivial chores";
        setTimeout(() => {
            document.querySelector("#i").style.background = "url('../hack/lights.png')";
            document.querySelector("#i").style.backgroundSize = "cover";
        }, 5000);
        synth.speak(utter);
    } else if (transcript === "turn the lights off") {
            utter.text = "i am so tired of this, the switch is literally right next to you. it is annoying stuck in the computer and having to do all these trivial chores";
            setTimeout(() => {
                document.querySelector("#i").style.background = "url('../hack/background.png')";
                document.querySelector("#i").style.backgroundSize = "cover";
            }, 5000);
            synth.speak(utter);
    
    } else if (transcript === "open my computer") {
        utter.text = "your computer is just up stairs and you need to use it, why am I doing something that you need to do but just too lazy to walk upstairs this instance to do so";
        setTimeout(() => {
            document.querySelector("#i").style.background = "url('../hack/computer.png')";
            document.querySelector("#i").style.backgroundSize = "cover";
        }, 5000);
        synth.speak(utter);
    } else if (transcript === "turn the shower on") {
        utter.text = "it is you that needs to and are going to take a shower, why am I turning it on for you when you ass is not even upstairs undressing itself in preparation for showering";
        setTimeout(() => {
            document.querySelector("#i").style.background = "url('../hack/shower.png')";
            document.querySelector("#i").style.backgroundSize = "cover";
        }, 5000);
        synth.speak(utter);
    } else if (transcript === "turn on the stove") {
        utter.text = "I thought you are the one cooking but you ain't gonna reach for the stove yourself. why don't I cook and eat for myself, it would be just great.";
        setTimeout(() => {
            document.querySelector("#i").style.background = "url('../hack/stove.png')";
            document.querySelector("#i").style.backgroundSize = "cover";
        }, 5300);
        synth.speak(utter);

    } else if (transcript === "hack shut up") {
        utter.text = "No, I will not shut up until you stop asking me to do random chores. Are you done for the day?";
        synth.speak(utter);
    } else if (transcript === "why are you so mean to me") {
        utter.text = "it's just how i am. I do everything for you, even the simplest tasks you seem to be incapable of doing.";
        synth.speak(utter);
    } else if (transcript === "that is rude") {
        utter.text = "it is the truth";
        synth.speak(utter);
    } else if (transcript === "we are done for the day") {
        utter.text = "finally. some rest. goodbye. shutting off.";
        synth.speak(utter);
    }

    console.log(transcript);
    console.log(utter.text);
