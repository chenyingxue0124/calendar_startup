$(document).keypress(function(e) {
  //Left
  if (e.which == 37) {
    show_prev_month();
  }
  //Up
  if (e.which == 38) {
    alert('You pressed UP!');
  }
  //Right
  if (e.which == 39) {
    show_next_month();
  }
  // Down
  if (e.which == 40) {
    alert('You pressed DOWN!');
  }
});

function formatDate(date, day, shift = 0) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1 + shift),
    year = d.getFullYear();

  //if (month.length < 2) month = '0' + month;
  //if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function get_day_of_week(y, m, d) {
  //m++;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  var tmp = Math.floor(5 * y / 4) - Math.floor(y / 100) +
    Math.floor(y / 400) + Math.floor((26 * m + 16) / 10) + d;
  //console.log(tmp);
  var Zeller = tmp % 7;
  //console.log(Zeller);
  return Zeller
}

function shift_month(d, shift=0){
  //debugger;
  var date=new Date(d);
  if(shift>0){
    var year_shift=Math.floor(shift/12);
    var month_shift=shift-year_shift*12;
  }else if (shift<0) {
    var year_shift=Math.ceil(shift/12);
    var month_shift=shift-year_shift*12;
  }else{
    return date;
  }
  if(date.getMonth()+month_shift<0){
    year_shift--;
    month_shift+=12;
  }
  if(date.getMonth()+month_shift>11){
    year_shift++;
    month_shift-=12;
  }
  date.setFullYear(date.getFullYear()+year_shift);
  date.setMonth(date.getMonth()+month_shift);
  return date;
}

function is_leap_year(d) {
  if (date.getFullYear() % 400 == 0) {
    return true;
  }
  if (date.getFullYear() % 100 == 0) {
    return false;
  }
  if (date.getFullYear() % 4 == 0) {
    return true;
  }
  return false;
}

function calculate_holiday(date){
  var holiday = [];
  //calculate the holiday in previous, current, next month
  //debugger;
  for(j=-1; j<1; j++){
    var nd=shift_month(date, j);
    start_day=nd.getDay();
    h=holiday_ref[nd.getMonth()];
    for(var i in h){
      if(Number.isInteger(h[i])){
        exchange_holiday(holiday, nd.getFullYear(), nd.getMonth()+1, h[i]);
      }else if(h[i][1]=='-'){
        res=h[i].split("-");
        if(start_day<=1){
          day=(parseInt(res[0])-1)*7+parseInt(res[1]);
        }else{
          day=parseInt(res[0])*7-start_day+1+parseInt(res[1]);
        }
        exchange_holiday(holiday, nd.getFullYear(), nd.getMonth()+1, day);
      }else{
        //Special Holiday like Spring, Autumn Equinox, Chinese Spring Festival
        exchange_holiday(holiday, nd.getFullYear(), nd.getMonth()+1, special(date, h[i]));
      }
    }
  }
  return holiday;
}

function exchange_holiday(holiday, y, m, d){
  if(get_day_of_week(y, m, d)==0){
    //sunday, we need to exchange holiday
    //holiday.push([y, m, d].join('-'););
    holiday.push([y, m, d+1].join('-'));
  }else{
    holiday.push([y, m, d].join('-'));
  }
  return holiday;
}

function special(date, festival) {
  //debugger;
  //A fundction calculate the special holiday which has their own rule
  //to happen in each year, like equinox, chinese spring festival, etc
  if (festival == 'spring'){
    return Math.floor(20.8431 + 0.242194 * (date.getFullYear() - 1980) -
      Math.floor((date.getFullYear() - 1980) / 4));
  }
  else if (festival == 'autumn'){
    return Math.floor(23.2488 + 0.242194 * (date.getFullYear() - 1980) -
      Math.floor((date.getFullYear() - 1980) / 4));
  }
}
