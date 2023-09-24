document.addEventListener('DOMContentLoaded', function () {
    
    const audio = document.getElementById('myAudio');
    const videoClip = document.getElementById('videoClip');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');
    const coverBox = document.querySelector(".cover-img");
    const cover = document.getElementById('cover');

    let currentSong = 0;
    const songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3"];
    const videoClips = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"];
    const titles = ["Unknown (To You)", "Dream On", "Who Can You Trust", "Enemy", "Better", "Venom"];
    const artists = ["Jacob Banks", "Blacktop Mojo", "Ivy Levan", "Imagine Dragons", "Plumb", "Eminem"];
    const covers = ["cover1.jpg", "cover2.jpg", "cover3.png", "cover4.jpg", "cover5.jpg", "cover6.jpg"];

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
        cover.src = covers[currentSong];

        audio.play();
        videoClip.play();
    
        playPauseBtn.innerText = 'Pause';
        document.querySelector('.song-details h2').innerText = titles[currentSong];
        document.querySelector('.song-details p').innerText = artists[currentSong];
    }
    

    // update current time and progress bar
    audio.addEventListener('timeupdate', function () {
        currentTime.innerText = formatTime(audio.currentTime);
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    // keyboard arrows
    function handleKeyPress(event) {
        if (event.keyCode === 39) {
            audio.currentTime += 5;
        } else if (event.keyCode === 37) {
            audio.currentTime -= 5;
        }
    };

    // listen for keyboard
    window.addEventListener('keydown', handleKeyPress);

    // update duration when audio is loaded
    audio.addEventListener('canplaythrough', function () {
        duration.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('loadedmetadata', function () {
        progressBar.value = 0;
    });

    window.onload = function () {
        const audio = document.getElementById("myAudio");
        const video = document.getElementById("videoClip");
        const progressBar = document.getElementById("progressBar");

        if (audio.paused) {
            playPauseBtn.innerText = 'Play';
        } else {
            playPauseBtn.innerText = 'Pause';
        }

        // progress bar change
        progressBar.addEventListener("input", function () {
            const seekTime = (audio.duration / 100) * progressBar.value;
            audio.currentTime = seekTime;
            video.currentTime = seekTime;
            progressBarInteracted = true;
        });
    
        // update the video time as the audio plays
        audio.addEventListener("timeupdate", function () {
            video.currentTime = audio.currentTime;
        });
    };

    // time format
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // play next song when the current song ends
    audio.addEventListener('ended', function () {
        currentSong = (currentSong + 1) % songs.length;
        updateMedia();
    });

    // initialize the media with the first song
    updateMedia();
 
});