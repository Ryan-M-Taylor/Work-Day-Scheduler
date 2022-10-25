
function populatePage(){
    for(let i=9; i<18;i++){
        $('.container').append(`
        <div class ="row">
          <h1 class="time-block col-2">${i}:00</h1>
          <textarea class="col-9 ${addClass(i)}"></textarea>
          <button class="saveBtn col-1">Save</button>
        </div> 
        `)
    }

    addEventListenersToButtons()
}

function addEventListenersToButtons(){
    console.log("adding listeners")
    //get all the buttons

    console.log(variable)
    //have to iterate through them and add an event listener
}
function addClass(hour){

    if(hour < moment().hour()){
        return "past"
    } 
    if(hour>moment().hour()){
        return "future"
    }
    return "present"
    // see how I can get the hour of the day in military time
}

const update = function () {
    let datetime = $('#currentDay');
    let date = moment(new Date());
    datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function(){
    update();
    setInterval(update, 1000);   
    populatePage()
});