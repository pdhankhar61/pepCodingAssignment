add_slot_html.onclick = () => {
    time_slot_container_html.innerHTML += `<p>${teacherName_html.value}<br>Time:${time_slot.value}</p>`
    add_slot_html.style.boxShadow = "0 2px 2px rgba(0,0,0,0.2)";
    form_to_add_html.style.display = "none";
}

teacher_actions_html.onchange = (e) => {
    teacherName_html.value = e.target.value;
}

add_btn_html.onclick = () => {
    form_to_add_html.style.display = "flex";
}
