$(document).ready(function(){

$('.point').click(function(event){
  event.preventDefault();
  $('.displayArea').append(".");
});

$('.zero').click(function(event){
  event.preventDefault();
  $('.displayArea').append("0");
});

$('.one').click(function(event){
  event.preventDefault();
  $('.displayArea').append("1");
});

$('.two').click(function(event){
  event.preventDefault();
  $('.displayArea').append("2");
});

$('.three').click(function(event){
  event.preventDefault();
  $('.displayArea').append("3");
});

$('.four').click(function(event){
  event.preventDefault();
  $('.displayArea').append("4");
});

$('.five').click(function(event){
  event.preventDefault();
  $('.displayArea').append("5");
});

$('.six').click(function(event){
  event.preventDefault();
  $('.displayArea').append("6");
});

$('.seven').click(function(event){
  event.preventDefault();
  $('.displayArea').append("7");
});

$('.eight').click(function(event){
  event.preventDefault();
  $('.displayArea').append("8");
});

$('.nine').click(function(event){
  event.preventDefault();
  $('.displayArea').append("9");
});

$('.divide').click(function(event){
  event.preventDefault();
  $('.displayArea').append(" / ");
});

$('.multi').click(function(event){
  event.preventDefault();
  $('.displayArea').append(" * ");
});

$('.sub').click(function(event){
  event.preventDefault();
  $('.displayArea').append(" - ");
});

$('.plus').click(function(event){
  event.preventDefault();
  $('.displayArea').append(" + ");
});

$('.clear').click(function(event){
  event.preventDefault();
  $('.displayArea').empty();
});

$('.calculate').click(function(event){
  event.preventDefault();
  var toCalculate = $('.displayArea').text();
  var calculated = eval(toCalculate);
  $('.displayArea').text(calculated);
});

});
