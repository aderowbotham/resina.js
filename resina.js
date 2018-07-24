// resina.js by Ade Rowbotham / @_ade
// July 2013
// replaces specified images with higher-res alternatives if the resolution and screen width are over a certain thresold

(function(){

  "use strict";

  window.resina = (function(){

    var retinaIsSet = false;
    var firstRun = true;


    var settings = {
      minPixelRatio: 1.5,
      minPixelWidth: 800, // @NOTE zero means this now applies to all images if display is retina, regardless of screen size
      className: "hd",
      suffix : "@2x"
    };



    function init(_settings_){
      if(_settings_){
        for (var property in settings) {
          if (settings.hasOwnProperty(property) && typeof _settings_[property] !== typeof undefined) {
            settings[property] = _settings_[property];
          }
        }
      }

      window.addEventListener("resize", doTest, false);
      doTest();
    }



    function doTest(){
      var isRetina = window.devicePixelRatio >= settings.minPixelRatio && Math.max(window.screen.availHeight,window.screen.availWidth) >= settings.minPixelWidth;

      if(isRetina && !retinaIsSet){
        retinaIsSet = true;
        window.removeEventListener("resize", doTest, false);

        return _parseImages(true);
      }

      if(firstRun){
        _parseImages(false);
        firstRun = false;
      }
    }



    function _parseImages(retinaMode){
      var images = top.document.getElementsByTagName('img');

      for(var i=0; i<images.length; i++){
        if(_hasClass(images[i], settings.className)){

          var originalSource = images[i].getAttribute("data-src") || images[i].src;
          if(!originalSource){
            return;
          }

          if(retinaMode){
            images[i].src = originalSource.replace(/(\.[\w\d_-]+)$/i, settings.suffix+'$1');
          } else {
            // support images presented with a data-src attribute but no src attribute that are NOT being retinized
            // only happens on first run
            if(!images[i].src){
              images[i].src = originalSource;
            }
          }

        }
      }
    }


    function _hasClass(element, cls) {
      return (" " + element.className + " ").indexOf(" " + cls + " ") !== -1;
    }


    // uncomment to expose init method
    // e.g. to pass the settings object as an argument
    // return {
    //   init: init
    // };

    // otherwise self-init
    document.ready = init;


  })();


})();
