document.addEventListener('DOMContentLoaded', function () {
    const musicPlayer = document.getElementById('musicPlayer');
    const endSound = new Audio("./Assets/Audio/Happy Birthday.mp3");

    musicPlayer.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    });

    musicPlayer.play();

    var audioPlayed = false;

    function updateCountdown() {
        var currentTime = new Date();
        var targetMonth = 4, targetDay = 13, targetHour = 0, targetMinute = 0, targetSecond = 0;
        var targetYear = 2024;
        var targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond);
        var timeLeft = targetDate - currentTime;
        var hours, minutes, seconds;
        var days, hours, minutes, seconds;
        if (timeLeft > 0) {
            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            audioPlayed = false;
        } else {
            days = 0
            hours = 0;
            minutes = 0;
            seconds = 0;
            if (!audioPlayed) {
                playEndSound();
                audioPlayed = true;
            }
            musicPlayer.pause();
        }

        document.getElementById("countdown").innerHTML = `
        <span class="digit">${formatTime(days)}</span> Ngày
        <span class="digit">${formatTime(hours)}</span> Giờ
        <span class="digit">${formatTime(minutes)}</span> Phút
        <span class="digit">${formatTime(seconds)}</span> Giây`;
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function playEndSound() {
        endSound.volume = 0.5;
        endSound.play();
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
