var grass = document.createElement("canvas");
grass.width = "64";
grass.height = "64";
grass.style = "display:none;";
document.body.appendChild(grass);
var grassctx = grass.getContext("2d");
var ygrass = 64;
var xgrass = 0;
while(xgrass < grass.width){
var distbottom = 64-ygrass;
var grassheight = Math.floor((Math.random() * 11) + 5);
while(ygrass < grass.height){
var dist2 = 64-ygrass;
var randchange = Math.floor((Math.random() * 5) - 5);
if(distbottom < dist2+grassheight){
var randint = Math.floor((Math.random() * 3) + 1);
if(randint == 1){
grassctx.fillStyle = "rgba(43,171,73,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}else if(randint == 2){
grassctx.fillStyle = "rgba(38,151,64,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}else if(randint == 3){
grassctx.fillStyle = "rgba(51,138,71,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}
}else{
var randint = Math.floor((Math.random() * 3) + 1);
if(randint == 1){
grassctx.fillStyle = "rgba(97,65,78,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}else if(randint == 2){
grassctx.fillStyle = "rgba(112,84,59,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}else if(randint == 3){
grassctx.fillStyle = "rgba(140,118,98,1)";
grassctx.fillRect( xgrass, ygrass, 1, 1 );
}

}
var ygrass = ygrass + 1;
}
var ygrass = 64-xgrass+randchange;
var xgrass = xgrass + 1;
}
var dataurl = grass.toDataURL();
var imag = document.createElement("img");
imag.src = dataurl;
imag.id = "grassleft"
document.body.appendChild(imag);
