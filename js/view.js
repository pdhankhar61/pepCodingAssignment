const select_view_html = document.getElementById("view");
const header_week_html = document.querySelector(".header_week");
const header_day_html = document.querySelector(".header_day");

if(select_view_html.value==="selectview"){
    header_day_html.style.display="none";
    header_week_html.style.display="none";
    
}
select_view_html.onchange = function (e) {
    if (e.target.value === "d") {
        header_day_html.style.display = "flex";
        header_week_html.style.display = "none";
    } else if (e.target.value === "w") {
        header_week_html.style.display = "flex";
        header_day_html.style.display = "none";
    } else {
        header_week_html.style.display = "none";
        header_day_html.style.display = "none";
    }
}
