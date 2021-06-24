//getting html elements
let current_month_html = document.getElementById("current_month");
let current_date_html = document.getElementById("current_date");
let days_in_month_html = document.querySelector(".days");
let date_shown_html = document.querySelector(".date_shown");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


//month_name_array
const month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//weekdays_name_array
const weekdays_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//current date
const date = new Date();

//function definition
let add_days_function = function () {



    //total days in current month    
    const days_in_month = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    //first day of current month    
    const first_day_of_month = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    //total days in last month    
    const days_in_last_month = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    //no.of days of last month shown in current month
    const prev_days = first_day_of_month;

    //no.of days of next month shown in current month
    const next_days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();



    // setting current month and date
    let current_month = month_name[date.getMonth()];
    current_date_html.innerText = date.toDateString();
    current_month_html.innerText = current_month;


    let day = "";

    //adding days of previous month
    for (let i = days_in_last_month - prev_days + 1; i <= days_in_last_month; i++) {

        day += `<div class="prev_date">${i}</div>`;
    }


    //adding days of current month
    for (let i = 1; i <= days_in_month; i++) {

        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getDay() === new Date().getDay()) {

            day += `<div class="today">${i}</div>`;
        } else {

            day += `<div>${i}</div>`;
        }
    }


    //adding days of next month
    for (let i = 1; i < 7 - next_days; i++) {

        day += `<div class="next_date">${i}</div>`;
    }

    days_in_month_html.innerHTML = day;

}

//adding event listener to each day
let add_event_listener_day = function (x) {
    for (let i = 0; i < days_in_month_html.children.length; i++) {
        days_in_month_html.children[i].onclick = (e) => {
            let date_new = new Date();
            date_new.setMonth(x);
            if (e.target.classList.contains("next_date")) {
                date_new.setMonth(date_new.getMonth() + 1);
                date_new.setDate(e.target.innerHTML);
                console.log(date_new);
                console.log(date_new.getDate(e.target.innerHTML));
                console.log(weekdays_name[date_new.getDay()]);
                date_shown_html.innerText=date_new.toDateString();
                if (select_view_html.value === "d") {
                    header_day_html.innerHTML = `<div class="header_day_single">
                    <h3>
                        <div class="day_name">${weekdays_name[date_new.getDay()]}</div>
                        <div class="day_date">${e.target.innerHTML}</div>
                    </h3>
                </div>`;
                }

            } else if (e.target.classList.contains("prev_date")) {
                date_new.setMonth(date_new.getMonth() - 1);
                date_new.setDate(e.target.innerHTML);
                console.log(date_new);
                console.log(weekdays_name[date_new.getDay()]);
                date_shown_html.innerText=date_new.toDateString();
                if (select_view_html.value === "d") {
                    header_day_html.innerHTML = `<div class="header_day_single">
                    <h3>
                        <div class="day_name">${weekdays_name[date_new.getDay()]}</div>
                        <div class="day_date">${e.target.innerHTML}</div>
                    </h3>
                </div>`;
                }
            } else {
                date_new.setDate(e.target.innerHTML);
                console.log(date_new);
                console.log(weekdays_name[date_new.getDay()]);
                date_shown_html.innerText=date_new.toDateString();
                if (select_view_html.value === "d") {
                    header_day_html.innerHTML = `<div class="header_day_single">
                    <h3>
                        <div class="day_name">${weekdays_name[date_new.getDay()]}</div>
                        <div class="day_date">${e.target.innerHTML}</div>
                    </h3>
                </div>`;
                }
            }

        }
    }
}

//adding event listeners to next and prev
prev.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    add_days_function();
    add_event_listener_day(date.getMonth());
})
next.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    add_days_function();
    add_event_listener_day(date.getMonth());

})

//calling function to load days first time
add_days_function();
//calling function to add event listeners
add_event_listener_day(date.getMonth());
