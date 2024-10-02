 function speak() {
    var text = document.getElementById('text').value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }