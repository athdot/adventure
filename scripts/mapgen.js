    setTimeout(function(){
//We have the image, now lets make the canvas display the image
var pxsize = 32;
var image = document.getElementById("image");
var readercanvas = document.createElement("canvas");
var readctx = readercanvas.getContext("2d");
readercanvas.id = "readme";
readercanvas.width = image.width;
readercanvas.height = image.height;
readercanvas.style = "display:none;"
readctx.drawImage(image,0,0);
document.body.appendChild(readercanvas);
//There is the readable heightmap, here is the finished product
var texturecanvas = document.createElement("canvas");
var textctx = texturecanvas.getContext("2d");
texturecanvas.id = "texture";
texturecanvas.style = "border: 1px solid;"
texturecanvas.width = readercanvas.width*pxsize;
texturecanvas.height = readercanvas.height*pxsize;
document.body.appendChild(texturecanvas);
//End
//now for the reader
{
	var x = 0;
  var y = 0;
  var width = readercanvas.width;
  var height = readercanvas.height;
  while(x < width){
  	while(y < height){
    	data = readctx.getImageData(x,y, 1, 1).data;
     	var data = data.toString();
      if(data === "0,255,0,255"){
	      datadownslope = readctx.getImageData((x-1),(y-1), 1, 1).data;
     	var datadownslope = datadownslope.toString();
	      dataupslope = readctx.getImageData((x+1),(y-1), 1, 1).data;
     	var dataupslope = dataupslope.toString();
	      if(datadownslope === "0,255,0,255"){
		            	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("dirt"+supdirt);
        context.drawImage(dirt,texturex,texturey,pxsize,pxsize)
      	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("grassright"+supdirt);
        context.drawImage(dirt,texturex,texturey-pxsize,pxsize,pxsize)		      
	      }else if(dataupslope === "0,255,0,255"){
		            	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("dirt"+supdirt);
        context.drawImage(dirt,texturex,texturey,pxsize,pxsize)
      	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("grassleft"+supdirt);
        context.drawImage(dirt,texturex,texturey-pxsize,pxsize,pxsize)		      
	      }else{
      	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("grass"+supdirt);
        context.drawImage(dirt,texturex,texturey,pxsize,pxsize)
	      }
      }
	if(data === "244,164,96,255"){
      	//Code for filling in square on bigger image =)
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supdirt = Math.floor((Math.random() * 5) + 1);
        var dirt = document.getElementById("dirt"+supdirt);
        context.drawImage(dirt,texturex,texturey,pxsize,pxsize)
      }
	if(data === "100,100,100,255"){
      	var texturex = x*pxsize;
        var texturey = y*pxsize;
      	var canvas = document.getElementById("texture");
        var context = canvas.getContext("2d");
        var supstone = Math.floor((Math.random() * 5) + 1);
        var stone = document.getElementById("stone"+supstone);
        context.drawImage(stone,texturex,texturey,pxsize,pxsize) 
      }
      var y = y+1;
    }
    var y = 0;
    var x = x+1;
  }
}
},1);
