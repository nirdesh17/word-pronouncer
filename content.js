document.addEventListener("dblclick", function() {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
      speakWord(selectedText);
    }
  });
  
  function speakWord(word) {
    var utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  }
  