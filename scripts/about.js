const video = document.getElementById('video');

video.addEventListener('loadedmetadata', () => {
  video.currentTime = 22;
});

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 75) video.pause();
});
