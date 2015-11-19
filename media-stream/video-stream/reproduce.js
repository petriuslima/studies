window.navigator.getUserMedia = window.navigator.getUserMedia ||
  window.navigator.webkitGetUserMedia ||
  window.navigator.mozGetUserMedia;

var video = document.getElementById("output");

window.navigator.getUserMedia(
  {
    video: {
      mandatory: {
        minWidth: 300,
        minHeight: 300
      }
    },
    audio: true
  },
  function(stream) {
    video.src = window.URL.createObjectURL(stream);
    video.play();
  },
  function(err) {
    console.log("Error: " + err.name);
  }
);