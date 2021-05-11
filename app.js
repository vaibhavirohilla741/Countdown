const countdown = () => {
    const countDate = new Date('May 17, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const texthour = Math.floor((gap%day)/hour);
    const textminutes = Math.floor((gap%hour)/minutes);
    const textsecond = Math.floor((gap%minutes)/second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = texthour;
    document.querySelector(".minutes").innerText = textminutes;
    document.querySelector(".seconds").innerText = textsecond;


    };
    

setInterval(countdown,1000)
