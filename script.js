function clock(){
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var months = fullDate.toLocaleString('default', { month: 'long' });;
    var days = fullDate.getDate();
    var years = fullDate.getFullYear();
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (months < 10) {
        months = "0" + months;
    }
    if (days < 10) {
        days = "0" + days;
    }
    
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + minutes;
    document.getElementById('second').innerHTML = ": " + seconds;
    document.getElementById('month').innerHTML = months;
    document.getElementById('day').innerHTML = days;
    document.getElementById('year').innerHTML = years;
    }
    
    setInterval(clock, 1000)
    
    console.log(new Date)
    console.log('hello')