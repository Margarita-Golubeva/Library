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
    const songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3"];
    const videoClips = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"];
    const titles = ["Unknown (To You)", "Dream On", "Who Can You Trust", "Enemy", "Better", "Venom"];
    const artists = ["Jacob Banks", "Blacktop Mojo", "Ivy Levan", "Imagine Dragons", "Plumb", "Eminem"];

    // play/pause button
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

    // previous button
    prevBtn.addEventListener('click', function () {
        currentSong = (currentSong - 1 + songs.length) % songs.length;
        updateMedia();
    });

    // next button
    nextBtn.addEventListener('click', function () {
        currentSong = (currentSong + 1) % songs.length;
        updateMedia();
    });

    // update media (audio and video)
    function updateMedia() {
        audio.src = songs[currentSong];
        videoClip.src = videoClips[currentSong];
        audio.play();
        videoClip.play();
        playPauseBtn.innerText = 'Pause';
        document.querySelector('.song-details h2').innerText = titles[currentSong];
        document.querySelector('.song-details p').innerText = artists[currentSong];
        videoClip.poster = `cover${currentSong + 1}.jpg`;
    }

    // update current time and progress bar
    audio.addEventListener('timeupdate', function () {
        currentTime.innerText = formatTime(audio.currentTime);
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });



});
