
view_box.onclick = () => {

    form_to_add_html.style.display = "none";
}

if (select_view_html.value === "selectview") {
    header_day_html.style.display = "none";
    header_week_html.style.display = "none";
    add_btn_html.style.display = "none";
    time_slot_container_html.style.display="none";
}
select_view_html.onchange = function (e) {
    if (e.target.value === "d") {
        header_day_html.style.display = "flex";
        header_week_html.style.display = "none";
        add_btn_html.style.display = "flex";
//        form_to_add_html.style.display = "flex";
         time_slot_container_html.style.display="flex";
    } else if (e.target.value === "w") {
        header_week_html.style.display = "flex";
        header_day_html.style.display = "none";
        add_btn_html.style.display = "none";
        form_to_add_html.style.display = "none";
         time_slot_container_html.style.display="none";
    } else {
        header_week_html.style.display = "none";
        header_day_html.style.display = "none";
        add_btn_html.style.display = "none";
        form_to_add_html.style.display = "none";
         time_slot_container_html.style.display="none";
    }
}
