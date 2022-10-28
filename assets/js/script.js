const containerEl = $(".container");

//creates rows for each hour
function populatePage() {
  for (let i = 9; i < 18; i++) {
    containerEl.append(`
        <div class ="row">
          <h1 class="time-block hour col-2">${i}:00</h1>
          <textarea class="col-9 ${addClass(i)} text-area ${i} description"></textarea>
          <button class="saveBtn col-1">Save</button>
        </div> 
        `);
  }

  addEventListenersToButtons();
}

//adds event listener to each save button. when save button is clicked, the text area is saved to local storage
function addEventListenersToButtons() {
  let saveButton = $(".saveBtn");
  saveButton.on("click", function (event) {
    const text = $(event.target).closest(".row").find(".text-area").val();
    const hour = $(event.target).closest(".row").find(".time-block").text();
    localStorage.setItem(hour, text);
  });
}

//gets data saved to local storage for each row
function renderData() {
  $(".9").val(localStorage.getItem("9:00"));
  $(".10").val(localStorage.getItem("10:00"));
  $(".11").val(localStorage.getItem("11:00"));
  $(".12").val(localStorage.getItem("12:00"));
  $(".13").val(localStorage.getItem("13:00"));
  $(".14").val(localStorage.getItem("14:00"));
  $(".15").val(localStorage.getItem("15:00"));
  $(".16").val(localStorage.getItem("16:00"));
  $(".17").val(localStorage.getItem("17:00"));
}

//determines if hour is past, present, or future
function addClass(hour) {
  if (hour < moment().hour()) {
    return "past";
  }
  if (hour > moment().hour()) {
    return "future";
  }
  return "present";
}

//sets the date/time
const update = function () {
  let datetime = $("#currentDay");
  let date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

//sets functions to call when document loads
$(document).ready(function () {
  setInterval(update, 1000);
  populatePage();
  renderData();
});
