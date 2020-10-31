$(document).ready(function () {

    const times = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    times.forEach(time => {
        let am = "am";
        let pm = "pm";

        const timeCheck = window.localStorage.getItem(time);
        const currentHour = moment().hour();

        let blockElement = $("<div>");
        let blockElementCol = $("<div>");
        let blockForm = $("<form>");
        let blockInGroup = $("<div>");
        let blockPrepend = $("<div>");
        let blockSpan = $("<span>");
        let blockInput = $("<input>");
        let blockAppend = $("<div>");
        let blockButton = $("<button>");


        blockElement.addClass("row");
        blockElementCol.addClass("col-12");
        blockInGroup.addClass("input-group mb-3");
        blockPrepend.addClass("input-group-prepend");
        blockSpan.addClass("input-group-text");
        blockSpan.attr("id", "basic-addon1");
        blockSpan.text(`${time > 12 ? time - 12 : time}${time >= 12 ? pm : am}`);
        blockInput.attr("id", time);
        blockInput.attr("type", "text");
        blockInput.addClass("col-10");
        blockInput.attr("style", "height: 80px;");
        blockAppend.addClass("input-group-append");
        blockButton.addClass("btn btn-outline-secondary");
        blockButton.attr("type", "submit");
        blockButton.attr("id", "button-addon2");
        blockButton.text("+");

        blockAppend.append(blockButton);
        blockPrepend.append(blockSpan);
        blockInGroup.append(blockPrepend);
        blockInGroup.append(blockInput);
        blockInGroup.append(blockAppend);
        blockForm.append(blockInGroup);
        blockElementCol.append(blockForm);
        blockElement.append(blockElementCol);

        $("#time-block").append(blockElement);
        $("span").attr("style", "width: 75px");

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