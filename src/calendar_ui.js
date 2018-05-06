var date = new Date();
//var date = new Date("2018-10-01");

function make_size(){
   var newHeight = $(window).height() - $('#topnav').height();
}

function make_country_box(){
  //debugger;
  for(var country in branches){
    $("#form-country").append('<option>'+country+'</option>');
  }
}

function make_city_form(){
  //debugger;
  $("#form-city").empty();
  $("#form-doctor").empty();
  var countries = $("#form-country").val();
  for(var i in countries){
    var country=countries[i];
    for(var city in branches[country]){
      $("#form-city").append('<option>'+branches[country][city]+'</option>');
    }
  }

}

function show_doctor(){
  //debugger;
  $("#form-doctor").empty();
  var cities = $("#form-city").val();
  for(var i in cities){
    var city=cities[i];
    for(var doc in doctors[city]){
      $("#form-doctor").append('<option>'+doctors[city][doc]+'</option>');
    }
  }
}

function show_in_calendar(){
  var doctors = $("#form-doctor").val();
  var str=""
  for(var i in doctors){
    str+=(doctors[i]+' ');
  }
  alert("Calendar not Ready"+str)
}

var branches = {
  "America":["New York", "Los Angeles", "Chicago", "Boston"],
  "China":["Shanghai", "Beijing", "Guangzhou"],
  "India":["New Delhi", "Munbai", "Bangalore"],
  "Japan":["Tokyo", "Nagoya", "Tokusima", "Fukuoka"],
  "Singapore":["Singapore"],
  "Switzerland":["Lucerne", "Zurich", "Interlaken"],
  "Test":["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]
};

var doctors={
  'New York': ['Thomas Jiang', 'Emily Chen'],
  'Los Angeles': ['Hipper Grigg', 'Ming Yamaguchi', 'Sophie Grigg', 'Ming Jiang', 'Zack Jiang'],
  'Chicago': ['Erin Watanabe', 'Charlie Chen', 'Hipper Watanabe', 'Amelia Wang'],
  'Boston': ['Megan Grigg', 'Ale Obama', 'Ming Jiang', 'Ruby Li', 'Ming Watanabe'],
  'Shanghai': ['Amelia Borton', 'Hipper Obama'],
  'Beijing': ['Alfie Watanabe', 'Charlie Li'],
  'Guangzhou': ['Alfie Simosawa', 'Jing Lincoln', 'Thomas Lincoln'],
  'New Delhi': ['Thomas Yamaguchi', 'Thomas Li', 'Thomas Watanabe', 'Amelia Wang'],
  'Munbai': ['Sophie Watanabe'],
  'Bangalore': ['Alfie Obama', 'Amelia Li', 'Megan Borton', 'Emily Chen'],
  'Tokyo': ['Alfie Lincoln', 'Jack Chen', 'Zack Chen', 'Alfie Simosawa'],
  'Nagoya': ['Jacob Wang'],
  'Tokusima': ['Alfie Watanabe', 'Erin Wang', 'Jack Chen', 'Alfie Liu', 'Ruby Jiang', 'Erin Lincoln'],
  'Fukuoka': ['Thomas Bush', 'Jacob Chen'], 'Singapore': ['Thomas Chen', 'Ale Simpson'],
  'Lucerne': ['Zack Watanabe', 'Erin Jiang', 'Ale Watanabe', 'Sophie Liu', 'Hipper Li'],
  'Zurich': ['Jing Obama', 'Emily Yamaguchi', 'Ale Jiang'],
  'Interlaken': ['Amelia Obama', 'Jack Obama', 'Zack Jiang'],
  'A': ['Erin Liu', 'Sophie Borton', 'Alfie Jiang', 'Zack Chen', 'Ale Simosawa', 'Ming Yamaguchi'],
  'B': ['Alfie Chen'],
  'C': ['Hipper Obama', 'Emily Bush', 'Erin Wang', 'Emily Chen', 'Jacob Yamaguchi'],
  'D': ['Emily Wang', 'Amelia Liu'],
  'E': ['Emily Chen', 'Sophie Obama'],
  'F': ['Charlie Yamaguchi', 'Ale Lincoln', 'Ale Simosawa', 'Zack Simpson', 'Amelia Obama', 'Charlie Jiang'],
  'G': ['Erin Chen', 'Zack Jiang', 'Jack Watanabe', 'Erin Chen', 'Jack Yamaguchi'],
  'H': ['Emily Bush', 'Sophie Grigg', 'Erin Jiang'],
  'I': ['Erin Simpson', 'Ming Simpson', 'Erin Yamaguchi', 'Amelia Borton', 'Ming Yamaguchi'],
  'J': ['Jacob Jiang', 'Jack Lincoln', 'Erin Jiang'],
  'K': ['Hipper Borton'],
  'L': ['Ale Wang', 'Alfie Borton', 'Ale Simpson', 'Hipper Simpson', 'Emily Bush'],
  'M': ['Amelia Chen', 'Jack Simosawa'],
  'N': ['Alfie Yamaguchi', 'Ming Yamaguchi', 'Sophie Wang', 'Ale Chen', 'Zack Lincoln', 'Amelia Lincoln']
};

var month = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};
var holiday_ref = {
  0: [1, '2-1'],
  1: [11],
  2: ['spring'],
  3: [29],
  4: [3, 4, 5],
  5: [],
  6: ['3-1'],
  7: [11],
  8: ['3-1', 'autumn'],
  9: ['2-1'],
  10: [3, 23],
  11: [23]
};
