// check off specfic todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabbing new todo text from input
    const todoText = $(this).val();
    $(this).val(' ');

    //append todotext to ul
    $("ul").append(`<li><span>X</span>  ${todoText} </li>`)
  }
});