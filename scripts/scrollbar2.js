
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.navbar').removeEventListener('mouseenter',function(){

    });
  } else {
}*/



function bot(){

  if (window.matchMedia('screen and (max-width: 470px)').matches) {

  } else {

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
      document.querySelector('.papa').setAttribute('style','transform:translatey(56px);');
    } else {
      document.querySelector('.papa').setAttribute('style','transform:translatey(0px);');
    }
    
  }


}

if (window.matchMedia('screen and (max-width: 460px)').matches) {

} else {}

  document.querySelector('.navbar').addEventListener('mouseenter',function(){
    //document.querySelector('.title').textContent='INTRODUÇÃO AO JAVASCRIPT';
    //alert('DEAD!');
    //document.querySelector('.papa').setAttribute('style','transform:translatey(56px);');
    //document.querySelector('.placeholder').setAttribute('style','z-index:999;');
    bot();
  });
  document.querySelector('.papa').addEventListener('mouseenter',function(){
    //document.querySelector('.title').textContent='INTRODUÇÃO AO JAVASCRIPT';
    //alert('DEAD!');
    //document.querySelector('.papa').setAttribute('style','transform:translatey(56px);');
    //document.querySelector('.placeholder').setAttribute('style','z-index:999;');
    bot();
  });
  document.querySelector('.papa').addEventListener('mouseleave',function(){
    //document.querySelector('.title').textContent='INTRODUÇÃO AO JAVASCRIPT';
    //alert('DEAD!');
    document.querySelector('.papa').setAttribute('style','transform:translatey(0px);');
  });




