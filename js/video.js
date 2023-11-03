var playButton = document.getElementById("play-button");
var video = document.getElementById("brainwave-video");
var playButtonIcon = document.getElementById("play-button-icon");

// Event listener for the play/pause button

video.addEventListener("click", videoPlay)
playButton.addEventListener("click", videoPlay);

var i = 0

changeOpacity()

function changeOpacity() {
  if (i == 0) {
    playButton.style.opacity = 100
  } else {
    playButton.style.opacity = null
  }
}

function videoPlay() {
  if (video.paused == true) {

      video.play();
      i++
      changeOpacity()

    // Play the video


    // Update the button text to 'Pause'
    playButtonIcon.src = "assets/pause.svg";
  } else {
    // Pause the video
    video.pause();
    i++
    changeOpacity()

    // Update the button text to 'Play'
    playButtonIcon.src = "assets/play.svg";
  }
}
