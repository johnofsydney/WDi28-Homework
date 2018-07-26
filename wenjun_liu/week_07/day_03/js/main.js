$(document).ready(function () {
  $('#search').on('submit', function (event) {
    $('#question, #answers, #result').empty();
    event.preventDefault();
    $.getJSON('https://opentdb.com/api.php?', {amount: 1}).done(function(response){
      $('#question').html(response.results[0].question);
      response.results[0].incorrect_answers.push(response.results[0].correct_answer);
      _(_.shuffle(response.results[0].incorrect_answers)).each(function(answer, index){
        let button = $('<button/>', {
          html: answer,
          id: index,
          click: function () {
            $('#result').html(response.results[0].correct_answer === $(this).html() ? 'correct' : 'incorrect');
          }
        });
        $('#answers').append(button);
      });
    });
  });
});
