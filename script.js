function updateTime() {
    var dt = new Date();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();

    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    var time = hours + ":" + formattedMinutes;

    console.log(time);
    $("#time").text(time);
}

updateTime();


$(document).ready(function () {
    setInterval(updateTime, 50000);
});