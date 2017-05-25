var grasss = document.createElement("canvas");
grasss.width = "64";
grasss.height = "64";
grasss.style = "display:none;";
document.body.appendChild(grasss);
var grasssctx = grasss.getContext("2d");
var ygrasss = 64;
var xgrasss = 0;
while(xgrasss < grasss.width){
var distbottoms = 64-ygrasss;
var grasssheight = Math.floor((Math.random() * 11) + 5);
while(ygrasss < grasss.height){
var dist2s = 64-ygrasss;
var randchanges = Math.floor((Math.random() * 5) - 5);
if(distbottoms < dist2s+grasssheight){
var randints = Math.floor((Math.random() * 3) + 1);
if(randints == 1){
grasssctx.fillStyle = "rgba(43,171,73,1)";
grassctx.fillRect( xgrasss, ygrasss, 1, 1 );
}else if(randint == 2){
grasssctx.fillStyle = "rgba(38,151,64,1)";
grasssctx.fillRect( xgrasss, ygrasss, 1, 1 );
}else if(randint == 3){
grasssctx.fillStyle = "rgba(51,138,71,1)";
grasssctx.fillRect( xgrasss, ygrasss, 1, 1 );
}
}else{

var randints = Math.floor((Math.random() * 3) + 1);
if(randints == 1){
grasssctx.fillStyle = "rgba(97,65,78,1)";
grasssctx.fillRect( xgrasss, ygrasss, 1, 1 );
}else if(randints == 2){
grasssctx.fillStyle = "rgba(112,84,59,1)";
grasssctx.fillRect( xgrasss, ygrasss, 1, 1 );
}else if(randints == 3){
grasssctx.fillStyle = "rgba(140,118,98,1)";
grasssctx.fillRect( xgrasss, ygrasss, 1, 1 );
}

}
var ygrasss = ygrasss + 1;
}
var ygrasss = 64-xgrasss+randchange;
var xgrasss = xgrasss + 1;
}
var dataurls = grasss.toDataURL();
var imagea = document.createElement("img");
imagea.src = dataurls;
imagea.id = "grassleft"
document.body.appendChild(imagea);
