document.addEventListener('DOMContentLoaded', function () {
    
    const audio = document.getElementById('myAudio');
    const videoClip = document.getElementById('videoClip');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

    let currentSong = 0;
    const songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3"];
    const videoClips = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4"];
    const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];
    const artists = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"];

    // Play/Pause button click event
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            videoClip.play();
            playPauseBtn.innerText = 'Pause';
        } else {
            audio.pause();
            videoClip.pause();
            playPauseBtn.innerText = 'Play';
        }
    });

    
});
