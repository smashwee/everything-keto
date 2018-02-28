console.log('JS is working')

$(document).ready(function(){

  function scroll(top){
    $('element').animate({
      scrollTop: top
    }, 500)
  }

  //get the top position of the element
  var linkPos = $('#element-id').position().top;
  $('element-id').on('click', function(){
    scroll(linkPos) //invoke scroll function
  })
  //scroll to it

  $('element-id').on('click,' function(){
    scoll(0);
  })
})
