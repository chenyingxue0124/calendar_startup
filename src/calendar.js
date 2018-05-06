function createCalendar() {
  //debugger;
  //var day_array = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //for (i = 0; i < day_array.length; i++) {
  //$("#calendar-days").append('<li class="weekdays"> ' + day_array[i] + '</li>');
  //}
  $("#calendar-month").text(month[date.getMonth()]);
  $("#calendar-year").text(date.getFullYear());
  var day_array = [];
  var day_id = [];
  var day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var complement = get_day_of_week(date.getFullYear(), date.getMonth() + 1, 1);
  prev_date = shift_month(date, -1);
  var endDay = day_in_month[prev_date.getMonth()]
  if (prev_date.getMonth() == 1 && is_leap_year(prev_date)) {
    //Leap Year's February
    endDay++;
  }
  var holidays=calculate_holiday(date);
  //debugger;
  console.log(holidays);
  for (i = 0; i < complement; i++) {
    //var day = endDay - complement + i + 1;
    //$("#calendar-days").append('<li class="previous_month">' + day + '</li>');
    day_array.push(endDay - complement + i + 1);
    day_id.push(formatDate(date, endDay - complement + i + 1, -1))

  }
  for (i = 0; i < day_in_month[date.getMonth()]; i++) {
    //var day = i + 1;
    //$("#calendar-days").append('<li id="currMo-'+day+'">' + day + '</li>');
    day_array.push(i + 1);
    day_id.push(formatDate(date, i + 1))
  }
  var i = 0;
  var end = day_array.length;
  while (day_array.length < 42) {
    //var day = i + 1;
    //$("#calendar-days").append('<li class="next_month">' + day + '</li>');
    i++;
    day_array.push(i);
    day_id.push(formatDate(date, i, 1))
  }
  //debugger;
  for (i = 0; i < 42; i++) {
    //debugger;
    var row_num = Math.floor(i / 7);
    if (i % 7 == 0) {
      var calendar_row = document.createElement("div");
      calendar_row.setAttribute("class", "calendar_row");
      document.getElementById("calendar-table").appendChild(calendar_row);

      var row_table = document.createElement("table");
      row_table.setAttribute("class", "row_table");
      calendar_row.appendChild(row_table);

      var row_thead = document.createElement("thead");
      var row_tbody = document.createElement("tbody");
      row_thead.setAttribute("class", "row_thead");
      row_tbody.setAttribute("class", "row_tbody");
      row_table.appendChild(row_thead);
      row_table.appendChild(row_tbody);

      var thead_tr = document.createElement("tr");
      thead_tr.setAttribute("class", "tr_content");
      row_thead.appendChild(thead_tr);

      var tbody_tr = document.createElement("tr");
      tbody_tr.setAttribute("id", "tr_content");
      row_tbody.appendChild(tbody_tr);
      //var txt = document.createTextNode(j);
      //tbody_tr.appendChild(txt);
    }
    //debugger;
    var thead_td = document.createElement("td");
    if (i < complement) {
      thead_td.setAttribute("class", "thead_td prev_month");
    } else if (i >= end) {
      thead_td.setAttribute("class", "thead_td next_month");
    } else if (holidays.includes(day_id[i])) {
      thead_td.setAttribute("class", "holiday thead_td");
    } else {
      thead_td.setAttribute("class", "thead_td");
    }
    thead_td.setAttribute("id", day_id[i]);
    thead_tr.appendChild(thead_td);
    var txt = document.createTextNode(day_array[i]);
    thead_td.appendChild(txt);
    //row_thead.setAttribute("class", "row_thead");

    var tbody_td = document.createElement("td");
    //tbody_td.setAttribute("class", "tbody_td");
    if (i < complement) {
      tbody_td.setAttribute("class", "tbody_td prev_month");
    } else if (i >= end) {
      tbody_td.setAttribute("class", "tbody_td next_month");
    } else if (holidays.includes(day_id[i])) {
      tbody_td.setAttribute("class", "holiday tbody_td");
    } else{
      tbody_td.setAttribute("class", "tbody_td");
    }
    tbody_td.setAttribute("id", "td_" + day_id[i]);
    tbody_tr.appendChild(tbody_td);
    var txt = document.createTextNode("a");
    tbody_td.appendChild(txt);
  }
}

function show_next_month() {
  date = shift_month(date, 1);
  $("#calendar-table").empty();
  createCalendar();
}

function show_prev_month() {
  date = shift_month(date, -1);
  $("#calendar-table").empty();
  createCalendar();
}
