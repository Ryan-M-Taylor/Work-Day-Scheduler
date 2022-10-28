const containerEl = $(".container");

function populatePage() {
  for (let i = 9; i < 18; i++) {
    containerEl.append(`
        <div class ="row">
          <h1 class="time-block col-2">${i}:00</h1>
          <textarea class="col-9 ${addClass(i)} text-area"></textarea>
          <button class="saveBtn col-1">Save</button>
        </div> 
        `);
  }

  addEventListenersToButtons();
}

function addEventListenersToButtons() {
  console.log("adding listeners");
  let saveButton = $(".saveBtn");

  saveButton.on("click", function (event) {
    const text = $(event.target).closest(".row").find(".text-area").val();
    const hour = $(event.target).closest(".row").find(".time-block").text();
    localStorage.setItem(hour, text);
  });
}


// $(document).ready(function() {
// $('.9 .text-area').val(localStorage.getItem('9:00'));
// $('.').val(localStorage.getItem('10:00'));
// $('.').val(localStorage.getItem('11:00'));
// $('.').val(localStorage.getItem('12:00'));
// $('.').val(localStorage.getItem('13:00'));
// $('.').val(localStorage.getItem('14:00'));
// $('.').val(localStorage.getItem('15:00'));
// $('.').val(localStorage.getItem('16:00'));
// $('.').val(localStorage.getItem('17:00'));
// });

function addClass(hour) {
  if (hour < moment().hour()) {
    return "past";
  }
  if (hour > moment().hour()) {
    return "future";
  }
  return "present";
}

const update = function () {
  let datetime = $("#currentDay");
  let date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  update();
  setInterval(update, 1000);
  populatePage();
  $(".text-area .9").val(localStorage.getItem('9:00'));
//   $('.').val(localStorage.getItem('10:00'));
//   $('.').val(localStorage.getItem('11:00'));
//   $('.').val(localStorage.getItem('12:00'));
//   $('.').val(localStorage.getItem('13:00'));
//   $('.').val(localStorage.getItem('14:00'));
//   $('.').val(localStorage.getItem('15:00'));
//   $('.').val(localStorage.getItem('16:00'));
//   $('.').val(localStorage.getItem('17:00'));
});
