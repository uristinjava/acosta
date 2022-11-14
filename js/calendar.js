var event = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var locale = event.toLocaleDateString('ru-RU', options);
var date = locale.substring(0, locale.length-3);
document.getElementById('date').innerHTML = date;

