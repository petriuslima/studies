window.navigator.getUserMedia = window.navigator.getUserMedia ||
  window.navigator.webkitGetUserMedia ||
  window.navigator.mozGetUserMedia;

var audio = document.getElementById("output");

window.navigator.getUserMedia(
  { audio: true },
  function(stream) {
    audio.src = window.URL.createObjectURL(stream);
    audio.play();
  },
  function(err) {
    console.log("Error: " + err.name);
  }
);