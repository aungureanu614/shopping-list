$(document).ready(function(){
     
  $('.btn-add').click(function(){
    var userItem = $('#textbox').val();
    $('ul').append($('<li><span class="check">&#9989;</span>' + userItem + '<span class="delete">&#10008;</span><span class="edit">&#10000;</span></li>'));
      
  }),

 $('ul').on('click', 'li', function(event){
       $(this).remove();
});

});