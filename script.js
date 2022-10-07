// declare global variables
var timeCompare = 9;
var eventCompare = 9;

// updates every time block on refresh/page load
getLocal()

// Sets date inside the header of the page
var now = moment().format('MMMM do, YYYY');
$("#currentDay").text(`${now}`);

// function that checks current time against time blocks
//      if current time is > block turn it gray
//      if current time = block turn red
function changeBlockColor () {
    let currentTime = moment().hours()
    while (currentTime > timeCompare) {
        $(`#${timeCompare}`).css("background","gray")
        timeCompare++;
        if (timeCompare > 17) {
            return;
        }
    }
    if (currentTime === timeCompare) {
        $(`#${timeCompare}`).css("background","orange")
    }

}
changeBlockColor();

// gets local storage for all blocks on page load
function getLocal () {
    var user = localStorage.getItem(`task-9`)
    $(`.task-input-9`).append(user);
    var user = localStorage.getItem(`task-10`)
    $(`.task-input-10`).append(user);
    var user = localStorage.getItem(`task-11`)
    $(`.task-input-11`).append(user);
    var user = localStorage.getItem(`task-12`)
    $(`.task-input-12`).append(user);
    var user = localStorage.getItem(`task-13`)
    $(`.task-input-13`).append(user);
    var user = localStorage.getItem(`task-14`)
    $(`.task-input-14`).append(user);
    var user = localStorage.getItem(`task-15`)
    $(`.task-input-15`).append(user);
    var user = localStorage.getItem(`task-16`)
    $(`.task-input-16`).append(user);
    var user = localStorage.getItem(`task-17`)
    $(`.task-input-17`).append(user);
}
// save button puts text in taskBlock into local storage/pulls from local storage for each hour block
$(`.save-block-9`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-9`)
    $(`.task-input-9`).append(user);
    var task9 = $(`.task-input-9`).val();
    localStorage.setItem(`task-9`, task9);
})

$(`.save-block-10`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-10`)
    $(`.task-input-10`).append(user);
    var task9 = $(`.task-input-10`).val();
    localStorage.setItem(`task-10`, task9);
})

$(`.save-block-11`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-11`)
    $(`.task-input-11`).append(user);
    var task9 = $(`.task-input-11`).val();
    localStorage.setItem(`task-11`, task9);
})

$(`.save-block-12`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-12`)
    $(`.task-input-12`).append(user);
    var task9 = $(`.task-input-12`).val();
    localStorage.setItem(`task-12`, task9);
})

$(`.save-block-13`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-13`)
    $(`.task-input-13`).append(user);
    var task9 = $(`.task-input-13`).val();
    localStorage.setItem(`task-13`, task9);
})

$(`.save-block-14`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-14`)
    $(`.task-input-14`).append(user);
    var task9 = $(`.task-input-14`).val();
    localStorage.setItem(`task-14`, task9);
})

$(`.save-block-15`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-15`)
    $(`.task-input-15`).append(user);
    var task9 = $(`.task-input-15`).val();
    localStorage.setItem(`task-15`, task9);
})

$(`.save-block-16`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-16`)
    $(`.task-input-16`).append(user);
    var task9 = $(`.task-input-16`).val();
    localStorage.setItem(`task-16`, task9);
})

$(`.save-block-17`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`task-17`)
    $(`.task-input-17`).append(user);
    var task9 = $(`.task-input-17`).val();
    localStorage.setItem(`task-17`, task9);
})

