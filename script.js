$(document).ready(function () {
    const currentTime = moment().format('MMMM Do YYYY');
    $("#time").text(currentTime);

    $("span").attr("style", "width: 75px");
    $("h1").attr("style", "text-align: center");

    const times = [7, 8, 9, 10, 22, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);

        const currentHour = moment().hour();
        console.log(currentHour);
        console.log(time);
        if (currentHour > time) {
            $(`#${time}`).addClass("bg-danger text-light");
            $(`#${time}`).attr("disabled", true);
        } else if (currentHour === time) {
            $(`#${time}`).addClass("bg-secondary text-light");
        } else {
            $(`#${time}`).addClass("bg-success text-light");
        }

        if (timeCheck === null) {
            window.localStorage.setItem(time, "");
        } else if (timeCheck.length > 0) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time));
        }
    })

    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;
        window.localStorage.setItem(time, text);
    })
})