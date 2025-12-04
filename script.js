function updateTime() {
    var dt = new Date();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();

    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    var time = hours + ":" + formattedMinutes;

    console.log(time);
    $("#time").text(time);
}

function toggle_window(id) {
    $(id).toggle();
    $(id + '-task').toggle();
}

function mini_window(id) {
    $(id).toggle();
}

updateTime();


$(document).ready(function () {
    setInterval(updateTime, 50000);

    // about me section
    $("#aboutme").hide();
    $("#aboutme-task").hide();

    $("#aboutme-icon").click(function () {
        toggle_window("#aboutme")
    })

    $("#close-aboutme").click(function () {
        toggle_window("#aboutme")
    })

    $("#mini-aboutme").click(function () {
        mini_window("#aboutme")
    })

    $("#aboutme-task").click(function () {
        mini_window("#aboutme")
    })
});