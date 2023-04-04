$(document).ready(function(){
  // $("p").click(function(){
  //   $(this).hide();
  // });
  // program to display text 5 times
// const n = 5;

// looping from i = 1 to 5
// for (let i = 1; i <= 4; i++) {
//     console.log(['I love JavaScript.' +i+'www']);
// }
  for(let i = 1; i <= 4; i++){
	  $(".skill-point:nth-child("+i+") .hide").mouseover(function(){
	  	$(this).addClass('show')
	  	$(".skill-point:nth-child("+i+") #point").addClass('hide')
	  	// console.log('post')
	  })
	

	  $(".skill-point:nth-child("+i+") .hide").mouseout(() => {
	  	$(".skill-point:nth-child("+i+") .hide").removeClass('show')
	  	$(".skill-point:nth-child("+i+") #point").removeClass('hide')
	  })
  }

  $("#image-hover").hover(()=>{
  	$(".image-hide").addClass('image-show')
  }, ()=>{
  	$(".image-hide").removeClass('image-show')
  })

  $(".cert").hover(()=>{
  	$(".black").addClass("move")
  },()=>{
  	$(".black").removeClass("move")
  })
});
