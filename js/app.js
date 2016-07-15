

$(document).ready(function(){
 

   //Event for adding items to shopping cart using the "+" icon  
  $('.btn-add').on('click', function(){
     var userItem = $('#textbox').val();
   //check to see if user has made an input in the textbox
    if(userItem){
		$('#items').append($('<li><span class="check">&#9989;</span>' + '<span class="list-item">' + userItem + '</span>' + '<span class="delete icon-style">&#10008;</span><span class="edit icon-style">&#10000;</span></li>'));
    	$('#textbox').val('');
	}
	else{
	     alert('Please enter an item');
	}

  }),

   $('#textbox').keypress(function(event){
        if(event.which == 13){//Enter key pressed
            $('.btn-add').click();//Trigger search button click event
        	event.preventDefault();
        }
    }),
  	//Event for clicking on delete
 $('#items').on('click', '.delete', function(){
       $(this).parent().remove();
  }),
	//Event for clicking on check mark
  $('#items').on('click', '.check', function(){
  	//Logic for checking and unchecking an item
       if($(this).parent().hasClass('cross-out'))
       		$(this).parent().removeClass('cross-out');
  
       else
       		$(this).parent().addClass('cross-out');

   }),
  	//Event for clicking on the pencil (edit) icon
   $('#items').on('click', '.edit', function(){
       var editItem = $(this).parent().find('.list-item').text();
       $('#textbox').val(editItem); //Pass list item content to textbox
       $(this).parent().remove(); 
   });

});