$(document).ready(function () {

    //Array of military times to produce row elements
    const times = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    const currentTime = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentTime);
    //for each loop that takes each time in the above array and produces the necessary html with jquery
    times.forEach(time => {
        let am = "am";
        let pm = "pm";

        //check local storage for current time stored data and checks current hour with the moment.js library
        const timeCheck = window.localStorage.getItem(time);
        const currentHour = moment().hour();

        //init declaration of html elements with jquery
        let blockElement = $("<div>");
        let blockElementCol = $("<div>");
        let blockForm = $("<form>");
        let blockInGroup = $("<div>");
        let blockPrepend = $("<div>");
        let blockSpan = $("<span>");
        let blockInput = $("<input>");
        let blockAppend = $("<div>");
        let blockButton = $("<button>");

        //modification of html elements
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

        //construction of the time slot
        blockAppend.append(blockButton);
        blockPrepend.append(blockSpan);
        blockInGroup.append(blockPrepend);
        blockInGroup.append(blockInput);
        blockInGroup.append(blockAppend);
        blockForm.append(blockInGroup);
        blockElementCol.append(blockForm);
        blockElement.append(blockElementCol);
        $("span").attr("style", "width: 75px");

        //appending time slot to the html doc 
        $("#time-block").append(blockElement);


        //logic for coloring and disabling hours that have past, current hour, and hours left
        if (currentHour > time) {
            $(`#${time}`).addClass("bg-danger text-light");
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

    //sets local storage text and time values
    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;
        window.localStorage.setItem(time, text);
    })
})