let btn = document.getElementById("btn");
      let voiceSelect = document.getElementById("voice-select");
      let textArea = document.getElementById("textarea");
      let speech = new window.SpeechSynthesisUtterance();
      let voices = [];

      btn.addEventListener("click", () => {
        speech.text = textArea.value;
        window.speechSynthesis.speak(speech);
      });

      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];

        voices.forEach((voice, i) => {
          voiceSelect.options[i] = new Option(voice.name, i);
        });
      };

      voiceSelect.addEventListener("change", ()=>{
        speech.voice = voices[voiceSelect.value]
      })