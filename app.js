$(document).ready(function() {
  $('#submit-btn').click(function(e) {
    e.preventDefault();

    var val = $('#search').val();

    search(val);
  });

});