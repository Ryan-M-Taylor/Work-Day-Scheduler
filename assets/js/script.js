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

  //console.log(textArea[4])
  saveButton.on("click", function (event) {
    const text = $(event.target).closest(".row").find(".text-area").val();
    const hour = $(event.target).closest(".row").find(".time-block").text();
    console.log("call");

    // build data
    let newEntry = {
      text: text,
      hour: hour,
    };

    // 1 get the old data
    var storeData = localStorage.setItem("stored", JSON.stringify(newEntry));
    var getStoredData = JSON.parse(localStorage.getItem("stored"));
    console.log(storeData)
    // 2. update the old data
    storedData.push(newEntry);
    // 3 stringify and set the data
    console.log(getStoredData)
    localStorage.setItem("stored", JSON.stringify(newEntry));
  });
}


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
});
