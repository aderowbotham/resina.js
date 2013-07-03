// resina.js by Ade Rowbotham / @_ade
// July 2013
// replaces specified images with higher-res alternatives if the resolution and screen width are over a certain thresold

(function(){

  var retinaIsSet = false;

  var settings = {
    'minPixelRatio': 1.5,
    'minPixelWidth': 1000,
    'className': 'hd',
    'suffix' : '@2x'
  }
  
  var init = function(){
    window.addEventListener('resize', init, false);
    doTest();
  }
    
  var doTest = function(){
    var isRetina = window.devicePixelRatio >= settings.minPixelRatio && window.innerWidth >= settings.minPixelWidth;

    if(isRetina && !retinaIsSet){
      retinaIsSet = true;
      window.removeEventListener('resize', doTest, false);

      applyRetinaAssets();
    }
  }

  var applyRetinaAssets = function(){
    var images = top.document.getElementsByTagName('img');
    
    for(var i=0; i<images.length; i++){
      if(hasClass(images[i],settings.className)){        
        images[i].src = images[i].src.replace(/(\.[\w\d_-]+)$/i, settings.suffix+'$1')        
      }      
    }
  }

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  // run as soon as possible
  document.ready = init;

  // uncomment to expose init method
  // e.g. to pass the settings object as an argument
  // return {
  //   init: init
  // };

})();