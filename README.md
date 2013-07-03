##resina.js
######javascript utility that replaces images with high-res alternatives


####preamble
I'd half written this before I decided to Google it and stumbled upon [retina.js](http://retinajs.com/) - which is a neat little utility but which does lack a bit of the functionality I wanted, so I switched back to and finished my own version.


####what it does
This is for switching \<img\> images in your content. Use media queries to switch CSS images. 

In my example case I had a large 1280px-wide header image that had to be an \<img\> in the document (for reasons that are not of interest here). On my 'retina' iPad in portrait mode this 1280px width image looked acceptable because the display width is not much higher at 1536px. But in landscape mode the low resolution was more obvious. And on my shiny new MacBook pro it looked pretty dreadful.

So I wanted something that would switch the image only if the resolution and window size are over a certain threshold. And also, if the window is resized up after loading the page it should run the test again.


####features
- Triggers on load only over a minimum pixel ratio *and* window size (both settable)
- Triggers on window resize once if width goes over the threshold
- Finds img elements with the class 'hd' (you can change this)
- Appends '@2x' to the src attribute before the file extension (e.g. banana@2x.png)
- Is only 392 bytes (through Closure Compiler), with no dependencies.

####settings

    var settings = {
      'minPixelRatio': 1.5,
      'minPixelWidth': 1000,
      'className': 'hd',
      'suffix' : '@2x'
    }
    
####what *retina*.js does that this doesn't
- Automatically checks for an @2x image file
- Does the switch on all images without requiring a class name

In my version you have to be more explicit and add the 'hd' class in your HTML. However in some cases a little less magic is a good thing.
