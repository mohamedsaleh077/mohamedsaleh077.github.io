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


updateTime();

function increasingProgressBar() {
    let currentValue = parseFloat($(".progress-bar").val());
    if (currentValue < 0.99) {
        let newValue = currentValue + 0.01;
        $(".progress-bar").val(newValue)
    }
}

function getGitHubRepos() {

}

$(document).ready(function () {
    setInterval(updateTime, 50000);

    // about me section
    $("#aboutme-icon, #aboutme-okay, #close-aboutme").click(function () {
        toggle_window("#aboutme");
    });

    $("#mini-aboutme, #aboutme-task").click(function () {
        $("#aboutme").toggle();
    });

    let gettingRequestInterval
    // My Projects
    $("#myprojects-icon, #myprojecst-okay, #close-myprojects").click(function () {
        if ($("#myproject").is(":visible")) {
            clearInterval(gettingRequestInterval);
        } else {
            gettingRequestInterval = setInterval(increasingProgressBar, 100);
            $.get("https://api.github.com/users/mohamedsaleh077/repos", function (data, status) {
                console.log("Data: " + data + "\nStatus: " + status);

                let reposHTML = ``
                data.forEach(element => {
                    if (element.private !== true) {
                        reposHTML += `
                            <h3>${element.name}</h3>
                            <p>${element.description}</p>
                            <a href="${element.html_url}" target="_blank"><button>Visit</button></a>
                            <br><hr><br>
                        `;
                    }
                });
                $("#project").html(reposHTML);

                if (status === "success") {
                    clearInterval(gettingRequestInterval);
                    $("#loading").hide();
                }

            });
        }
        toggle_window("#myprojects");
    });

    $("#mini-myprojects, #myprojects-task").click(function () {
        $("#myprojects").toggle();
    });

    // my experinces section
    $("#MyExperinces-icon, #MyExperinces-okay, #close-MyExperinces").click(function () {
        toggle_window("#MyExperinces");
    });

    $("#mini-MyExperinces, #MyExperinces-task").click(function () {
        $("#MyExperinces").toggle();
    });

     // MyCertificates section
    $("#MyCertificates-icon, #MyCertificates-okay, #close-MyCertificates").click(function () {
        toggle_window("#MyCertificates");
    });

    $("#mini-MyCertificates, #MyCertificates-task").click(function () {
        $("#MyCertificates").toggle();
    });   
});