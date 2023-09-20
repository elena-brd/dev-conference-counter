const countdown = document.querySelector('.countdown');


const expectedDate = new Date('Jul 5 2024 9:00:00').getTime();


const intervalCounter = setInterval(() => {
    const date = new Date().getTime()
    const timer = expectedDate - date;

    // time calculations
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timer % (1000 * 60)) / 1000);

    // display time
    countdown.innerHTML = `
    <div class="days">
    ${days}
    <span>Days</span>
    </div>

    <div class="hours">
    ${hours}
    <span>Hours</span>
    </div>

    <div class="minutes">
    ${mins}
    <span>Minutes</span>
    </div>

    <div class="seconds">
    ${seconds}
    <span>Seconds</span>
    </div>    
    `
}, 1000);

