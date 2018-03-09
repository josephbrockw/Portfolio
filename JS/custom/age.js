$(document).ready(function() {
  var yearThen = 1994
  var monthThen = 10
  var dayThen = 11

  var today = new Date();
  var birthday = new Date(yearThen, monthThen-1, dayThen);

  var differenceInMilisecond = today.valueOf() - birthday.valueOf();

  var year_age = Math.floor(differenceInMilisecond / 31536000000);
  console.log('year_age');
  $('.sams-age').html(year_age);
});
