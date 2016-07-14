

$(document).ready(function(){
     
  $('.btn-add').click(function(){
    var userItem = $('#textbox').val();
    $('ul').append($('<li><span class="check">&#9989;</span>' + '<span class="list-item">' + userItem + '</span>' + '<span class="delete">&#10008;</span><span class="edit">&#10000;</span></li>'));
      
  }),

 $('ul').on('click', '.delete', function(event){
       $(this).parent().remove();
}),

  $('ul').on('click', '.check', function(event){
       $(this).parent().addClass('cross-out');

}),

   $('ul').on('click', '.edit', function(event){
       var editItem = $(this).parent().find('.list-item').text();
       $('#textbox').val(editItem);
       $(this).parent().remove();
});

});