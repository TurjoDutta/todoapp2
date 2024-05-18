function updateTime() {
    var dt = new Date();
    var datetimeSpan = document.getElementById("datetime");
    datetimeSpan.innerHTML = dt.toLocaleString();
}

// Update time every second
setInterval(updateTime, 1000);