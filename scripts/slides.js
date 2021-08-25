//Slides:
//document.querySelector('.fas').setAttribute('style', 'font-size: 30px;');
//w3.slideshow(".nature", 1000);
/*
(function($) {
    //padrão
    $.fn.fullClip = function(options) {
      var settings = $.extend({
        current: 0,
        images: [],
        transitionTime: 1000,
        wait: 3000,
        static: false
      }, options);
  
      // carregar imgens
      var i, end;
      for (i = 0, end = settings.images.length; i < end; ++i) {
          new Image().src = settings.images[i];
      }
  
      // Ordenar as transições 
      $('.fullBackground')
        .css('background-image', 'url(' + settings.images[settings.current] + ')')
        .css('-webkit-transition', 'background ' + settings.transitionTime + 's ease-in-out')
        .css('-moz-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
        .css('-ms-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
        .css('-o-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
        .css('transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
  
      // Se só uma imagem, definir como fundo estático
      if (settings.static) {
        $(this)
        .css('background-image', 'url(' + settings.images[settings.current] + ')');
        return;
      }
  
      // mudar imagem de fundo
      (function update() {
        settings.current = (settings.current + 1) % settings.images.length;
          $('.fullBackground').css('background-image', 'url(' + settings.images[settings.current] + ')');
          setTimeout(update, settings.wait);
      }());
  }}(jQuery));
  */