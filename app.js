//add the hover value over submit, edit, and delete
$('#editButton').css('cursor','pointer');
$('#deleteButton').css('cursor','pointer');
$('#submitButton').css('cursor','pointer');
let comment = $('#userComment').val();
//add each comment with jquery when you click submit. Check to see if they have a display name. 
$('#submitButton').on('click', function(){
    let name = $('#userDisplayName').val();
    comment = $('#userComment').val();
    if(name != "" && comment != ""){
        $('.commentArea').prepend(`
        <div class ="comment">
        <img src="userImage.png" alt = "User image" height= "55px" width = "55px"/>
        <div class="commentWords">
            <div class ="topLayerComment">
                <p class ="userName font textBlack">${name}</p>
                <div class ="editDeleteBut">
                     <p id = "editButton" class="editButton font blue">Edit</p>
                    <p class="deleteButton font blue">Delete</p>
                </div>
                </div>
                <p class = "displayedUserComment font">${comment}</p>
            </div>
        </div>
        `);
    }
    else(
        alert('Make sure the Name and Comment are filled in!')
    )
});


//When you click edit you need to put in the text area and put in the new text
$('.commentArea').on('click', '#editButton', function(){
    //continue here 
    //navagate it the child
  // $('.comment').css('height', 100 + "px");
    let par = $(this).parents()[2];
    let kid = $(par).children()[1];
    $(kid).append('<div id ="editTheComment" class = "edd textBlack"><input id="editedComment" placeholder="New comment" ><div id="editedSubmitBut" class = "font blue" >Submit</div></div>');

});
//edited submit 
$('.commentArea').on('click','#editedSubmitBut',function(){
    comment = $('#editedComment').val();
    let a = $(this).parents()[2];
    let b = $(a).children()[1]; 
    b.remove();
    let c = $(a).children()[0];
    $(a).append('<p class = "displayedUserComment font">'+comment+'</p>');

    //need to remove the edit comment area

});


//set height back to 75px 



//When you click remove you have to remove the thing
//work on this
$('.commentArea').on('click', '.deleteButton', function(){
    let del = $(this).parents()[3];
    del.remove();
    //stat at this and get the parents of this 
});


//make the display name at the bottom equal to the top


//when 


