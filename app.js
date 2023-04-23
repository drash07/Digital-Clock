setInterval(timeDate, 1000);

function timeDate() {
    let time = new Date();
    let day = time.getDay();
    let month = time.getMonth();
    let date1 = time.getDate();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let am_pm = 'AM';
    
    if(hours >= 12) {
        hours -= 12;
        am_pm = 'PM';
    }
    if(hours === 0) {
        hours = 12;
        am_pm = 'AM';
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    date1 = date1 < 10 ? "0" + date1 : date1;

    let currentTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Staurday', 'Sunday'];
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
    
    let currentDate = days[day - 1] + ", " + months[month - 1] + " " + date1 + ", " + year;
    
    document.getElementById("date").innerHTML = currentDate;
    document.getElementById("time1").innerHTML = currentTime;
}

timeDate();