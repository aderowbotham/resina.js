(function(){var d=!1,c=function(){if(1.5<=window.devicePixelRatio&&800<=Math.max(window.screen.availHeight,window.screen.availWidth)&&!d){d=!0;window.removeEventListener("resize",c,!1);for(var b=top.document.getElementsByTagName("img"),a=0;a<b.length;a++)-1<(" "+b[a].className+" ").indexOf(" hd ")&&(b[a].src=b[a].src.replace(/(\.[\w\d_-]+)$/i,"@2x$1"))}};document.ready=function(){window.addEventListener("resize",c,!1);c()}})();
