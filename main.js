console.log("Welcome to the DOM");

$(document).ready(function(){

function add(number1, number2){
  return Number(number1) + Number(number2);
};

function subtract(number1, number2){
  return Number(number1) - Number(number2);
};

function multiple(number1, number2){
  return Number(number1) * Number(number2);
};

function divide(number1, number2){
  return Number(number1) / Number(number2);
};

$('#addBtn').click(function(event){
  event.preventDefault();
  var num1 = $('#num_one').val();
  var num2 = $('#num_two').val();
  var total = add(num1, num2);
  $('#answer').text(total);
});

$('#subtractBtn').click(function(event){
  event.preventDefault();
  var num1 = $('#num_one').val();
  var num2 = $('#num_two').val();
  var total = subtract(num1, num2);
  $('#answer').text(total);
});

$('#multipleBtn').click(function(event){
  event.preventDefault();
  var num1 = $('#num_one').val();
  var num2 = $('#num_two').val();
  var total = multiple(num1, num2);
  $('#answer').text(total);
});

$('#divideBtn').click(function(event){
  event.preventDefault();
  var num1 = $('#num_one').val();
  var num2 = $('#num_two').val();
  var total = divide(num1, num2);
  $('#answer').text(total);
});

});
