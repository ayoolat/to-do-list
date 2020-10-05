$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});
// click on "x" to delete todo
$("ul").on("click", "span" ,function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		// grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// add a new li to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})