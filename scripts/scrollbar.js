window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //navbar
    //document.querySelector('.navbar').setAttribute('style', 'height: 80px;');
    document.querySelector('.navbar').setAttribute('style', 'transform: translateY(0px);');

    //logos
    /*document.querySelector('.navbar .logos img').setAttribute('style', 'height: 70px; padding: 10px;');
    document.querySelector('.navbar .logos').classList.add('logos2');
    document.querySelector('.navbar .logos').classList.remove('logos1');*/
    //home button (test)
    document.querySelector('.navbar .navright a').setAttribute('style', 'font-size: 17px;');
    //Login symbol
    //document.querySelector('.fas').setAttribute('style', 'font-size: 24px;');
  } else {
    //navbar
    //document.querySelector('.navbar').setAttribute('style', 'height: 0px;');
    document.querySelector('.navbar').setAttribute('style', 'transform: translateY(-80px);');

    //logos
    /*document.querySelector('.navbar .logos img').setAttribute('style', 'height: 80px; padding: 4px;');
    document.querySelector('.navbar .logos').classList.add('logos1');
    document.querySelector('.navbar .logos').classList.remove('logos2');*/
    //home button (test)
    document.querySelector('.navbar .navright a').style.fontSize = "20px";
    //Login symbol
    //document.querySelector('.fas').setAttribute('style', 'font-size: 30px;');
  }
}

//Slides:
document.querySelector('.fas').setAttribute('style', 'font-size: 30px;');

/* TESTING
<script> // src="scripts/scrollbar.js" 

document.querySelector('#btn-titulo').addEventListener('mouseout', function() {
//    document.querySelector('.title').innerHTML='<h4>INTRODUÇÃO AO JAVASCRIPT</h4>';
    document.querySelector('.navbar .navright a').textContent='INTRODUÇÃO AO JAVASCRIPT';
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.navbar .navright a').setAttribute('style', 'font-size: 90px;');
  } else {
    document.querySelector('.navbar .navright a').style.fontSize = "30px";
  }
}

/*      $(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('navbar').addClass('scrolled');
     }
    else {
      $('navbar').removeClass('scrolled');
    }
  });
});
      </script>


/*var slides = document.querySelectorAll(".invisible");
var i = 0;
var slide_imgs = 4; // Numero de fotos a apresentar no slideshow editar comentário

function slideshow() {
  slides[i].classList.add("fade-out-slide");
}

function init() {
  slides[0].classList.remove("invisible");

  for (j = 0; j < 4; j++) {
    slides[j].addEventListener("animationend", function() {
      if (slides[i].classList.contains("fade-out-slide")) {
        slides[i].classList.add("invisible");

        if (++i == slide_imgs) i = 0;

        if (i == 0) {
          slides[3].classList.remove("fade-out-slide");
        } else {
          slides[i - 1].classList.remove("fade-out-slide");
        }

        slides[i].classList.add("fade-in-slide");
        slides[i].classList.remove("invisible");
      }
    });
  }
}

init();
setInterval(slideshow, 6000);
*/