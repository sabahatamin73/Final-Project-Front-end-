$(document).ready(function(){
$('#slider').slick({
	autoplay: true,
  autoplaySpeed: 1800,
  infinite: true,
    arrows: false,

});
  });
  
var $methods = $('#methods');
var slide = '<a href="img/img2.jpg">' +
    '<img src="img/thumb2.jpg" />' +
'</a>';
 
$methods.lightGallery();
$('#appendSlide').on('click', function() {
    $methods.append(slide);
    $methods.data('lightGallery').destroy(true);
    $methods.lightGallery();
});


	// ============share===============
	$("body").flati({
            theme: 'space',
			dockPosition:'left',
			triggerPosition:'left',
   });
    $( "#accordion" ).accordion();


// =========FORM================
	$("form").validate({
	 rules:{
		 firstname:"required",
		 lastname:"required",

	 email:{
		 required:true,
		 email:true
	 }
	},
	 messages:{
		 firstname: "this field is must required",
		 lastname:"this field is must required"
	 }
	});